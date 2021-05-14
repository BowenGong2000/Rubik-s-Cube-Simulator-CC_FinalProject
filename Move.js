class Move {
    constructor(side, dir) {
        this.side = side;
        this.dir = dir;
        this.angle = 0;
        this.animating = false;
    }

    start() {
        this.animating = true;
    }

    update() {
        if (this.animating) {
            let dir = this.dir;
            if (['d', 'r', 'f'].indexOf(this.side) != -1) {
                dir = -1 * dir;
            }
            this.angle -= dir * 0.07;

            if (Math.abs(this.angle) >= HALF_PI) {
                this.angle = 0;
                cube.rotateSide(this);
                this.animating = false;
            }
        }
    }

    shouldRotateX(index) {
        if (!this.animating) {
            return false;
        }
        if (['l','r'].indexOf(this.side) != -1) {
            if (index == 0 && this.side == "l") {
                return true;
            }
            if (index == cube.dimension - 1 && this.side == "r") {
                return true;
            }
        }
        return false;
    }

    shouldRotateY(index) {
        if (!this.animating) {
            return false;
        }

        if (['u','d'].indexOf(this.side) != -1) {
            if (index == 0 && this.side == "u") {
                return true;
            }
            if (index == cube.dimension - 1 && this.side == "d") {
                return true;
            }
        }
        return false;
    }

    shouldRotateZ(index) {
        if (!this.animating) {
            return false;
        }
        if (['f','b'].indexOf(this.side) != -1) {
            if (index == 0 && this.side == "b") {
                return true;
            }
            if (index == cube.dimension - 1 && this.side == "f") {
                return true;
            }
        }
        return false;
    }

    reverse() {
        return new Move(this.side, -1 * this.dir);
    }
}