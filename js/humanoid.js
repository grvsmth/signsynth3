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

const forearmGeometry = new THREE.CylinderGeometry(0.288, 0.288, 1.92);
const forearmMesh = new THREE.Mesh(forearmGeometry, skinMaterial2);
forearmMesh.position.set(0, -0.96, 0);

const elbow = new THREE.Group();
elbow.add(forearmMesh);
elbow.position.set(0, -2.28, 0);

const upperArmGeometry = new THREE.CylinderGeometry(0.288, 0.288, 2.28);
const upperArmMesh = new THREE.Mesh(upperArmGeometry, skinMaterial);
upperArmMesh.position.set(0, -1.14, 0);

const shoulder = new THREE.Group();
shoulder.add(upperArmMesh);
shoulder.add(elbow);
shoulder.position.set(-1.8, 1.14, 0);

humanoid.add(shoulder);

const signer = humanoid;

scene.add( signer );

camera.position.z = 5;

const totalFrames = 2000;

let start, previousTimestamp;

function animate(timestamp) {
    console.log("animate()", timestamp);
    if (start === undefined) {
	start = timestamp;
    }

    const elapsed = timestamp - start;
    console.log("elapsed", elapsed);

    if (previousTimestamp !== timestamp) {
	shoulder.rotation.x -= 0.01;
	elbow.rotation.x += 0.005;
	shoulder.rotation.y -= 0.01;
	elbow.rotation.y -= 0.05;
	renderer.render( scene, camera );
    }

    console.log("totalFrames", totalFrames);

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
