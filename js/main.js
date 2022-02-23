import Humanoid from "./humanoid.js";
import Animator from "./animator.js";

import formUtil from "./formUtil.js";
import ascsto from "./ascsto.js";

import TextShape from "./TextShape.js";
import {TransformControls} from "../lib/TransformControls.js";


const threedDiv = document.querySelector("#threed-div");
const gifButton = document.querySelector("#gif-button");
const playButton = document.querySelector("#play-button");

const ascstoForm = document.querySelector("#ascsto-form");
const outputDiv = document.querySelector("#output-div");

const tabSpan = document.querySelector("#tab");
const dezSpan = document.querySelector("#dez");
const orientationSpan = document.querySelector("#orientation");
const sigSpam = document.querySelector("#sig");

const divider1 = document.querySelector("#divider1");
const divider2 = document.querySelector("#divider2");

const scene = new THREE.Scene();
const clock = new THREE.Clock();
const camera = new THREE.PerspectiveCamera(50,
                                           threedDiv.offsetWidth / threedDiv.offsetHeight,
                                           0.1,
                                           2000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( threedDiv.offsetWidth, threedDiv.offsetHeight );
threedDiv.appendChild( renderer.domElement );

const signer = new Humanoid();

scene.add( signer.body );

const target = signer.addTarget("right", "[");
scene.add(target);

if (typeof FIK !== "undefined") {
    const chainInfo = [
        {"jointName": "shoulder"},
        {"jointName": "elbow"},
        {"jointName": "wrist"}
    ];

    signer["right"].chain["thumb3"].bones.forEach((bone, index) => {
        chainInfo[index].boneName = bone.name;
        chainInfo[index].previousDirection = bone.getDirectionUV();
    });

    console.log(JSON.stringify(chainInfo));
    signer["right"].chain["thumb3"].solveForTarget(target.position);
    signer["right"].chain["thumb3"].bones.forEach((bone, index) => {
        const targetDirection = bone.getDirectionUV();
        const jointName = chainInfo[index].jointName;

        const jointPosition = signer["right"][jointName].position;

        chainInfo[index].targetDirection = targetDirection;
        chainInfo[index].jointPosition = jointPosition;

        const rotationMatrix = new THREE.Matrix4().lookAt(jointPosition,
                                              targetDirection,
                                              chainInfo[index].previousDirection);
        chainInfo[index].rotationMatrix = rotationMatrix;
        signer["right"][jointName].quaternion.setFromRotationMatrix(rotationMatrix);

    });
    console.log(chainInfo);
}
/*
signer["right"]["shoulder"].rotation
    .set(signer["right"].chain["thumb3"].bones[0].getDirectionUV());
signer["right"]["elbow"].rotation
    .set(signer["right"].chain["thumb3"].bones[0].getDirectionUV());
signer["right"]["shoulder"].rotation
    .set(signer["right"].chain["thumb3"].bones[0].getDirectionUV());
*/
camera.position.z = 8;
camera.position.y = 1.9;

const light = new THREE.DirectionalLight(0xffffee, 1);
light.position.set(-0.25, 5, 30);
scene.add(light);

const animator = new Animator(scene, camera, renderer, signer, clock, 2000);

const textShape = new TextShape();

const params = ["dominantLocation",
                "dominantOrientation",
                "dominantHandshape",
                "nondominantLocation",
                "nondominantOrientation"];

const selects = params.map((param) => formUtil.makeSelect(param, ascsto));
selects.forEach((select) => {
    ascstoForm.append(select);
});

const convertRotations = function(handedness, articulator, value) {
    const rotations = formUtil.findRotations(handedness,
                                             ascsto.rotation,
                                             articulator,
                                             value);

    console.log("rotations", rotations);
    rotations.forEach(animator.processRotation);
};

const handleForm = function(event) {
    const hasFont = document.fonts.check("12px Stokoe Tempo");

    let symbol = event.target.value;
    if (ascsto.symbol.hasOwnProperty(symbol)) {
        symbol = ascsto.symbol[symbol];
    }

    let escapedSymbol = symbol;
    if (ascsto.escapedSymbol.hasOwnProperty(event.target.value)) {
        escapedSymbol = ascsto.escapedSymbol[event.target.value];
    }

    if (event.target.name === "dominantLocation") {
        tabSpan.innerHTML = escapedSymbol;
        textShape.setTab(symbol);
    }

    if (event.target.name === "dominantHandshape") {
        dezSpan.innerHTML = escapedSymbol;
        textShape.setHandshape(symbol);
    }

    if (event.target.name === "dominantOrientation") {
        orientationSpan.innerHTML = escapedSymbol;
        textShape.setOrientation(symbol);
    } else if (event.target.name === "dominantMovement") {
        sigSpan.innerHTML = escapedSymbol;
        textShape.setSig(symbol);
    }

    if (!hasFont && tabSpan.innerHTML && dezSpan.innerHTML) {
        divider1.innerHTML = "/";
    }

    if (animator.mode === "player") {
        return;
    }

    convertRotations(signer.handed, event.target.name, event.target.value);
};

ascstoForm.addEventListener("change", handleForm);

const addCapturer = function(format) {
    const params = {"format": format};
    if (format === "gif") {
        params.workersPath = "lib/";
    }

    const capturer = new CCapture(params);
    animator.setCapturer(capturer, outputDiv);
};

const addText = function(textShape) {
    const matLite = new THREE.MeshBasicMaterial( {
        color: 0x006699,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
    } );

    const shapes = textShape.getShape();
    const geometry = new THREE.ShapeGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid = -0.5 *(geometry.boundingBox.max.x-geometry.boundingBox.min.x);

    geometry.translate( xMid, 0, 0 );

    const textMesh = new THREE.Mesh(geometry, matLite);
    textMesh.position.y = 50;
    textMesh.position.z = -150;

    scene.add(textMesh);
    
};

const playAsciiStokoe = function(event) {
    const elements = new FormData(event.target.form);
    // TODO use fieldset to group hold fields

    animator.clear();
    for (let input of elements) {
        convertRotations(signer.handed, input[0], input[1]);
    }

    addText(textShape);

    if (!animator.isPlaying()) {
        animator.start();
    }
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
