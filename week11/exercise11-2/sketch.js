function setup() {
  createCanvas(800, 600);
  background(35);
}

function draw()  {
  drawTree();
}

// Create Petal class
class Petal {
  constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
  }
  // Create petal appearence
  show() {
      stroke(255);
      strokeWeight(2);
      fill(random(180, 230), random(200, 217), random(180, 230), 150); //randomize interior color of petals (to an extent)
      ellipse(this.x, this.y, this.width, this.height);
  }
  // make petals move
  move() {
      this.x = this.x + random(-20, 20);
      this.y = this.y + random(-15, 5);
      ;
      // teleport petals back to center when they go off canvas
      if (this.x > 800 || this.x < 0) {
          this.x = 400;
      }
      if (this.y < 0) {
          this.y = 300;
      }
  }
}
// Make petals! 

let petals = [];
for(let loopVar = 0; loopVar < 10; loopVar++) {
  const newpetal = new Petal(400, 600, 10, 20);
  petals.push(newpetal);
}

function drawTree() {
for (let i = 0; i < petals.length; i++) {
  petals[i].show();
  petals[i].move();
}
}

function mousePressed() {
  noLoop();
}