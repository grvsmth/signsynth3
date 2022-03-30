import Humanoid from "./humanoid.js";
import Animator from "./animator.js";

import formUtil from "./formUtil.js";
import ascsto from "./ascsto.js";
import TextShape from "./TextShape.js";
import Hold from "./Hold.js";


const phrase = [];
const signer = new Humanoid();

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

        const hold = new Hold();

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
            hold.setLocation(symbol);
        }

        if (event.target.name === "dominantHandshape") {
            dezSpan.innerHTML = escapedSymbol;
            textShape.setHandshape(symbol);
            hold.setHandshape(symbol);
        }

        if (event.target.name === "dominantOrientation") {
            orientationSpan.innerHTML = escapedSymbol;
            textShape.setOrientation(symbol);
            hold.setOrientation(symbol);
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

const addCapturer = function(format) {
    const params = {"format": format};
    if (format === "gif") {
        params.workersPath = "lib/";
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
