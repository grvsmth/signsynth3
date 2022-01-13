const threedDiv = document.querySelector("#threed-div");
const startButton = document.querySelector("#start");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,
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

const bodyGeometry = new THREE.BoxGeometry(3.684, 2.508, 1.08);
const bodyMesh = new THREE.Mesh( bodyGeometry, bodyMaterial );
humanoid.add(bodyMesh);

const skullBase = new THREE.Group();
const skullGeometry = new THREE.SphereGeometry(1.032);
const skullMesh = new THREE.Mesh(skullGeometry, skinMaterial);
skullBase.add(skullMesh);
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
