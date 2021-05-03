let cube;
let dim = 3;
let len = 100;

let allMoves = [];
let drawing = true;
let moves = [];
let cam;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	cam = createEasyCam({ distance: 700 });
  cube = new Rubiks(dim);
  initMoves();
}

function draw() {
    background(200);
    rotateX(-0.6);
    rotateY(0.6);
    rotateZ(0.2);
    cube.show();
}

function keyPressed(char) {
    if (cube.isAnimating()) {
        return;
    }

    let dir = Config.CC;
    if (char.key.toLowerCase() == char.key) {
        dir = Config.CW;
    }

    if (['u','d','r','l','f','b'].indexOf(char.key.toLowerCase()) != -1){
        let move = new Move(char.key.toLowerCase(), dir)
        cube.doMove(move);
    }
}

function initMoves() { // include all possible moves 
    allMoves[0] = new Move('u', Config.CW);
    allMoves[1] = new Move('d', Config.CW);
    allMoves[2] = new Move('r', Config.CW);
    allMoves[3] = new Move('l', Config.CW);
    allMoves[4] = new Move('f', Config.CW);
    allMoves[5] = new Move('b', Config.CW);
    allMoves[6] = new Move('u', Config.CC);
    allMoves[7] = new Move('d', Config.CC);
    allMoves[8] = new Move('r', Config.CC);
    allMoves[9] = new Move('l', Config.CC);
    allMoves[10] = new Move('f', Config.CC);
    allMoves[11] = new Move('b', Config.CC);
}