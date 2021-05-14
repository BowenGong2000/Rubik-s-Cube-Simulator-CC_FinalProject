class Cube {

	constructor(x, y, z, len) {
		this.pos = createVector(x, y, z); // represent the position of a single cube 
		this.len = len;                   // length of cube 
		this.config = new Config();
	}

	show() {
		stroke(0);
		strokeWeight(4);
		let r = this.len / 2;
		push();
		translate(this.pos.x, this.pos.y, this.pos.z);

		//UP
		fill(this.config.get('u'));
		beginShape();
		vertex(-r, -r, -r);
		vertex(r, -r, -r);
		vertex(r, -r, r);
		vertex(-r, -r, r);
		endShape(CLOSE);

		//DOWN
		fill(this.config.get('d'));
		beginShape();
		vertex(-r, r, -r);
		vertex(r, r, -r);
		vertex(r, r, r);
		vertex(-r, r, r);
		endShape(CLOSE);

		//BACK
		fill(this.config.get('b'));
		beginShape();
		vertex(-r, -r, -r);
		vertex(r, -r, -r);
		vertex(r, r, -r);
		vertex(-r, r, -r);
		endShape(CLOSE);

		//FRONT
		fill(this.config.get('f'));
		beginShape();
		vertex(-r, -r, r);
		vertex(r, -r, r);
		vertex(r, r, r);
		vertex(-r, r, r);
		endShape(CLOSE);

		//LEFT
		fill(this.config.get('l'));
		beginShape();
		vertex(-r, -r, -r);
		vertex(-r, r, -r);
		vertex(-r, r, r);
		vertex(-r, -r, r);
		endShape(CLOSE);

		//RIGHT
		fill(this.config.get('r'));
		beginShape();
		vertex(r, -r, -r);
		vertex(r, r, -r);
		vertex(r, r, r);
		vertex(r, -r, r);
		endShape(CLOSE);

		pop();
	}
}
