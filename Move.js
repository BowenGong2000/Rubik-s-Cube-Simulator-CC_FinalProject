class Move {
  constructor(side, dir) {
    this.side = side
    this.dir = dir
    this.angle = 0
    this.animating = false
  }

  start() {
    this.animating = true
  }

  update() {
    if (!this.animating) return

    let dir = this.dir
    if (['d', 'r', 'f'].includes(this.side)) dir = -1 * dir

    this.angle -= dir * 0.07
    // this.angle = 0

    if (Math.abs(this.angle) < HALF_PI) return

    this.angle = 0
    rubiks.rotateSide(this)
    this.animating = false
  }

  shouldRotateX(index) {
    if (!this.animating || !['l', 'r'].includes(this.side)) return false

    return (index === 0 && this.side === 'l') || (index === rubiks.dimension - 1 && this.side === 'r')
  }

  shouldRotateY(index) {
    if (!this.animating || !['u', 'd'].includes(this.side)) return false

    return (index === 0 && this.side === 'u') || (index === rubiks.dimension - 1 && this.side === 'd')
  }

  shouldRotateZ(index) {
    if (!this.animating || !['f', 'b'].includes(this.side)) return false

    return (index === 0 && this.side === 'b') || (index === rubiks.dimension - 1 && this.side === 'f')
  }

  reverse() {
    return new Move(this.side, -1 * this.dir)
  }
}
