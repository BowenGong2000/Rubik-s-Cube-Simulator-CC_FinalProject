const dim = 3
const len = 100

const faceImageMap = {
  u: {
    url: 'images/43ebc8fd3f0f056467b5698af5e0df5.png',
    image: null,
    colorKey: 'white'
  },
  d: {
    url: 'images/images.png',
    image: null,
    colorKey: 'yellow'
  },
  l: {
    url: 'images/nyu.png',
    image: null,
    colorKey: 'orange'
  },
  r: {
    url: 'images/openprocessing.png',
    image: null,
    colorKey: 'red'
  },
  f: {
    url: 'images/p5js-pink.jpg',
    image: null,
    colorKey: 'green'
  },
  b: {
    url: 'images/processing.webp',
    image: null,
    colorKey: 'blue'
  }
}

let rubiks

function preload() {
  Object.entries(faceImageMap).forEach(function (item) {
    Config.colors[item[0]] = loadImage(item[1].url)
    Config.colors[item[1].colorKey] = Config.colors[item[0]]

    faceImageMap[item[0]].image = Config.colors[item[0]]
  })
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  createEasyCam({ distance: 700 })

  textureWrap(CLAMP)

  rubiks = new Rubiks(dim)
}

function draw() {
  background(200)
  rotateX(-0.6)
  rotateY(0.6)
  rotateZ(0.2)

  rubiks.show()
}

function keyPressed(char) {
  if (rubiks.isAnimating()) return

  let dir = Config.CC
  const lowerKey = char.key.toLowerCase()

  if (lowerKey == char.key) dir = Config.CW

  if (!['u', 'd', 'r', 'l', 'f', 'b'].includes(lowerKey)) return

  const move = new Move(lowerKey, dir)

  rubiks.doMove(move)
}
