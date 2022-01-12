const barDiv = document.querySelector("#bar");
const startButton = document.querySelector("#start");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,
					   barDiv.offsetWidth / barDiv.offsetHeight,
					   0.1,
					   1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( barDiv.offsetWidth, barDiv.offsetHeight );
barDiv.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(3.684, 2.508, 1.08);
const material = new THREE.MeshBasicMaterial( { color: 0x505050 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

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
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
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
