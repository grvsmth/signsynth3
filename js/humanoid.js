const threedDiv = document.querySelector("#threed-div");
const startButton = document.querySelector("#start");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(80,
					   threedDiv.offsetWidth / threedDiv.offsetHeight,
					   0.1,
					   1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( threedDiv.offsetWidth, threedDiv.offsetHeight );
threedDiv.appendChild( renderer.domElement );

const humanoid = new THREE.Group();
const bodyMaterial = new THREE.MeshBasicMaterial( {"color": 0x505050 } );
const skinMaterial = new THREE.MeshBasicMaterial( {color: 0xFF9A66} );
const skinMaterial2 = new THREE.MeshBasicMaterial( {color: 0xFF9A66} );
const hairMaterial = new THREE.MeshBasicMaterial( {color: 0xFF7F10} );
const eyewhiteMaterial = new THREE.MeshBasicMaterial( {color: 0xEEEEEE} );
const irisMaterial = new THREE.MeshBasicMaterial( {color: 0x198055} );
const pupilMaterial = new THREE.MeshBasicMaterial( {color: 0x191919} );
const lipMaterial = new THREE.MeshBasicMaterial( {"color": 0xC01414} );

const bodyGeometry = new THREE.BoxGeometry(3.684, 2.508, 1.08);
const bodyMesh = new THREE.Mesh( bodyGeometry, bodyMaterial );
humanoid.add(bodyMesh);

const skullBase = new THREE.Group();
const skullGeometry = new THREE.SphereGeometry(1.032);
const skullMesh = new THREE.Mesh(skullGeometry, skinMaterial);

const hairVertices = [ 0.7, 0.7, 0.7,
		       0.9, -0.8, 0.6,
                       1, -0.8, 0.6,
		       1, 0.4, 0.5,
                       1.2, -0.8, -0.5,
		       1.2, 0.6, -0.5,
                       0, -0.8, -1.5,
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
                       -.4, 1.1, -.4 ];

const hairIndices = [ 0, 1, 2,
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

const hairGeometry = new THREE.PolyhedronGeometry(hairVertices,
						  hairIndices,
						  1.15,
						  2);
const hairMesh = new THREE.Mesh(hairGeometry, hairMaterial);


const eyeVertices = new THREE.Float32BufferAttribute([-.2, 0, 0,
						      -.13, -.06, 0,
						      -.13, .07, 0,
						      0, -.07, 0,
						      0, .07, 0,
						      .13, -.06, 0,
						      .13, .07, 0,
						      .2, 0, 0
						     ], 3);

const eyeIndices = [0, 1, 2,
		    2, 1, 3,
		    2, 3, 4,
		    4, 3, 5,
		    4, 5, 6,
		    6, 5, 7
		   ];
const eyeGeometry = new THREE.BufferGeometry();
eyeGeometry.setIndex(eyeIndices);
eyeGeometry.setAttribute("position", eyeVertices);

const irisGeometry = new THREE.SphereGeometry(0.065);
const pupilGeometry = new THREE.CylinderGeometry(0.025, 0.025, 0.13);

const rightEyeMesh = new THREE.Mesh(eyeGeometry, eyewhiteMaterial);
const rightIrisMesh = new THREE.Mesh(irisGeometry, irisMaterial);

const rightPupilMesh = new THREE.Mesh(pupilGeometry, pupilMaterial);
rightPupilMesh.quaternion.setFromAxisAngle(
    new THREE.Vector3(1, 0, 0), Math.PI/2); 

const rightEye = new THREE.Group();

rightEye.add(rightEyeMesh);
rightEye.add(rightIrisMesh);
rightEye.add(rightPupilMesh);

rightEye.position.set(-0.35, 0.08, 0.99);

const leftEyeMesh = new THREE.Mesh(eyeGeometry, eyewhiteMaterial);
const leftIrisMesh = new THREE.Mesh(irisGeometry, irisMaterial);

const leftPupilMesh = new THREE.Mesh(pupilGeometry, pupilMaterial);
leftPupilMesh.quaternion.setFromAxisAngle(
    new THREE.Vector3(1, 0, 0), Math.PI/2);

const leftEye = new THREE.Group();

leftEye.add(leftEyeMesh);
leftEye.add(leftIrisMesh);
leftEye.add(leftPupilMesh);
leftEye.position.set(0.35, 0.08, 0.99);

const lipGeometry = new THREE.BufferGeometry();
const lipVertices = new THREE.Float32BufferAttribute([-.4, .05, .82,
						      -.2, .05, .97,
						      -.1, .01, .97,
						      .1, .01, .97,
						      .2, .05, 1.02,
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
						      .2, .05, .97
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

const lipMesh = new THREE.Mesh(lipGeometry, lipMaterial);
lipMesh.position.set(0, -0.9, 0.3);

skullBase.add(skullMesh);
skullBase.add(hairMesh);
skullBase.add(rightEye);
skullBase.add(leftEye);
skullBase.add(lipMesh);
skullBase.position.set(0, 2.532, 0);
humanoid.add(skullBase);

const neckGeometry = new THREE.CylinderGeometry(0.408, 0.408, 0.588);
const neckMesh = new THREE.Mesh(neckGeometry, skinMaterial);
neckMesh.position.set(0, 1.404, 0);
humanoid.add(neckMesh);

const rightForearmGeometry = new THREE.CylinderGeometry(0.288,
							0.288,
							1.92,
							32);
const rightForearmMesh = new THREE.Mesh(rightForearmGeometry, skinMaterial);
rightForearmMesh.position.set(0, -0.96, 0);

const rightElbow = new THREE.Group();
rightElbow.add(rightForearmMesh);
rightElbow.position.set(0, -2.28, 0);

const rightUpperArmGeometry = new THREE.CylinderGeometry(0.288,
							 0.288,
							 2.28,
							 32);
const rightUpperArmMesh = new THREE.Mesh(rightUpperArmGeometry, skinMaterial);
rightUpperArmMesh.position.set(0, -1.14, 0);

const rightShoulder = new THREE.Group();
rightShoulder.add(rightUpperArmMesh);
rightShoulder.add(rightElbow);
rightShoulder.position.set(-1.8, 1.14, 0);

humanoid.add(rightShoulder);

const leftForearmGeometry = new THREE.CylinderGeometry(0.288,
						       0.288,
						       1.92,
						       32);
const leftForearmMesh = new THREE.Mesh(leftForearmGeometry, skinMaterial);
leftForearmMesh.position.set(0, -0.96, 0);

const leftElbow = new THREE.Group();
leftElbow.add(leftForearmMesh);
leftElbow.position.set(0, -2.28, 0);

const leftUpperArmGeometry = new THREE.CylinderGeometry(0.288,
							0.288,
							2.28,
							32);
const leftUpperArmMesh = new THREE.Mesh(leftUpperArmGeometry, skinMaterial);
leftUpperArmMesh.position.set(0, -1.14, 0);

const leftShoulder = new THREE.Group();
leftShoulder.add(leftUpperArmMesh);
leftShoulder.add(leftElbow);
leftShoulder.position.set(1.8, 1.14, 0);

humanoid.add(leftShoulder);

const signer = humanoid;

scene.add( signer );

camera.position.z = 5;

const totalFrames = 2000;

let start, previousTimestamp;

function animate(timestamp) {
    if (start === undefined) {
	start = timestamp;
    }

    const elapsed = timestamp - start;

    if (previousTimestamp !== timestamp) {
	rightShoulder.rotation.x -= 0.01;
	rightElbow.rotation.x += 0.005;
	rightShoulder.rotation.y -= 0.01;
	rightElbow.rotation.y -= 0.05;
	renderer.render( scene, camera );
    }

    if (elapsed < totalFrames) {
	previousTimstamp = timestamp;
	requestAnimationFrame( animate );
    }
}

startButton.addEventListener("click", () => {
    start = undefined;
    previousTimestamp = undefined;
    animate(performance.now());
});
