class Rubiks {
  constructor(dimension) {
    this.currentMove = null
    this.dimension = dimension
    this.cube = [] // empty list

    for (let i = 0; i < this.dimension; i++) {
      this.cube[i] = [] // 1D array

      for (let j = 0; j < this.dimension; j++) {
        this.cube[i][j] = [] // 2D arrray
        for (let k = 0; k < this.dimension; k++) {
          const shift = ((this.dimension - 1) * len) / 2 // shift to the center of canvas
          const x = len * i - shift
          const y = len * j - shift
          const z = len * k - shift

          this.cube[i][j][k] = new Cube(x, y, z, len) // fill each element of 3D array with a cubie
        }
      }
    }
  }

  show() {
    if (this.currentMove) this.currentMove.update()

    for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        for (let k = 0; k < this.dimension; k++) {
          if (this.currentMove) {
            if (this.currentMove.shouldRotateX(i)) {
              push()
              rotateX(this.currentMove.angle)
              this.cube[i][j][k].show()
              pop()
            } else if (this.currentMove.shouldRotateY(j)) {
              push()
              rotateY(this.currentMove.angle)
              this.cube[i][j][k].show()
              pop()
            } else if (this.currentMove.shouldRotateZ(k)) {
              push()
              rotateZ(this.currentMove.angle)
              this.cube[i][j][k].show()
              pop()
            } else {
              this.cube[i][j][k].show()
            }
          } else {
            this.cube[i][j][k].show()
          }
        }
      }
    }
  }

  doMove(move) {
    this.currentMove = move
    move.start()
  }

  isAnimating() {
    // return the state, if the cube is currently moving and if the animation starts(true/false)
    return this.currentMove && this.currentMove.animating
  }

  rotateSide(move) {
    const side = move.side
    const dir = move.dir

    const newConfigs = []

    let index = 0
    let rotateReverse = false

    if (['d', 'r', 'f'].includes(side)) {
      index = this.dimension - 1
      rotateReverse = true
    }

    if (dir === Config.CC) rotateReverse = !rotateReverse

    if (side === 'u' || side === 'd') {
      for (let i = 0; i < this.dimension; i++) {
        for (let j = 0; j < this.dimension; j++) {
          this.cube[i][index][j].config.rotate(side, dir)
          const nextJ = rotateReverse ? this.dimension - 1 - i : i
          const nextI = rotateReverse ? j : this.dimension - 1 - j
          newConfigs.push({ i: nextI, j: nextJ, config: this.cube[i][index][j].config.copy() })
        }
      }

      for (let k = 0; k < newConfigs.length; k++) {
        this.cube[newConfigs[k].i][index][newConfigs[k].j].config = newConfigs[k].config
      }
    } else if (side === 'l' || side === 'r') {
      for (let i = 0; i < this.dimension; i++) {
        for (let j = 0; j < this.dimension; j++) {
          this.cube[index][i][j].config.rotate(side, dir)
          let nextJ = rotateReverse ? i : this.dimension - 1 - i
          let nextI = rotateReverse ? this.dimension - 1 - j : j
          newConfigs.push({ i: nextI, j: nextJ, config: this.cube[index][i][j].config.copy() })
        }
      }
      for (let k = 0; k < newConfigs.length; k++) {
        this.cube[index][newConfigs[k].i][newConfigs[k].j].config = newConfigs[k].config
      }
    } else if (side === 'f' || side === 'b') {
      for (let i = 0; i < this.dimension; i++) {
        for (let j = 0; j < this.dimension; j++) {
          this.cube[i][j][index].config.rotate(side, dir)
          let nextJ = rotateReverse ? i : this.dimension - 1 - i
          let nextI = rotateReverse ? this.dimension - 1 - j : j
          newConfigs.push({ i: nextI, j: nextJ, config: this.cube[i][j][index].config.copy() })
        }
      }
      for (let k = 0; k < newConfigs.length; k++) {
        this.cube[newConfigs[k].i][newConfigs[k].j][index].config = newConfigs[k].config
      }
    }
  }
}
