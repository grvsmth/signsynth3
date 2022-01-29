export default class animator {
    constructor(scene, camera, renderer, humanoid, clock, totalFrames) {
	this.scene = scene;
	this.camera = camera;
	this.renderer = renderer;
	this.humanoid = humanoid;
	this.clock = clock;
	this.totalFrames = totalFrames;
	this.mixer = new THREE.AnimationMixer();

	this.mixers = {};

	this.playing = false;

	this.startTime = undefined;
	this.previousTimestamp = undefined;

	this.processRotation = this.processRotation.bind(this);
	this.simpleAnimate = this.simpleAnimate.bind(this);

	this.start = this.start.bind(this);
	this.stop = this.stop.bind(this);
    }

    animate(timestamp) {
	if (this.startTime === undefined) {
	    this.startTime = timestamp;
	}

	const elapsed = timestamp - this.startTime;

	if (this.previousTimestamp !== timestamp) {
	    this.humanoid.right.shoulder.rotation.x -= 0.01;
            this.humanoid.right.elbow.rotation.x += 0.005;
            this.humanoid.right.shoulder.rotation.y -= 0.01;
            // this.humanoid.right.elbow.rotation.y -= 0.05;

	    this.renderer.render(this.scene, this.camera);
	}

	if (elapsed < this.totalFrames) {
	    this.previousTimestamp = timestamp;
	    requestAnimationFrame(this.animate.bind(this));
	}
    }

    setRotation(joint, quaternion) {
	const vector = new THREE.Vector3(...quaternion.vector);
	joint.quaternion.setFromAxisAngle(vector, quaternion.scalar);
	this.renderer.render(this.scene, this.camera);
    }

    processRotation(rotation) {
	const joint = this.humanoid[rotation.articulator][rotation.joint];
	// this.setRotation(joint, rotation.rotation);
	const jointName = rotation.articulator + "_" + rotation.joint;
	this.moveJoint(jointName, joint, rotation.rotation);
    }


    render() {
	if (!this.playing) {
	    return;
	}
        const delta = this.clock.getDelta();

	for (const joint in this.mixers) {
	    //console.log("isRunning?", this.mixers[joint].isRunning());
	    console.log("Updating " + joint, delta);
	    this.mixers[joint].update(delta);
	}

	this.renderer.render(this.scene, this.camera);
    }

    simpleAnimate(timestamp) {
	requestAnimationFrame(this.simpleAnimate);
	this.render();
    }

    makeQuaternion(vector, scalar) {
	const vectorThree = new THREE.Vector3(...vector);
	return new THREE.Quaternion().setFromAxisAngle(vectorThree, scalar);
    }

    makeQuaternionKeyFrameTrack(initialQuaternion, finalQuaternion) {
	const values = initialQuaternion.toArray()
	      .concat(finalQuaternion.toArray());

	return new THREE.QuaternionKeyframeTrack('.quaternion',
						 [0, 1],
						 values);
    }

    start() {
        console.log("mixers", this.mixers);
	this.simpleAnimate(performance.now());
	this.playing = true;
    }

    stop() {
	this.playing = false;
    }

    moveJoint(name, joint, finalValue) {
	console.log(`moveJoint(${name})`, joint);
	const initialQuaternion = joint.quaternion;
	const finalQuaternion = this.makeQuaternion(finalValue.vector,
						    finalValue.scalar);

	const keyFrameTrack = this
	      .makeQuaternionKeyFrameTrack(initialQuaternion,
					   finalQuaternion);

	const clip = new THREE.AnimationClip(name, 3, [keyFrameTrack]);
	const mixer = new THREE.AnimationMixer(joint);

	const clipAction = mixer.clipAction(clip);
	clipAction.loop = THREE.LoopOnce;
	clipAction.clampWhenFinished = true;
	clipAction.play();

	this.mixers[name] = mixer;
    }
}
