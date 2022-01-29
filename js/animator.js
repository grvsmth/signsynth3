export default class animator {
    constructor(scene, camera, renderer, humanoid, clock, totalFrames) {
	this.scene = scene;
	this.camera = camera;
	this.renderer = renderer;
	this.humanoid = humanoid;
	this.clock = clock;
	this.totalFrames = totalFrames;
	this.mixer = new THREE.AnimationMixer();

	this.start = undefined;
	this.previousTimestamp = undefined;

	this.processRotation = this.processRotation.bind(this);
	this.simpleAnimate = this.simpleAnimate.bind(this);
    }

    animate(timestamp) {
	if (this.start === undefined) {
	    this.start = timestamp;
	}

	const elapsed = timestamp - this.start;

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
	console.log("vector", vector);
	console.log("scalar", quaternion.scalar);
	joint.quaternion.setFromAxisAngle(vector, quaternion.scalar);
	this.renderer.render(this.scene, this.camera);
    }

    processRotation(rotation) {
	console.log(rotation);
	const joint = this.humanoid[rotation.articulator][rotation.joint];
	// this.setRotation(joint, rotation.rotation);
	this.moveJoint(joint, rotation.rotation);
    }


    render() {
	if (this.mixer) {
	    this.mixer.update(this.clock.getDelta());
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

    moveJoint(joint, finalValue) {
	const initialQuaternion = joint.quaternion;
	const finalQuaternion = this.makeQuaternion(finalValue.vector,
						    finalValue.scalar);

	const keyFrameTrack = this
	      .makeQuaternionKeyFrameTrack(initialQuaternion,
					   finalQuaternion);

	const clip = new THREE.AnimationClip("MoveJoint", 3, [keyFrameTrack]);
	this.mixer = new THREE.AnimationMixer(joint);

	const clipAction = this.mixer.clipAction(clip);

	clipAction.play();
	// this.simpleAnimate(performance.now());
    }
}
