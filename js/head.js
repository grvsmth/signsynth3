/**
 * Create parts of the head
 *
 * Angus B. Grieve-Smith, 2022
 */

const exports = {
    "makeNeck": function(material) {
	const neckGeometry = new THREE.CylinderGeometry(0.408, 0.408, 0.588);
	return(new THREE.Mesh(neckGeometry, material));
    },

    "makeSkull": function(material) {
	const skullGeometry = new THREE.SphereGeometry(1.032);
	return (new THREE.Mesh(skullGeometry, material));
    },

    "makeLips": function() {
	const lipGeometry = new THREE.BufferGeometry();

	const lipVertices = new THREE.Float32BufferAttribute([-.4, .05, .82,
							      -.2, .05, .97,
							      -.1, .01, .97,
							      .1, .01, .97,
							      .2, .05, .97,
							      .4, .05, .82,
							      -.2, -.05, 1.02,
							      -.15, -.1, 1.02,
							      .15, -.1, 1.02,
							      .2, -.05, 1.02,
							      .1, .1, 1.02,
							      0, .08, 1.02,
							      -.1, .1, 1.02,
							      -.2, .05, .97,
							      -.1, .01, .97,
							      .1, .01, .97,
							      .2, .05, .97,
							      0, .3, 1.02
							     ], 3);
	const lipIndices = [0, 1, 12,
			    1, 2, 12,
			    2, 11, 12,
			    2, 3, 11,
			    3, 10, 11,
			    3, 4, 10,
			    4, 5, 10,
			    0, 6, 13,
			    6, 14, 13,
			    6, 7, 14,
			    7, 15, 14,
			    7, 8, 15,
			    8, 9, 15,
			    9, 16, 15,
			    9, 5, 16
			   ];

	lipGeometry.setIndex(lipIndices);
	lipGeometry.setAttribute("position", lipVertices);
	lipGeometry.computeVertexNormals();

	return lipGeometry;
    },

    "makeRightEye": function(material) {
	const eye = new THREE.Group();

	const eyeWhiteGeometry = new THREE.BufferGeometry();
	const eyeWhiteVertices = new THREE.Float32BufferAttribute(
	    [-.2, 0, 0,
	     -.13, -.06, 0,
             -.13, .07, 0,
             0, -.07, 0,
             0, .07, 0,
             .13, -.06, 0,
             .13, .07, 0,
             .2, 0, 0
 	    ], 3);

	const eyeWhiteIndices = [0, 1, 2,
				 2, 1, 3,
				 2, 3, 4,
				 4, 3, 5,
				 4, 5, 6,
				 6, 5, 7
				];
	eyeWhiteGeometry.setIndex(eyeWhiteIndices);
	eyeWhiteGeometry.setAttribute("position", eyeWhiteVertices);

	eyeWhiteGeometry.computeVertexNormals();

	const eyeWhiteMesh = new THREE.Mesh(eyeWhiteGeometry,
					    material.eyeWhite);

	eye.add(eyeWhiteMesh);

	const irisGeometry = new THREE.SphereGeometry(0.065);
	const irisMesh = new THREE.Mesh(irisGeometry, material.iris);

	const pupilGeometry = new THREE.CylinderGeometry(0.025, 0.025, 0.13);
	const pupilMesh = new THREE.Mesh(pupilGeometry, material.pupil);
	pupilMesh.quaternion.setFromAxisAngle(
	    new THREE.Vector3(1, 0, 0), Math.PI/2);

	eye.add(irisMesh);
	eye.add(pupilMesh);
	return eye;
    },

    "makeLeftEye": function(material) {
	const eye = new THREE.Group();

	const eyeWhiteGeometry = new THREE.BufferGeometry();
	const eyeWhiteVertices = new THREE.Float32BufferAttribute(
	    [-.2, 0, 0,
	     -.13, -.06, 0,
             -.13, .07, 0,
             0, -.07, 0,
             0, .07, 0,
             .13, -.06, 0,
             .13, .07, 0,
             .2, 0, 0
 	    ], 3);

	const eyeWhiteIndices = [0, 1, 2,
				 2, 1, 3,
				 2, 3, 4,
				 4, 3, 5,
				 4, 5, 6,
				 6, 5, 7
				];
	eyeWhiteGeometry.setIndex(eyeWhiteIndices);
	eyeWhiteGeometry.setAttribute("position", eyeWhiteVertices);
	eyeWhiteGeometry.computeVertexNormals();

	const eyeWhiteMesh = new THREE.Mesh(eyeWhiteGeometry,
					    material.eyeWhite);

	eye.add(eyeWhiteMesh);

	const irisGeometry = new THREE.SphereGeometry(0.065);
	const irisMesh = new THREE.Mesh(irisGeometry, material.iris);

	const pupilGeometry = new THREE.CylinderGeometry(0.025, 0.025, 0.13);
	const pupilMesh = new THREE.Mesh(pupilGeometry, material.pupil);
	pupilMesh.quaternion.setFromAxisAngle(
	    new THREE.Vector3(1, 0, 0), Math.PI/2);

	eye.add(irisMesh);
	eye.add(pupilMesh);
	return eye;
    },

    "makeNose": function(material) {
	const noseGroup = new THREE.Group();

	const noseGeometry = new THREE.BufferGeometry();
	const noseVertices = new THREE.Float32BufferAttribute([.17, 0, 0,
							       .04, .45, 0,
							       .04, .17, .17,
							       .03, .01, .25,
							       -.17, 0, 0,
							       -.03, .01, .25,
							       -.04, .17, .17,
							       -.04, .45, 0,
							       .16, 0, .1,
							       .1, 0, .16,
							       -.16, 0, .1,
							       -.1, 0, -.16,
							       0, 0, .25,
							       0, .35, 0
							      ], 3);
	    

	const noseIndices = [0, 1, 2,
			     0, 2, 3,
			     4, 5, 6,
			     4, 6, 7,
			     3, 2, 6,
			     3, 6, 5,
			     2, 1, 7,
			     2, 7, 6,
			     8, 0, 13,
			     9, 8, 13,
			     12, 9, 13,
			     11, 12, 13,
			     10, 11, 13,
			     4, 10, 13,
			    ];

	noseGeometry.setIndex(noseIndices);
	noseGeometry.setAttribute("position", noseVertices);
	noseGeometry.computeVertexNormals();

	const noseMesh = new THREE.Mesh(noseGeometry,
					    material.skin);


	noseGroup.add(noseMesh);

	return noseGroup;
    }

};

export default exports;
