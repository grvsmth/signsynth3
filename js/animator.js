export default class animator {
    constructor(scene, camera, renderer, humanoid, totalFrames) {
	this.scene = scene;
	this.camera = camera;
	this.renderer = renderer;
	this.humanoid = humanoid;
	this.totalFrames = totalFrames;

	this.start = undefined;
	this.previousTimestamp = undefined;

    }

    animate(timestamp) {
	if (this.start === undefined) {
	    this.start = timestamp;
	}

	const elapsed = timestamp - this.start;

	if (this.previousTimestamp !== timestamp) {
	    this.humanoid.right.shoulder.rotation.x -= 0.01;
            this.humanoid.right.elbow.rotation.x += 0.005;
            this.humanoid.right.shoulder.rotation.y -= 0.01;
            // this.humanoid.right.elbow.rotation.y -= 0.05;

	    this.renderer.render(this.scene, this.camera);
	}

	if (elapsed < this.totalFrames) {
	    this.previousTimestamp = timestamp;
	    requestAnimationFrame(this.animate.bind(this));
	}
    }

}
