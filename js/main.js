import Humanoid from "./humanoid.js";
import Animator from "./animator.js";

import ascsto from "./ascsto.js";

console.log("ascsto", ascsto);

const threedDiv = document.querySelector("#threed-div");
const startButton = document.querySelector("#start");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50,
					   threedDiv.offsetWidth / threedDiv.offsetHeight,
					   0.1,
					   2000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( threedDiv.offsetWidth, threedDiv.offsetHeight );
threedDiv.appendChild( renderer.domElement );

const signer = new Humanoid();

scene.add( signer.body );

camera.position.z = 7;
camera.position.y = 1.9;
// camera.position.x = -1;

const light = new THREE.DirectionalLight(0xffffee, 1);
light.position.set(-0.25, 5, 30);
scene.add(light);

/*
const lightHelper = new THREE.DirectionalLightHelper(light, 10);
scene.add(lightHelper);
*/


// signer.body.quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), - Math.PI/12);


const animator = new Animator(scene, camera, renderer, signer, 2000);

startButton.addEventListener("click", () => {
    animator.start = undefined;
    animator.previousTimestamp = undefined;
    animator.animate(performance.now());
});

export default {
    "animator": animator
};
