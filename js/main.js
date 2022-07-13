import Humanoid from "./humanoid.js";
import Animator from "./animator.js";
import TextShape from "./TextShape.js";
import StokoeWord from "./StokoeWord.js";

import ascsto from "./ascsto.js";
import formUtil from "./formUtil.js";
import nlp from "./nlp.js";
import pickerUtil from "./picker.js";

const phrase = [];
const signer = new Humanoid();

const threedDiv = document.querySelector("#threed-div");
const gifButton = document.querySelector("#gif-button");
const playButton = document.querySelector("#play-button");

const ascstoForm = document.querySelector("#ascsto-form");
const outputDiv = document.querySelector("#output-div");
const pickerDiv = document.querySelector("#picker-div");
const stoOutput = document.querySelector("#ascsto-output");

const tabSpan = document.querySelector("#tab");
const dezSpan = document.querySelector("#dez");
const orientationSpan = document.querySelector("#orientation");
const sigSpam = document.querySelector("#sig");

const divider1 = document.querySelector("#divider1");
const divider2 = document.querySelector("#divider2");

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

const textShape = new TextShape();
const matLite = new THREE.MeshBasicMaterial( {
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
    side: THREE.DoubleSide
} );

const textMesh = new THREE.Mesh(new THREE.BufferGeometry(), matLite);
textMesh.position.y = 0;
textMesh.position.z = 2;

scene.add(textMesh);


const convertRotations = function(handedness, articulator, value) {
    const rotations = formUtil.findRotations(handedness,
                                             ascsto.rotation,
                                             articulator,
                                             value);

    console.log("rotations", rotations);
    rotations.forEach(animator.processRotation);
};

if (ascstoForm) {
    const params = ["dominantLocation",
                "dominantHandshape",
                "dominantOrientation",
                "nondominantLocation",
                "nondominantHandshape",
                "nondominantOrientation"];

    const selects = params.map((param) => formUtil.makeSelect(param, ascsto));
    selects.forEach((select) => {
        ascstoForm.append(select);
    });


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
}

if (pickerDiv) {
    document.querySelector("#space-button")
        .addEventListener("click", pickerUtil.spaceListener);

    document.querySelector("#copy-button")
        .addEventListener("click", pickerUtil.copyListener);

    document.querySelector("#copy-html-button")
        .addEventListener("click", pickerUtil.copyHtmlListener);

    document.querySelector("#paste-button")
        .addEventListener("click", pickerUtil.pasteTextListener);

    document.querySelector("#backspace-button")
        .addEventListener("click", pickerUtil.backspaceListener);

    document.querySelector("#clear-button")
        .addEventListener("click", pickerUtil.clearListener);

    const pickerLetters = document.querySelectorAll(".picker-letter");
    pickerLetters.forEach(pickerUtil.addListener);

    document.addEventListener("keydown", pickerUtil.letterListener);
}

const addCapturer = function(format) {
    const params = {"format": format};
    if (format === "gif") {
        params.workersPath = "lib/js/";
    }

    const capturer = new CCapture(params);
    animator.setCapturer(capturer, outputDiv);
};

const addText = function(textShape) {
    const shapes = textShape.getShape();
    const geometry = new THREE.ShapeGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid = -0.5 *(geometry.boundingBox.max.x-geometry.boundingBox.min.x);

    geometry.translate( xMid, 0, 0 );

    textMesh.geometry.dispose();
    textMesh.geometry = geometry;
};

const playStokoeText = function() {
    const stokoeText = stoOutput.innerText;
    console.log("playStokoeText", stokoeText);

    const stokoeWords = nlp.extractStokoeWords(stokoeText);
    console.log("stokoeWords", stokoeWords);

    const holds = nlp.wordsToHolds(stokoeWords);
    console.log("holds", holds);

    const rotations = formUtil.holdsToRotations(holds);
    console.log("rotations", rotations);
};

const playAsciiStokoe = function(event) {
    if (pickerDiv) {
        playStokoeText();
        return;
    }

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
