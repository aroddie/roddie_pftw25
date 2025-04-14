// This project was created with help from a tutorial by Tony Zhang: https://www.youtube.com/watch?v=Mg9Alcygelc //

let dots = [];
let dotCount = 15;
let size = 25;

function setup() {
  createCanvas(800, 600);
  for (let i=0; i < dotCount; i++ ) {
    // allows for randomized color per dot
    let randomColor = Math.ceil(Math.random() * dotColors.length - 1);
    //actually making the dots
    dots[i] = new Dot(
      createVector(random(200,600), random(0,50)), // position x, y
      createVector(random(-5,5),0), // speed x, y
      createVector(0,0.1), // acceleration x, y
      dotColors[randomColor],
      random(10, 25) // varies the size of the dots
    );
  }
}

function draw() {
  background(25);
  for (let dot of dots){
    dot.show();
    dot.move();
    dot.walls();
    dot.collide();
  }
}
// Make Dot Class
class Dot{
  constructor(position, speed, acceleration, color, size){
    this.p = position;
    this.s = speed;
    this.a = acceleration;
    this.color = color
    this.size = size
  }
  // Dot appearance
  show() {
    stroke(this.color);
    strokeWeight(this.size);
    point(this.p.x, this.p.y);
  }
  // Dot movement
  move() {
    this.p.add(this.s);
    this.s.add(this.a);
  }
  // keep dots within the canvas
  walls() {
    if (this.p.y >= height-size/2 || this.p.y <= 0+size/2){
      this.p.y = constrain(this.p.y, 0+size/2, height-size/2);
      this.s.y *= -1;
    }
    if (this.p.x >= width-size/2 || this.p.x <= 0+size/2){
      this.p.x = constrain(this.p.x, 0+size/2, width-size/2)
      this.s.x *= -1;
    }
  }
  // let dots hit each other
  //** Code courtesy of Tony Zhang https://www.youtube.com/watch?v=zmWDzJWmmUY **//
  collide(){
    let dir;
    let dist;
    let s1;
    let s2;
    for (let i = 0; i < dots.length; i++){
      dir = p5.Vector.sub(dots[i].p, this.p)
      dist = dir.mag()
      if (dist <= size) {
        dir.normalize()
        let correction = size - dist
        this.p.sub(p5.Vector.mult(dir, correction/2))
        dots[i].p.add(p5.Vector.mult(dir, correction/2))
        s1 = p5.Vector.dot(dir, this.s)
        s2 = p5.Vector.dot(dir, dots[i].s)
        dir.mult(s1 - s2)
        this.s.sub(dir)
        dots[i].s.add(dir)
      }
    }
  }
}
// Pick Colors for Dots
let dotColors = [
  'aliceblue', 'aquamarine', 'lightblue', 'lavender', 'lavenderblush', 'honeydew', 'blanchedalmond', 'peachpuff', 'mistyrose', 'thistle', 
];

