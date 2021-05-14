class Config {
  static CW = 1
  static CC = -1
  static colors = {
    white: '#FFFFFF', // u
    yellow: '#FFFF00', // d
    red: '#FF0000', // r
    orange: '#FFA500', // l
    green: '#00FF00', // f
    blue: '#0000FF' // b
  }

  //clockwise rotations
  rotations = {
    u: ['u', 'd', 'b', 'f', 'r', 'l'],
    d: ['u', 'd', 'f', 'b', 'l', 'r'],
    r: ['f', 'b', 'r', 'l', 'd', 'u'],
    l: ['b', 'f', 'r', 'l', 'u', 'd'],
    f: ['l', 'r', 'u', 'd', 'f', 'b'],
    b: ['r', 'l', 'd', 'u', 'f', 'b']
  }

  constructor(sides) {
    this.sides = sides || {
      u: Config.colors.white,
      d: Config.colors.yellow,
      r: Config.colors.red,
      l: Config.colors.orange,
      f: Config.colors.green,
      b: Config.colors.blue
    }
  }

  copy() {
    return new Config(this.sides)
  }

  getColor(side) {
    return this.sides[side]
  }

  rotate(side, dir) {
    if (dir == Config.CC) {
      switch (side) {
        case 'u':
          side = 'd'
          break
        case 'd':
          side = 'u'
          break
        case 'r':
          side = 'l'
          break
        case 'l':
          side = 'r'
          break
        case 'f':
          side = 'b'
          break
        case 'b':
          side = 'f'
          break
      }
    }

    const temp = Object.assign({}, this.sides)

    this.sides.u = temp[this.rotations[side][0]]
    this.sides.d = temp[this.rotations[side][1]]
    this.sides.r = temp[this.rotations[side][2]]
    this.sides.l = temp[this.rotations[side][3]]
    this.sides.f = temp[this.rotations[side][4]]
    this.sides.b = temp[this.rotations[side][5]]
  }
}
