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
							       -.1, 0, .16,
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
			     0, 8, 9,
			     8, 9, 11,
			     11, 10, 4,
			     9, 3, 5,
			     9, 5, 11,
			     5, 11, 3
			    ];

	noseGeometry.setIndex(noseIndices);
	noseGeometry.setAttribute("position", noseVertices);
	noseGeometry.computeVertexNormals();

	const noseMesh = new THREE.Mesh(noseGeometry,
					    material.skin);


	noseGroup.add(noseMesh);

	return noseGroup;
    },

    "makeHair": function(material) {
	const geometry = new THREE.BufferGeometry();
	const vertices = new THREE.Float32BufferAttribute([.7, .7, .7,
							   .9, -.8, .6,
							   1, -.8, .6,
							   1, .4, .5,
							   1.2, -.8, -.5,
							   1.2, .6, -.5,
							   0, -.8, -1.5,
							   0, 0.6, -1.2,
							   -1.1, -.8, -.5,
							   -1, .6, -.5,
							   -1.1, -.8, .6,
							   -1, .6, .9,
							   -.9, -.8, .6,
							   -.5, .5, .8,
							   .4, 1, .9,
							   -.8, 1, .9,
							   .4, 1.1, -.4,
							   0, 1.1, -.8,
							   -.4, 1.1, -.4
							  ], 3);

	const indices = [0, 1, 2,
			 0, 2, 3,
			 3, 2, 4,
			 3, 4, 5,
			 5, 4, 6,
			 5, 6, 7,
			 7, 6, 8,
			 7, 8, 9,
			 9, 8, 10,
			 9, 10, 11,
			 11, 10, 12,
			 11, 12, 13,
			 13, 0, 14,
			 13, 14, 15,
			 13, 15, 11,
			 14, 3, 5,
			 14, 5, 16,
			 16, 5, 7,
			 16, 7, 17,
			 17, 7, 9,
			 17, 9, 18,
			 18, 9, 11,
			 18, 11, 15,
			 14, 16, 17,
			 14, 17, 18,
			 18, 15, 14
			];

	geometry.setIndex(indices);
	geometry.setAttribute("position", vertices);
	geometry.computeVertexNormals();

	return new THREE.Mesh(geometry, material);
    },

    "makeRightEyebrow": function(material) {
	const geometry = new THREE.BufferGeometry();
	const vertices = new THREE.Float32BufferAttribute([-0.2, 0.15, 0.02,
                                                           -0.2, 0.13, 0.02,
                                                           -0.15, 0.2, 0.06,
                                                           -0.15, 0.16, 0.07,
                                                           0.2, 0.15, 0.06,
                                                           0.2, 0.13, 0.06,
                                                           0.13, 0.16, 0.06,
                                                           0.13, 0.2, 0.06
							  ], 3);

	const indices = [0, 1, 2,
                         1, 3, 2,
                         2, 3, 4,
                         3, 5, 4,
                         4, 5, 6,
                         5, 6, 7
			];

	geometry.setIndex(indices);
	geometry.setAttribute("position", vertices);
	geometry.computeVertexNormals();

	return new THREE.Mesh(geometry, material);
    },

    "makeLeftEyebrow": function(material) {
	const geometry = new THREE.BufferGeometry();
	const vertices = new THREE.Float32BufferAttribute([0.2, 0.15, 0.02,
                                                           0.2, 0.13, 0.02,
                                                           0.15, 0.2, 0.06,
                                                           0.15, 0.16, 0.07,
                                                           -0.2, 0.15, 0.06,
                                                           -0.2, 0.13, 0.06,
                                                           -0.13, 0.16, 0.06,
                                                           -0.13, 0.2, 0.06
							  ], 3);

	const indices = [0, 2, 1,
                         1, 2, 3,
                         2, 4, 3,
                         3, 4, 5,
                         4, 6, 5,
                         5, 7, 6
			];

	geometry.setIndex(indices);
	geometry.setAttribute("position", vertices);
	geometry.computeVertexNormals();

	return new THREE.Mesh(geometry, material);
    }
};

export default exports;
