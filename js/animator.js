export default class animator {
    constructor(scene, camera, renderer, humanoid, clock, totalFrames) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.humanoid = humanoid;
        this.clock = clock;
        this.totalFrames = totalFrames;

        this.capturer = null;
        this.outputDiv = null;
        this.mode = "player";

        this.mixers = {};
        this.clips = {};

        this.playing = false;

        this.startTime = undefined;
        this.previousTimestamp = undefined;

        this.processRotation = this.processRotation.bind(this);
        this.simpleAnimate = this.simpleAnimate.bind(this);

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    isPlaying() {
        return this.playing;
    }

    setCapturer(capturer, outputDiv) {
        this.capturer = capturer;
        this.outputDiv = outputDiv;     
    }

    setMode(mode) {
        this.mode = mode;
    }

    makeTimes(length, interval=0.5) {
        const times = [];
        for (let index=0; index<length; index++) {
            times.push(index * interval);
        }
        return times;
    }

    makeQuaternion(vector, scalar) {
        const vectorThree = new THREE.Vector3(...vector);
        return new THREE.Quaternion().setFromAxisAngle(vectorThree, scalar);
    }

    concatenateQuaternion(array, quaternion) {
        return array.concat(quaternion.toArray());
    }

    makeQuaternionKeyFrameTrack(quaternions) {
        const values = quaternions.reduce(this.concatenateQuaternion, []);
        const times = this.makeTimes(quaternions.length, 0.75);

        return new THREE.QuaternionKeyframeTrack('.quaternion',
                                                 times,
                                                 values);
    }

    moveJoint(name, joint, targetValue) {
        const initialQuaternion = joint.quaternion;
        const targetQuaternion = this.makeQuaternion(targetValue.vector,
                                                    targetValue.scalar);

        let quaternions = [initialQuaternion,
                             targetQuaternion];

        if (this.mode === "player") {
            quaternions = quaternions.concat([targetQuaternion,
                                              initialQuaternion]);
        }

        const keyFrameTrack = this.makeQuaternionKeyFrameTrack(quaternions);

        const totalTime = keyFrameTrack.times.slice(-1);

        const clip = new THREE.AnimationClip(name, totalTime, [keyFrameTrack]);
        const mixer = new THREE.AnimationMixer(joint);

        const clipAction = mixer.clipAction(clip);
        clipAction.loop = THREE.LoopOnce;
        clipAction.clampWhenFinished = true;
        clipAction.play();

        this.mixers[name] = mixer;
        this.clips[name] = clip;
    }

    processRotation(rotation, restAfter) {
        const joint = this.humanoid[rotation.articulator][rotation.joint];
        const jointName = rotation.articulator + "_" + rotation.joint;
        this.moveJoint(jointName, joint, rotation.rotation);
    }

    render() {
        if (this.mode === "player" && !this.playing) {
            return;
        }

        const delta = this.clock.getDelta();

        for (const joint in this.mixers) {
            const clip = this.clips[joint];
            const action = this.mixers[joint].existingAction(clip);

            if (action.isRunning()) {
                this.mixers[joint].update(delta);
                continue;
            } else {
                this.stop();
            }
        }

        this.renderer.render(this.scene, this.camera);
        if (this.capturer) {
            this.capturer.capture(this.renderer.domElement);
        }
    }

    simpleAnimate(timestamp) {
        requestAnimationFrame(this.simpleAnimate);
        this.render();
    }

    start() {
        if (this.capturer) {
            this.capturer.start();
        }

        this.playing = true;
        this.simpleAnimate(performance.now());
    }

    stop() {
        this.playing = false;

        if (this.capturer) {
            this.capturer.stop();
            this.capturer.save();
        }
    }

    clear() {
        this.clips = {};
        this.mixers = {};
    }
}
