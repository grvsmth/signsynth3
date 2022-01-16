export default class animator {
    constructor(scene, camera, renderer, totalFrames) {
	this.scene = scene;
	this.camera = camera;
	this.renderer = renderer;
	this.totalFrames = totalFrames;

	this.start = undefined;
	this.previousTimestamp = undefined;
    }

    animate(timestamp) {
	if (this.start === undefined) {
	    this.start = timestamp;
	}
	const elapsed = timestamp - start;

	if (this.previousTimestamp !== timestamp) {
	    this.renderer.render(this.scene, this.camera);
	}

	if (elapsed < this.totalFrames) {
	    this.previousTimestamp = timestamp;
	    requestAnimationFrame(this.animate);
	}
    }

}
