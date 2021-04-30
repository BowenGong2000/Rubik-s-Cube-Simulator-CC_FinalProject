class Config{ // configuration, color
	constructor(){
		this.sides = [0,1,2,3,4,5];
	}
	
	Config(sides_){
		this.sides = sides_;
	}
	
	rotateZ(){
		var temp = this.sides[U];
		this.sides[U] = this.sides[R];
		this.sides[R] = this.sides[D];
		this.sides[D] = this.sides[L];
		this.sides[L] = temp;
	}
	
	get_side(side){ // return a color
		return this.sides[side];
	}
	
	copy(){ // copy the configuration of a side to a temperary arrqay
		let temp = [];
		arrayCopy(this.sides, temp);
		return new Config(this.sides);
		}
	
	
}
