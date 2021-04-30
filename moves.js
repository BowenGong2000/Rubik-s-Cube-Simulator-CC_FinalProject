class Index_pair{ // represent the position of each small cubes on a side 
	constructor(a,b){
		this.a = a;
		this.b = b;
	}
}

let orders = [new Index_pair(0,0),new Index_pair(1,0),new Index_pair(2,0),new Index_pair(2,1),
					new Index_pair(2,2),new Index_pair(1,2),new Index_pair(0,2),new Index_pair(0,1)]; // put the order of a side in an array

function turnZ(){
	var configs =[];
	for (let i = 0; i < 9;i++){ // create an order of a side with 8 colors
		configs.push(new Config());
	}
	for (let i =0; i <orders.length; i++){
		a = orders[i].a;
		b = orders[i].b;
		configs[i] = cube[a][b][2].config.copy(); // change the color
		configs[i].rotateZ();
	}
	
	for (let i =0; i <orders.length; i++){
		a = orders[i].a;
		b = orders[i].b;
		cube[a][b][2].config = configs[(i+2)%orders.length];
	}

}