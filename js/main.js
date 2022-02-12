import Humanoid from "./humanoid.js";
import Animator from "./animator.js";

import formUtil from "./formUtil.js";
import ascsto from "./ascsto.js";


const signer = new Humanoid();

const threedDiv = document.querySelector("#threed-div");
const gifButton = document.querySelector("#gif-button");
const playButton = document.querySelector("#play-button");

const ascstoForm = document.querySelector("#ascsto-form");
const outputDiv = document.querySelector("#output-div");

const clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50,
                                           threedDiv.offsetWidth / threedDiv.offsetHeight,
                                           0.1,
                                           2000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( threedDiv.offsetWidth, threedDiv.offsetHeight );
threedDiv.appendChild( renderer.domElement );

scene.add( signer.body );

camera.position.z = 8;
camera.position.y = 1.9;

const light = new THREE.DirectionalLight(0xffffee, 1);
light.position.set(-0.25, 5, 30);
scene.add(light);

const animator = new Animator(scene, camera, renderer, signer, clock, 2000);

const params = ["dominantLocation", "nondominantLocation"];

const dominantLocationSelect = formUtil.makeSelect("dominantLocation",
                                                   ascsto);
const dominantOrientationSelect = formUtil.makeSelect("dominantOrientation",
                                                      ascsto);
const dominantHandshapeSelect = formUtil.makeSelect("dominantHandshape",
                                                      ascsto);
const nondominantLocationSelect = formUtil.makeSelect("nondominantLocation",
                                                      ascsto);

ascstoForm.append(dominantLocationSelect);
ascstoForm.append(dominantOrientationSelect);
ascstoForm.append(dominantHandshapeSelect);
ascstoForm.append(nondominantLocationSelect);

const convertRotations = function(handedness, articulator, value) {
    const rotations = formUtil.findRotations(handedness,
                                             ascsto.rotation,
                                             articulator,
                                             value);

    console.log("rotations", rotations);
    rotations.forEach(animator.processRotation);
};

const handleForm = function(event) {
    if (animator.mode === "player") {
        return;
    }

    console.log(event.target.name, event.target.value);
    console.log(ascsto);

    convertRotations(signer.handed, event.target.name, event.target.value);
};

ascstoForm.addEventListener("change", handleForm);

const addCapturer = function(format) {
    const params = {"format": format};
    if (format === "gif") {
        params.workersPath = "lib/";
    }
    console.log("ccapture", params);

    const capturer = new CCapture(params);
    animator.setCapturer(capturer, outputDiv);
};

const playAsciiStokoe = function(event) {
    const elements = new FormData(event.target.form);
    // TODO use fieldset to group hold fields

    animator.clear();
    for (let input of elements) {
        convertRotations(signer.handed, input[0], input[1]);
    }
    animator.start();
};

if (playButton) {
  playButton.addEventListener("click", playAsciiStokoe);
  gifButton.addEventListener("click", (event) => {
      addCapturer("gif");
      playAsciiStokoe(event);
  });
}


export default {
    "animator": animator
};
