/**
 * Class defining a humanoid for animation
 *
 * Angus B. Grieve-Smith, 2022
 */

import head from "./head.js";

const position = {
    "left": {
	"shoulder": [1.8, 1.14, 0],
	"thumb": [-0.2, -0.1, 0.258],
	"index": [-0.07, -0.61, .18],
	"middle": [-0.04, -0.61, .06],
	"ring": [-0.04, -0.61, -.06],
	"pinky": [-0.07, -0.61, -.18]
    },
    "right": {
	"shoulder": [-1.8, 1.14, 0],
	"thumb": [0.2, -0.1, 0.258],
	"index": [0.07, -0.61, .18],
	"middle": [0.04, -0.61, .06],
	"ring": [0.04, -0.61, -.06],
	"pinky": [0.07, -0.61, -.18]
    }
};

const finger = {
    "height": {
	"joint1": 0.312,
	"joint2": 0.228,
	"joint3": 0.132
    },
    "rotation":  {
	"joint1": 0.785,
	"joint2": .5,
	"joint3": .5
    }
};

const thumb = {
    "height": {
	"joint1": 0.288,
	"joint2": 0.204,
	"joint3": 0.108
    },
    "rotation":  {
	"joint1": 0.8,
	"joint2": 0,
	"joint3": 0
    }
};

const arm = {
    "height": {
        "forearm": 1.92,
        "upperarm": 2.28
    }
};

const pointOfContact = {
    "index1": {},
    "middle1": {},
    "middle2": {},
    "middle3": {},
    "pinky1": {},
    "thumb1": {},
    "thumb3": {},
    "wrist": {}

};

const contactTarget = {
    "right": {
        "Q": [-1.8, 1.14, 2],
        "h": [],
        "u": [-1, 2, 2],
        "m": [],
        "l": [],
        "c": [],
        "k": [],
        "[": [0, 0.75, 0.54],
        "i": [],
        "j": [],
        "as": []
    },
    "left": {
        "Q": [-1.8, 1.14, 2],
        "h": [],
        "u": [],
        "m": [],
        "l": [],
        "c": [],
        "k": [],
        "[": [0, 0.75, 0.54],
        "i": [],
        "j": [],
        "as": []
    }
};

const skinColor = 0xFF9a66;

export default class humanoid {
    constructor() {
	this.body = new THREE.Group();
	this.material = this.makeMaterials();
	this.handed = "right";

	this.right = {"chain": {}};
	this.left = {"chain": {}};

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
	    "nostril": this.colorMaterial(0x101010),
            "target": this.colorMaterial(0xFF6666)
	};
    }

    makeTarget() {
        const targetGeometry = new THREE.SphereGeometry(0.1);
        return new THREE.Mesh(targetGeometry, this.material.target);
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
							   arm.height.forearm,
							   32);
	const forearmMesh = new THREE.Mesh(forearmGeometry,
					   this.material.skin);
	forearmMesh.position.set(0, - arm.height.forearm / 2, 0);

	const elbow = new THREE.Group();
	elbow.add(forearmMesh);

	wrist.position.set(0, - arm.height.forearm, 0);
	elbow.add(wrist);

	return elbow;
    }

    makeShoulder(elbow) {
	elbow.position.set(0, - arm.height.upperarm, 0);

	const upperArmGeometry = new THREE
              .CylinderGeometry(0.288, 0.288, arm.height.upperarm, 32);
	const upperArmMesh = new THREE.Mesh(upperArmGeometry,
					    this.material.skin);
	upperArmMesh.position.set(0, - arm.height.upperarm/2, 0);

	const shoulder = new THREE.Group();
	shoulder.add(upperArmMesh);
	shoulder.add(elbow);

	return shoulder;
    }

    makeJoint(handedness, joint, extension) {
	const group = new THREE.Group;

	const geometry = new THREE.CylinderGeometry(0.072,
						    0.072,
						    finger.height[joint]);
	const mesh = new THREE.Mesh(geometry, this.material.skin);
	group.add(mesh);

        const direction = handedness === "right" ? 1 : -1;

	group.quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1),
					  direction * finger.rotation[joint]);
	if (extension !== undefined) {
	    extension.position.set(0.01,
                                   - (finger.height[joint] - 0.1),
                                   0);
	    group.add(extension);
	}

	return group;
    }

    addFinger(handedness, finger) {
	this[handedness][finger] = {};

	this[handedness][finger + "3"] = this.makeJoint(handedness, "joint3");
	this[handedness][finger + "2"] = this.makeJoint(handedness,
	    "joint2", this[handedness][finger + "3"]);
	this[handedness][finger + "1"] = this
	    .makeJoint(handedness, "joint1", this[handedness][finger + "2"]);

	const fingerPosition = position[handedness][finger];
	this[handedness][finger + "1"].position.set(...fingerPosition);
	this[handedness].wrist.add(this[handedness][finger + "1"]);
    }

    addHand(handedness) {
	const fingers = ["thumb", "index", "middle", "ring", "pinky"];
	fingers.forEach((finger) => {
	    this.addFinger(handedness, finger);
	});
    }

    addChain(handedness) {
        const startLoc = new FIK.V3(...position[handedness].shoulder);
        const chain = new FIK.Chain3D();

        const upperArmBone = new FIK.Bone3D(startLoc,
                                            null,
                                            FIK.Y_NEG,
                                            arm.height.upperarm);
                                            
        upperArmBone.name = "rightUpperArmBone";
        chain.addBone(upperArmBone);
        chain.addConsecutiveHingedBone(FIK.X_NEG,
                                       arm.height.forearm,
                                       'global',
                                       FIK.Y_AXE,
                                       90,
                                       120,
                                       FIK.X_NEG);
        chain.bones[chain.bones.length-1].name = "rightForeArmBone";

        const thumbVector = new THREE
              .Vector3(...position[handedness].thumb);
        const thumbMetacarpal = new FIK
              .Bone3D(chain.bones[chain.numBones-1].end,
                      thumbVector);
        thumbMetacarpal.name = "rightThumbMetacarpal";
        chain.addBone(thumbMetacarpal);

        this[handedness].chain["thumb3"] = chain;
    }

    addArm(handedness) {
	this[handedness].wrist = this.makeWrist();
	this.addHand(handedness);
	this[handedness].elbow = this.makeElbow(this[handedness].wrist);
	this[handedness].shoulder = this.makeShoulder(this[handedness].elbow);
	this[handedness].shoulder.position
	    .set(...position[handedness].shoulder);
	this.body.add(this[handedness].shoulder);

        if (typeof FIK !== "undefined") {
            this.addChain(handedness);
        }
    }

    addTarget(handedness, targetName) {
        const target = this.makeTarget();
        target.position.set(...contactTarget[handedness][targetName]);
        return target;
    }
}
