export default class Hold {
    constructor() {
        this.handshape = "";
        this.location = "";
        this.orientation = "";
    }

    getHandshape() {
        return this.handshape;
    }

    getLocation() {
        return this.location;
    }

    getOrientation() {
        return this.orientation;
    }

    setHandshape(handshape) {
        this.handshape = handshape;
    }

    setLocation(location) {
        this.location = location;
    }

    setOrientation(orientation) {
        this.orientation = orientation;
    }
};
