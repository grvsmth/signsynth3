export default class Hold {
    constructor() {
        this.dominantHandshape = "bentB5";
        this.nonDominantHandshape = "bentB5";
        this.dominantLocation = "rest";
        this.nonDominantLocation = "rest";
        this.dominantOrientation = "f";
        this.nonDominantOrientation = "gt";
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

    getNonDominantOrientation() {
        return this.nonDominantOrientation;
    }

    setDominantHandshape(handshape) {
        this.dominantHandshape = handshape;
    }

    setNonDominantHandshape(handshape) {
        this.nonDominantHandshape = handshape;
    }

    setDominantLocation(location) {
        this.dominantLocation = location;
    }

    setNonDominantLocation(location) {
        this.nonDominantLocation = location;
    }

    setDominantOrientation(orientation) {
        this.dominantOrientation = orientation;
    }

    setNonDominantOrientation(orientation) {
        this.nonDominantOrientation = orientation;
    }
};
