export default class StokoeWord {
    constructor() {
        this.dominantHandshape = "";
        this.nonDominantHandshape = "";
        this.location = "";
        this.dominantOrientation = "";
        this.nonDominantOrientation = "";
        this.movement = "";
        this.modifier = "";
    }

    getDominantHandshape() {
        return this.dominantHandshape;
    }

    getNonDominantHandshape() {
        return this.nonDomainantHandshape;
    }

    getLocation() {
        return this.location;
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

    setNonDomainantHandshape(handshape) {
        this.nonDominantHandshape = handshape;
    }

    setHandshape(handshape) {
        if (this.dominantHandshape === "") {
            this.setDominantHandshape(handshape);
            return;
        }
        this.setNonDominantHandshape(handshape);
    }

    setLocation(location) {
        this.location = location;
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
