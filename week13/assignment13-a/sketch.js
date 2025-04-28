// *This project was created with help from a tutorial by Draw Make & Code: https://www.youtube.com/watch?v=FH59hqrvWxU & https://editor.p5js.org/EdCavett/sketches/Idezpeb53 *//

let field;
let wind;
let windSlider;

function setup() {
  createCanvas(800, 600);
  // create the grassy field
  field = new Grass();
  windSlider = createSlider(-25, 50, 25);
  angleMode(DEGREES)
}

function draw() {
  background(35);
  // actually draw the field
  field.show();
}

class Grass {

  constructor() {
  this.field = [];
  this.offset = [];
  this.rwave = [];
  this.size = [];
  this.seg = [];

  this.index = -1;
  this.population = 150;
  // loop to create the field array and make it the width of the canvas
  for (let x = 0; x< width; x+= width/this.population){
    this.index += 1;
    this.field.push(x);
    this.offset.push((this.index*0.065)+0.015);
    this.rwave.push(0);
    this.size.push(random(35, 75));
    this.seg.push(0.85);
  }
}

  // function to show the field
  show(){
    for (let i = 0; i < this.index; i++) {
      let len = this.size[i];

      push();
      translate(this.field[i], height);
      this.blade(len, i);
      pop();
    }
  }

  // function to draw each individual blade of grass and create wind movement. Also cuts the array in half to create more variety in color and movement. 
  blade(len, ind) {
    if (ind/2 === int(ind/2)) {
      this.offset[ind] += 0.0025;
      stroke(85, 255-(len*2.5), len*1.25); // makes newer, greener grass
      wind = map(noise(this.offset[ind]), 0,1, windSlider.value()*-0.5, windSlider.value()); // causes the grass to be more springy and less responsive to wind
    }

    if (ind/2 != int(ind/2)) {
      this.offset[ind] += 0.0025;
      stroke(235-(len*3), len*3, 100); // makes older, more purple grass
      wind = map(noise(this.offset[ind]), -1, 1, -windSlider.value(), windSlider.value()); // causes the grass to be more responsive to wind
    }

    // actually draw the blade of grass
    strokeWeight(len*1.5*random(0.05, 0.1));
    rotate(wind);
    line(0,0,0,-len);
    translate(0, -len);
    // draws the blade recursively, adding segments until the length of each segment gets too small
    if (len > 20) {
      this.blade(len*this.seg[ind], ind);
    }
  }
}

