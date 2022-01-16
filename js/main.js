import Humanoid from "./humanoid.js";

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

const signer = new Humanoid();

scene.add( signer.body );

camera.position.z = 5;

const totalFrames = 2000;

const animationData = {
    "start": undefined,
    "previousTimestamp": undefined
};

const animate = function(timestamp) {
    if (this.start === undefined) {
	this.start = timestamp;
    }

    const elapsed = timestamp - start;

    if (this.previousTimestamp !== timestamp) {
/*
	rightShoulder.rotation.x -= 0.01;
	rightElbow.rotation.x += 0.005;
	rightShoulder.rotation.y -= 0.01;
	rightElbow.rotation.y -= 0.05;
*/
	renderer.render( scene, camera );
    }

    if (elapsed < totalFrames) {
	this.previousTimstamp = timestamp;
	requestAnimationFrame( animate );
    }
}({"start": start, "previousTimestamp": previousTimestamp});

startButton.addEventListener("click", () => {
    start = undefined;
    previousTimestamp = undefined;
    animate(performance.now());
});

export default {
    "animate": animate
};
