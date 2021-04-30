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
	turnZ();
}

function draw() {
	rotateX(45);
	rotateZ(45);
	background(100);
  for (let i = 0; i < dimention; i++) {
    for (let j = 0; j < dimention; j++) {
      for (let w = 0; w < dimention; w++) {
        cube[i][j][w].show_cubes();
      }
    }
  }
}