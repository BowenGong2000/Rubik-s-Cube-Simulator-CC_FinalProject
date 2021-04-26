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
		box(this.len);
		
		pop();
	}
}