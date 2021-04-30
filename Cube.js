class Cube{  // the small cubes
    constructor(x,y,z,length){
        this.pos = createVector(x,y,z); // position of a single cube 
        this.len = length;              // its dimention
    }
    
    show_cubes(){
        fill(255);
        stroke(0);
        strokeWeight(5);
        
        push();
        translate(this.pos.x,this.pos.y,this.pos.z);
        //box(this.len);
        const r = this.len / 2;
        
        beginShape();
        fill(colors[0]);
        vertex(-r, -r, -r);
        vertex(r, -r, -r);
        vertex(r, r, -r);
        vertex(-r, r, -r);
        endShape(CLOSE);

        beginShape();
        fill(colors[1]);
        vertex(-r, -r, r);
        vertex(r, -r, r);
        vertex(r, r, r);
        vertex(-r, r, r);
        endShape(CLOSE);

        beginShape();
        fill(colors[2]);
        vertex(-r, -r, -r);
        vertex(r, -r, -r);
        vertex(r, -r, r);
        vertex(-r, -r, r);
        endShape(CLOSE);

        beginShape();
        fill(colors[3]);
        vertex(-r, r, -r);
        vertex(r, r, -r);
        vertex(r, r, r);
        vertex(-r, r, r);
        endShape(CLOSE);

        beginShape();
        fill(colors[4]);
        vertex(-r, -r, -r);
        vertex(-r, r, -r);
        vertex(-r, r, r);
        vertex(-r, -r, r);
        endShape(CLOSE);

        beginShape();
        fill(colors[5]);
        vertex(r, -r, -r);
        vertex(r, r, -r);
        vertex(r, r, r);
        vertex(r, -r, r);
        endShape(CLOSE);
            
        pop();
    }
}