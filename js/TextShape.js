import {FontLoader, Font} from "../lib/js/FontLoader.js";


export default class TextShape {
    constructor() {
        this.font;
        this.size = 0.5;

        this.tab = "";
        this.handshape = "";
        this.orientation = "";
        this.sig = "";

        this.divider = " ";

        const loader = new FontLoader();
        loader.load("fonts/Stokoe_Regular.json",
                    this.fontHandler.bind(this),
                    this.fontProgressHandler,
                    this.fontErrorHandler);
    }

    setTab(tab) {
        this.tab = tab;
    }

    setHandshape(handshape) {
        this.handshape = handshape;
    }

    setOrientation(orientation) {
        this.orientation = orientation;
    }

    setSig(sig) {
        this.sig = sig;
    }

    getText() {
        const dez = this.handshape + this.orientation;
        return [this.tab, dez, this.sig].join(this.divider);
    }

    getShape() {
        if (!this.hasFont()) {
            return {};
        }

        return this.font.generateShapes(this.getText(), this.size);
    }

    hasFont() {
        return this.font !== undefined;
    }

    fontHandler(font) {
        this.font = font;
    }

    fontProgressHandler(xhr) {
    }

    fontErrorHandler(error) {
        console.error(error);
    }


};
