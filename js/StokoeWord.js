export default class StokoeWord {
    constructor() {
        this.dominantHandshape = "";
        this.nonDominantHandshape = "";
        this.dominantLocation = "";
        this.nonDominantLocation = "";
        this.dominantOrientation = "";
        this.nonDominantOrientation = "";
        this.movement = "";
        this.modifier = "";
    }

    getDominantHandshape() {
        return this.dominantHandshape;
    }

    getNonDominantHandshape() {
        return this.nonDominantHandshape;
    }

    getDominantLocation() {
        return this.dominantLocation;
    }

    getNonDominantLocation() {
        return this.nonDominantLocation;
    }

    getMovement() {
        return this.movement;
    }

    getDominantOrientation() {
        return this.dominantOrientation;
    }

    getNonDominantOrientation() {
        return this.nonDominantOrientation;
    }

    getModifier() {
        return this.modifier;
    }

    setDominantHandshape(handshape) {
        this.dominantHandshape = handshape;
    }

    setNonDominantHandshape(handshape) {
        this.nonDominantHandshape = handshape;
    }

    setHandshape(handshape) {
        if (this.dominantHandshape === "") {
            this.setDominantHandshape(handshape);
            return;
        }
        this.setNonDominantHandshape(handshape);
    }

    setDominantLocation(dominantLocation) {
        this.dominantLocation = dominantLocation;
    }

    setNonDominantLocation(nonDominantLocation) {
        this.nonDominantLocation = nonDominantLocation;
    }

    setLocation(locationString) {
        if (this.dominantLocation === "") {
            this.setDominantLocation(locationString);
            return;
        }
        this.setNonDominantLocation(locationString);
    }

    setMovement(movement) {
        this.movement = movement;
    }

    setDominantOrientation(orientation) {
        this.dominantOrientation = orientation;
    }

    setNonDominantOrientation(orientation) {
        this.nonDominantOrientation = orientation;
    }

    setOrientation(orientation) {
        if (this.nonDominantHandshape === "") {
            this.setDominantOrientation(orientation);
            return;
        }

        this.setNonDominantOrientation(orientation);
    }

    setModifier(modifier) {
        this.modifier = modifier;
    }
};
