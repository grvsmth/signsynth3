/**
 * Class defining a humanoid for animation
 *
 * Angus B. Grieve-Smith, 2022
 */

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
	this.addTorso();

	this.addArm("right");
	this.addArm("left");
    }

    colorMaterial(color) {
	return new THREE.MeshBasicMaterial({"color": color});
    }

    makeMaterials() {
	return {
	    "torso": this.colorMaterial(0x505050),
	    "skin": this.colorMaterial(0xFF9a66),
	    "hair": this.colorMaterial(0xFF7F10),
	    "eyewhite": this.colorMaterial(0xEEEEEE),
	    "iris": this.colorMaterial(0x198055),
	    "pupil": this.colorMaterial(0x191919),
	    "lip": this.colorMaterial(0xC01414)
	};
    }

    addTorso() {
	const torsoGeometry = new THREE.BoxGeometry(3.684, 2.508, 1.08);
	this.body.add(new THREE.Mesh( torsoGeometry, this.material.torso ));
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
	this[handedness] = {};

	this[handedness].elbow = this.makeElbow();
	this[handedness].shoulder = this.makeShoulder(this[handedness].elbow);
	this[handedness].shoulder.position
	    .set(...position[handedness].shoulder);
	this.body.add(this[handedness].shoulder);
    }
}
