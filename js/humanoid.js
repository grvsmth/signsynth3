/**
 * Class defining a humanoid for animation
 *
 * Angus B. Grieve-Smith, 2022
 */

import head from "./head.js";

const position = {
    "left": {
	"shoulder": [1.8, 1.14, 0]
    },
    "right": {
	"shoulder": [-1.8, 1.14, 0]
    }
};

export default class humanoid {
    constructor() {
	this.body = new THREE.Group();
	this.material = this.makeMaterials();

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

	this.body.quaternion.setFromAxisAngle(
	    new THREE.Vector3(0.5, .3, 0), Math.PI/6);


    }

    makeElbow() {
	const forearmGeometry = new THREE.CylinderGeometry(0.288,
							   0.288,
							   1.92,
							   32);
	const forearmMesh = new THREE.Mesh(forearmGeometry,
					   this.material.skin);
	forearmMesh.position.set(0, -0.96, 0);

	const elbow = new THREE.Group();
	elbow.add(forearmMesh);

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

    addArm(handedness) {
	// thumb1,2,3k, index, middle, ring, pinky, wrist

	this[handedness].elbow = this.makeElbow();
	this[handedness].shoulder = this.makeShoulder(this[handedness].elbow);
	this[handedness].shoulder.position
	    .set(...position[handedness].shoulder);
	this.body.add(this[handedness].shoulder);
    }
}
