import Humanoid from "./humanoid.js";
import Animator from "./animator.js";

import formUtil from "./formUtil.js";
import ascsto from "./ascsto.js";


const signer = new Humanoid();

const threedDiv = document.querySelector("#threed-div");
const startButton = document.querySelector("#start");
const ascstoForm = document.querySelector("#ascsto-form");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50,
					   threedDiv.offsetWidth / threedDiv.offsetHeight,
					   0.1,
					   2000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( threedDiv.offsetWidth, threedDiv.offsetHeight );
threedDiv.appendChild( renderer.domElement );

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

const dominantLocationSelect = formUtil.makeSelect("dominantLocation",
						   "Dominant Location",
						   ascsto.menuText.dl,
						   "rest");

ascstoForm.append(dominantLocationSelect);

const handleForm = function(event) {
    console.log(event.target.name, event.target.value);
    console.log(ascsto);

    const rotations = formUtil.findRotations(signer.handed,
					     ascsto.rotation,
					     event.target.name,
					     event.target.value);

    console.log("rotations", rotations);
    rotations.forEach(animator.processRotation);
};

ascstoForm.addEventListener("change", handleForm);


startButton.addEventListener("click", () => {
    animator.start = undefined;
    animator.previousTimestamp = undefined;
    animator.animate(performance.now());
});

export default {
    "animator": animator
};
