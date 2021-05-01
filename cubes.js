class Cube{  // the small cubes
	constructor(x,y,z,length){
		this.pos = createVector(x,y,z); // position of a single cube 
		this.len = length;              // its dimention
	}
	
	show_cubes(){
		fill(255);
		stroke(0);
		strokeWeight(5);
		
		push();
		translate(this.pos.x,this.pos.y,this.pos.z);
		//box(this.len);
		const r = this.len / 2;
		
		beginShape();
    fill(colors[B]);
    vertex(-r, -r, -r);
    vertex(r, -r, -r);
    vertex(r, r, -r);
    vertex(-r, r, -r);
    endShape(CLOSE);

    beginShape();
    fill(colors[F]);
    vertex(-r, -r, r);
    vertex(r, -r, r);
    vertex(r, r, r);
    vertex(-r, r, r);
    endShape(CLOSE);

    // y-fixed
    beginShape();
    fill(colors[D]);
    vertex(-r, -r, -r);
    vertex(r, -r, -r);
    vertex(r, -r, r);
    vertex(-r, -r, r);
    endShape(CLOSE);

    beginShape();
    fill(colors[U]);
    vertex(-r, r, -r);
    vertex(r, r, -r);
    vertex(r, r, r);
    vertex(-r, r, r);
    endShape(CLOSE);

    // x-fixed
    beginShape();
    fill(colors[L]);
    vertex(-r, -r, -r);
    vertex(-r, r, -r);
    vertex(-r, r, r);
    vertex(-r, -r, r);
    endShape(CLOSE);

    beginShape();
    fill(colors[R]);
    vertex(r, -r, -r);
    vertex(r, r, -r);
    vertex(r, r, r);
    vertex(r, -r, r);
    endShape(CLOSE);
		
		pop();
	}
}