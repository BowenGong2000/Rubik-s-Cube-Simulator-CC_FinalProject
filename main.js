// Rubik's Cube Simulator
// CC Final Project
// Bowen Gong bg1941


const dimention = 3;
cube = [];
// a 3D Rubik's Cube of 3x3x3

function setup() {
	createCanvas(600, 600, WEBGL);
	for (let i = 0; i < dimention; i++) {
    cube[i] = [];
    for (let j = 0; j < dimention; j++) {
      cube[i][j] = [];
      for (let k = 0; k < dimention; k++) {
        const len = 50;
        const shift = (dimention - 1) * len * 0.5; // shift the cube to the center of canvas
        const x = len * i - shift;
        const y = len * j - shift;
        const z = len * k - shift;
        cube[i][j][k] = new Cube(x, y, z, len);
      }
    }
  }
}

function draw() {
	background(200);

  for (let i = 0; i < dimention; i++) {
    for (let j = 0; j < dimention; j++) {
      for (let k = 0; k < dimention; k++) {
        cube[i][j][k].show_cubes();
      }
    }
  }
}