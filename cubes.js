class Cube{  // the small cubes
	constructor(x,y,z,length){
		this.pos = createVector(x,y,z); // position of a single cube 
		this.len = length;              // its dimention
		this.config = new Config();
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
    fill(colors[this.config.get_side(U)]); 
    vertex(-r, -r, -r);
    vertex(r, -r, -r);
    vertex(r, -r, r);
    vertex(-r, -r, r);
    endShape(CLOSE);

    beginShape();
    fill(colors[this.config.get_side(D)]); 
    vertex(-r, r, -r);
    vertex(r, r, -r);
    vertex(r, r, r);
    vertex(-r, r, r);
    endShape(CLOSE);
		
		beginShape();
    fill(colors[this.config.get_side(L)]); 
    vertex(-r, -r, -r);
    vertex(-r, r, -r);
    vertex(-r, r, r);
    vertex(-r, -r, r);
    endShape(CLOSE);
		
    beginShape();
    fill(colors[this.config.get_side(R)]); 
    vertex(r, -r, -r);
    vertex(r, r, -r);
    vertex(r, r, r);
    vertex(r, -r, r);
    endShape(CLOSE);
		
		beginShape();
    fill(colors[this.config.get_side(F)]); 
    vertex(-r, -r, r);
    vertex(r, -r, r);
    vertex(r, r, r);
    vertex(-r, r, r);
    endShape(CLOSE);
		
		beginShape();
    fill(colors[this.config.get_side(B)]);  
    vertex(-r, -r, -r);
    vertex(r, -r, -r);
    vertex(r, r, -r);
    vertex(-r, r, -r);
    endShape(CLOSE);
		
		pop();
	}
}