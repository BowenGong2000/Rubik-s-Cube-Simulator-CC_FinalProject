class Cube {
  constructor(x, y, z, len) {
    this.pos = createVector(x, y, z) // represent the position of a single cube
    this.len = len // length of cube
    this.config = new Config()
  }

  show() {
    stroke(0)
    strokeWeight(8)

    const r = this.len / 2

    push()

    textureWrap(CLAMP)
    textureMode(NORMAL)
    translate(this.pos.x, this.pos.y, this.pos.z)

    //UP
    // fill(this.config.getColor('u'));
    texture(this.config.getColor('u'))
    textureMode(NORMAL)
    beginShape()
    vertex(-r, -r, -r, 0, 0)
    vertex(r, -r, -r, 1, 0)
    vertex(r, -r, r, 1, 1)
    vertex(-r, -r, r, 0, 1)
    endShape(CLOSE)

    //DOWN
    // fill(this.config.getColor('d'));
    texture(this.config.getColor('d'))
    textureMode(NORMAL)
    beginShape()
    vertex(-r, r, -r, 0, 0)
    vertex(r, r, -r, 1, 0)
    vertex(r, r, r, 1, 1)
    vertex(-r, r, r, 0, 1)
    endShape(CLOSE)

    //BACK
    // fill(this.config.getColor('b'));
    texture(this.config.getColor('b'))
    textureMode(NORMAL)
    beginShape()
    vertex(-r, -r, -r, 0, 0)
    vertex(r, -r, -r, 1, 0)
    vertex(r, r, -r, 1, 1)
    vertex(-r, r, -r, 0, 1)
    endShape(CLOSE)

    //FRONT
    // fill(this.config.getColor('f'));
    texture(this.config.getColor('f'))
    textureMode(NORMAL)
    beginShape()
    vertex(-r, -r, r, 0, 0)
    vertex(r, -r, r, 1, 0)
    vertex(r, r, r, 1, 1)
    vertex(-r, r, r, 0, 1)
    endShape(CLOSE)

    //LEFT
    // fill(this.config.getColor('l'));
    texture(this.config.getColor('l'))
    textureMode(NORMAL)
    beginShape()
    vertex(-r, -r, -r, 0, 0)
    vertex(-r, r, -r, 1, 0)
    vertex(-r, r, r, 1, 1)
    vertex(-r, -r, r, 0, 1)
    endShape(CLOSE)

    //RIGHT
    // fill(this.config.getColor('r'));
    texture(this.config.getColor('r'))
    textureMode(NORMAL)
    beginShape()
    vertex(r, -r, -r, 0, 0)
    vertex(r, r, -r, 1, 0)
    vertex(r, r, r, 1, 1)
    vertex(r, -r, r, 0, 1)
    endShape(CLOSE)

    pop()
  }
}
