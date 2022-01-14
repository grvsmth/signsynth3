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
const bodyMaterial = new THREE.MeshBasicMaterial( { color: 0x505050 } );
const skinMaterial = new THREE.MeshBasicMaterial( {color: 0xFF9A66} );
const skinMaterial2 = new THREE.MeshBasicMaterial( {color: 0xFF9A66} );
const hairMaterial = new THREE.MeshBasicMaterial( {color: 0xFF7F10} );

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

skullBase.add(skullMesh);
skullBase.add(hairMesh);
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
