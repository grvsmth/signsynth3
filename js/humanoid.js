/**
 * Class defining a humanoid for animation
 *
 * Angus B. Grieve-Smith, 2022
 */

import head from "./head.js";

const position = {
    "left": {
	"shoulder": [1.8, 1.14, 0],
	"index": [0, -0.72, .18],
	"middle": [0, -0.72, .06],
	"ring": [0, -0.72, -.06],
	"pinky": [0, -0.72, -.18]
    },
    "right": {
	"shoulder": [-1.8, 1.14, 0],
	"index": [0, -0.72, .18],
	"middle": [0, -0.72, .06],
	"ring": [0, -0.72, -.06],
	"pinky": [0, -0.72, -.18]
    }
};

const finger = {
    "height": {
	"joint1": 0.312,
	"joint2": 0.228,
	"joint3": 0.132
    },
    "rotation":  {
	"joint1": -0.785,
	"joint2": -.5,
	"joint3": -.5
    }
};

const thumb = {
    "height": {
	"joint1": 0.288,
	"joint2": 0.204,
	"joint3": 0.108
    },
    "rotation":  {
	"joint1": -0.8,
	"joint2": 0,
	"joint3": 0
    }
};

export default class humanoid {
    constructor() {
	this.body = new THREE.Group();
	this.material = this.makeMaterials();
	this.handed = "right";

	this.right = {};
	this.left = {};

	this.addTrunk();

	this.addArm("right");
	this.addArm("left");
    }

    colorMaterial(color) {
	return new THREE.MeshLambertMaterial({"color": color});
    }

    makeMaterials() {
	return {
	    "torso": this.colorMaterial(0x505050),
	    "skin": this.colorMaterial(0xFF9a66),
	    "hair": this.colorMaterial(0xFF7F10),
	    "eyeWhite": this.colorMaterial(0xEEEEEE),
	    "iris": this.colorMaterial(0x198055),
	    "pupil": this.colorMaterial(0x191919),
	    "lip": this.colorMaterial(0xC01414),
	    "nostril": this.colorMaterial(0x101010)
	};
    }

    makeTorso() {
	const torsoGeometry = new THREE.BoxGeometry(3.684, 2.508, 1.08);
	return new THREE.Mesh( torsoGeometry, this.material.torso );
    }

    addTrunk() {
	this.torso = this.makeTorso();
	this.body.add(this.torso);

	this.head = new THREE.Group();

	this.neck = head.makeNeck(this.material.skin);
	this.head.add(this.neck);

	const skullBase = new THREE.Group();
	const skull = head.makeSkull(this.material.skin);
	skullBase.add(skull);

	skullBase.position.set(0, 1.1, 0);
	this.head.add(skullBase);

	this.lipGeometry = head.makeLips();

	const lipMesh = new THREE.Mesh(this.lipGeometry, this.material.lip);
	lipMesh.position.set(0, -0.5, 0.2);
	skullBase.add(lipMesh);

	const nose = head.makeNose(this.material);
	nose.position.set(0, -0.2, 1.0);
	skullBase.add(nose);

	const hair = head.makeHair(this.material.hair);
	hair.position.set(0, 0, 0.2);
	skullBase.add(hair);

	// outerLips, tongue

	this.right.eye = head.makeRightEye(this.material);
	this.right.eye.position.set(-0.35, .08, 1.07);
	skullBase.add(this.right.eye);

	this.left.eye = head.makeLeftEye(this.material);
	this.left.eye.position.set(0.35, .08, 1.07);
	skullBase.add(this.left.eye);

	// left and right
	// eye, eyebrow, eyebrowwrinkle, topeyeline, toplid, bottomlid, 
	// bottomeyeline

	this.head.position.set(0, 1.404, 0);
	this.body.add(this.head);

    }

    makeWrist() {
	const geometry = new THREE.BoxGeometry(0.15, 0.588, 0.516);
	const mesh = new THREE.Mesh(geometry, this.material.skin);
	
	const wrist = new THREE.Group();
	mesh.position.set(0, -0.294, 0);
	wrist.add(mesh);

	return wrist;
    }

    makeElbow(wrist) {
	const forearmGeometry = new THREE.CylinderGeometry(0.288,
							   0.288,
							   1.92,
							   32);
	const forearmMesh = new THREE.Mesh(forearmGeometry,
					   this.material.skin);
	forearmMesh.position.set(0, -0.96, 0);

	const elbow = new THREE.Group();
	elbow.add(forearmMesh);

	wrist.position.set(0, -1.92, 0);
	elbow.add(wrist);

	return elbow;
    }

    makeShoulder(elbow) {
	elbow.position.set(0, -2.28, 0);

	const upperArmGeometry = new THREE.CylinderGeometry(0.288,
                                                            0.288,
                                                            2.28,
                                                            32);
	const upperArmMesh = new THREE.Mesh(upperArmGeometry,
					    this.material.skin);
	upperArmMesh.position.set(0, -1.14, 0);

	const shoulder = new THREE.Group();
	shoulder.add(upperArmMesh);
	shoulder.add(elbow);

	return shoulder;
    }

    makeJoint(joint, extension) {
	const group = new THREE.Group;

	const geometry = new THREE.CylinderGeometry(0.072,
						    0.072,
						    finger.height[joint]);
	const mesh = new THREE.Mesh(geometry, this.material.skin);
	group.add(mesh);

	group.quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1),
					 finger.rotation[joint]);
	if (extension !== undefined) {
	    extension.position.set(0, - (finger.height[joint] - .1), 0);
	    group.add(extension);
	}

	return group;
    }

    makeThumbJoint(joint, extension) {
	const group = new THREE.Group;

	const geometry = new THREE.CylinderGeometry(0.072,
						    0.072,
						    thumb.height[joint]);
	const mesh = new THREE.Mesh(geometry, this.material.skin);
	group.add(mesh);

	group.quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1),
					  thumb.rotation[joint]);
	if (extension !== undefined) {
	    extension.position.set(0, - (thumb.height[joint] - .1), 0);
	    group.add(extension);
	}

	return group;
    }

    addFinger(handedness, finger) {
	this[handedness][finger] = {};

	this[handedness][finger]["joint3"] = this.makeJoint("joint3");
	this[handedness][finger]["joint2"] = this.makeJoint(
	    "joint2", this[handedness][finger]["joint3"]);
	this[handedness][finger]["joint1"] = this
	    .makeJoint("joint1", this[handedness][finger]["joint2"]);

	const fingerPosition = position[handedness][finger];
	this[handedness][finger]["joint1"].position.set(...fingerPosition);
	this[handedness].wrist.add(this[handedness][finger]["joint1"]);
    }


    addThumb(handedness) {
	this[handedness].thumb = {};

	this[handedness].thumb["joint3"] = this.makeThumbJoint("joint3");
	this[handedness].thumb["joint2"] = this
	    .makeThumbJoint("joint2", this[handedness].thumb["joint3"]);
	this[handedness].thumb["joint1"] = this
	    .makeThumbJoint("joint1", this[handedness].thumb["joint2"]);

	this[handedness].thumb["joint1"].position.set(0, 0, -0.258);
	this[handedness].wrist.add(this[handedness].thumb["joint1"]);
    }

    addHand(handedness) {
	const fingers = ["index", "middle", "ring", "pinky"];
	fingers.forEach((finger) => {
	    this.addFinger(handedness, finger);
	});

	this.addThumb(handedness);
    }

    addArm(handedness) {

	this[handedness].wrist = this.makeWrist();
	this.addHand(handedness);
	this[handedness].elbow = this.makeElbow(this[handedness].wrist);
	this[handedness].shoulder = this.makeShoulder(this[handedness].elbow);
	this[handedness].shoulder.position
	    .set(...position[handedness].shoulder);
	this.body.add(this[handedness].shoulder);
    }
}
