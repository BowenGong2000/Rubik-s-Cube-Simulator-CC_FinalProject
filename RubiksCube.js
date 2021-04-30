// Rubik's Cube Simulator
// CC Final Project
// Bowen Gong bg1941


const dimention = 3;
cube = [];  // array that stores all the small cubes 
let cam;    // the camera


const colors = ['#FFFF00','#FFFFFF', '#FFA500','#FF0000','#00FF00','#0000FF', '000000'];  // the colors of the six sides, top,bottom,right,left,front,back(blue)
// UP, DOWN, RIGHT, LEFT, FRONT, BACK
const U = 0; // yellow
const D = 1; // white
const R = 2; // orange
const L = 3; // red
const F = 4; // green 
const B = 5; // blue


function setup() {
	window.print("use your mouse to rotate. Now it is only a cube, not playable yet, the turning function and its animation will be added, they are the main challenges of thie project");
	createCanvas(600, 600, WEBGL);//.elt.oncontextmenu = () => false;
	cam = createEasyCam({ distance: 370 });
	
	for (let i = 0; i < dimention; i++) {
    cube[i] = [];
    for (let j = 0; j < dimention; j++) {
      cube[i][j] = [];
      for (let w = 0; w < dimention; w++) {
        const len = 50;
        const shift = (dimention - 1) * len * 0.5; // shift the cube to the center of canvas
        const x = len * i - shift;
        const y = len * j - shift;
        const z = len * w - shift;
        cube[i][j][w] = new Cube(x, y, z, len);
      }
    }
  }
	
}

function keyPressed(){
	switch(key){
		// X - axis direction
		case 'l': // left layer
			turnX(0,true);
			break;
		case 'L':
			turnX(0,false);
			break;
		case 'r': // right layer
			turnX(2,false);
			break;
		case 'R':
			turnX(2,true);
			break;
			
		// Y - axis direction
		case 'u': // left layer
			turnY(0,true);
			break;
		case 'U':
			turnY(0,false);
			break;
		case 'd': // right layer
			turnY(2,true);
			break;
		case 'D':
			turnY(2,false);
			break;
			
		// z - axis direction
		case 'f': // front layer
			turnZ(2,true);
			break;
		case 'F':
			turnZ(2,false);
			break;
		case 'b': // back layer
			turnZ(0,false);
			break;
		case 'B':
			turnZ(0,true);
			break;
	}
}

function draw() {
	rotateX(-0.35);
	rotateY(0.4);
	background(200);
  for (let i = 0; i < dimention; i++) {
    for (let j = 0; j < dimention; j++) {
      for (let w = 0; w < dimention; w++) {
        cube[i][j][w].show_cubes();
      }
    }
  }
}