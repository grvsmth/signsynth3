import Humanoid from "./humanoid.js";
import Animator from "./animator.js";

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

const animator = new Animator(scene, camera, renderer, signer, 2000);

startButton.addEventListener("click", () => {
    animator.start = undefined;
    animator.previousTimestamp = undefined;
    animator.animate(performance.now());
});

export default {
    "animator": animator
};
