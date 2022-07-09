export default class StokoeWord {
    constructor() {
        this.dominantHandshape = "";
        this.nonDominantHandshape = "";
        this.location = "";
        this.dominantOrientation = "";
        this.nonDominantOrientation = "";
        this.movement = "";
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

    setDomainantHandshape(handshape) {
        this.dominantHandshape = handshape;
    }

    setNonDomainantHandshape(handshape) {
        this.nonDominantHandshape = handshape;
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
};
