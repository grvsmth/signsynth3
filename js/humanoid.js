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

const bodyGeometry = new THREE.BoxGeometry(3.684, 2.508, 1.08);
const bodyMaterial = new THREE.MeshBasicMaterial( { color: 0x505050 } );
const bodyMesh = new THREE.Mesh( bodyGeometry, bodyMaterial );

humanoid.add(bodyMesh);

const shoulder = new THREE.Group();

const armGeometry = new THREE.CylinderGeometry(0.288, 0.288, 2.28);
const skinMaterial = new THREE.MeshBasicMaterial( {color: 0xFF9A66} );
const armMesh = new THREE.Mesh(armGeometry, skinMaterial);

armMesh.position.set(0, -1.14, 0);

shoulder.add(armMesh);

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
	shoulder.rotation.y -= 0.01;
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
