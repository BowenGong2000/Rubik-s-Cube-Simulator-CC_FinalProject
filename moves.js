class Index_pair{ // represent the position of each small cubes on a side 
	constructor(a,b){
		this.a = a;
		this.b = b;
	}
}

let orders = [new Index_pair(0,0),new Index_pair(1,0),new Index_pair(2,0),new Index_pair(2,1),
					new Index_pair(2,2),new Index_pair(1,2),new Index_pair(0,2),new Index_pair(0,1)]; // put the order of a side in an array

function turnX(index, clockw){
	for (let i =0; i <orders.length; i++){
		a = orders[i].a;
		b = orders[i].b;
		cube[index][a][b].config.rotateX(clockw);
	}
}

function turnY(index, clockw){
	for (let i =0; i <orders.length; i++){
		a = orders[i].a;
		b = orders[i].b;
		cube[a][index][b].config.rotateY(clockw);
	}
}

function turnZ(index, clockw){
	for (let i =0; i <orders.length; i++){
		a = orders[i].a;
		b = orders[i].b;
		cube[a][b][index].config.rotateZ(clockw);
	}
}



