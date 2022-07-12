export default class Hold {
    constructor() {
        this.dominanthandshape = "";
        this.nonDominantHandshape = "";
        this.location = "";
        this.dominantOrientation = "";
        this.nonDominantOrientation = "";
    }

    getDominantHandshape() {
        return this.dominantHandshape;
    }

    getNonDominantHandshape() {
        return this.nonDominantHandshape;
    }

    getLocation() {
        return this.location;
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

    setLocation(location) {
        this.location = location;
    }

    setDominantOrientation(orientation) {
        this.dominantOrientation = orientation;
    }

    setNonDominantOrientation(orientation) {
        this.nonDominantOrientation = orientation;
    }
};
