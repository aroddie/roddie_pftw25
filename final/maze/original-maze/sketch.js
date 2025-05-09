let dot;
let grid;
let lineWeight;

let pressedKeys = [];

function setup() {
  createCanvas(800, 800);
  dot = new Dot(750, 625);
  grid = loadImage("./mazeDesign.png");
}

function draw() {
  background(grid);
  dot.move();
  dot.show();
  dot.mazeWalls();
  dot.block();
}

function keyPressed() {
  pressedKeys[key] = true;
}

function keyReleased() {
  delete pressedKeys[key];
}

// creates the dot to go through the maze
class Dot {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.speed = 3;
    this.size = 20;
  }

  move() {
    let walk = createVector(0,0);

    // allow for WASD to control movement
      if(pressedKeys.w) {
        walk.y += -1;
      }
      if(pressedKeys.a) {
        walk.x += -1;
      }
      if(pressedKeys.s) {
        walk.y += 1;
      }
      if (pressedKeys.d) {
        walk.x += 1;
      }

    // sets the speed of the movement
    walk.setMag(this.speed);
    this.x += walk.x;
    this.y += walk.y;
    
    // create boundaries at canvas edge
    if (this.x <= 0 + this.size/2) {
      this.x = this.x + this.speed;
    }
    if (this.x >= width - this.size/2) {
      this.x = this.x - this.speed;
    }
    if (this.y <= 0 + this.size/2) {
      this.y = this.y + this.speed;
    }
    if (this.y >= height - this.size/2) {
      this.y = this.y - this.speed;
    }
  }

  show() {
    // control appearance of the dot
    stroke('indigo');
    strokeWeight(this.size);
    point(this.x, this.y);
  }

mazeWalls() {
    //maze
    lineWeight = 15;
    stroke('midnightblue')
    strokeWeight(lineWeight);
    // Outer Borders
    line(100, 700, 700, 700); // bottom border
    line(100, 100, 100, 700); // left border
    line(100, 100, 700, 100); // top border
    // left border with gap for entry
    line(700, 100, 700, 600);
    line(700, 600, 725, 600);
    line(700, 650, 725, 650);
    line(700, 650, 700, 700);
    // End outer borders
    // maze walls by row
      // starting y 100-200
      line(150, 150, 150, 300);
      line(200, 150, 200, 200);
      line(250, 100, 250, 150);
      line(200, 200, 300, 200);
      line(300, 100, 300, 200);
      line(350, 150, 350, 250);
      line(350, 150, 400, 150);
      line(400, 200, 500, 200);
      line(450, 150, 450, 200);
      line(500, 100, 500, 150);
      line(550, 100, 550, 200);
      line(600, 150, 600, 250);
      line(600, 150, 650, 150);
      line(650, 200, 700, 200);
      // starting y 200-300
      line(150, 300, 250, 300);
      line(200, 250, 200, 300);
      line(250, 200, 250, 250);
      line(250, 250, 450, 250);
      line(300, 250, 300, 500);
      line(375, 300, 500, 300);
      line(500, 200, 500, 500);
      line(500, 250, 650, 250);
      line(550, 300, 700, 300);
      // starting y 300-400
      line(100, 350, 200, 350);
      line(100, 400, 150, 400);
      line(200, 400, 250, 400);
      line(250, 300, 250, 650);
      line(350, 350, 350, 450);
      line(350, 350, 375, 350);
      line(375, 300, 375, 350);
      line(425, 350, 450, 350);
      line(425, 350, 425, 340);
      line(450, 350, 450, 450);
      line(550, 300, 550, 350);
      line(550, 400, 600, 400);
      line(600, 350, 600, 400);
      line(600, 350, 650, 350);
      line(650, 350, 650, 500);
      // starting y 400-500
      line(100, 500, 150, 500);
      line(150, 450, 200, 450);
      line(200, 450, 200, 500);
      line(200, 500, 250, 500);
      line(350, 450, 450, 450);
      line(300, 500, 500, 500);
      line(500, 450, 600, 450);
      line(600, 450, 600, 500);
      line(600, 500, 650, 500);
      // starting y 500-600
      line(150, 500, 150, 600);
      line(150, 550, 200, 550);
      line(200, 600, 250, 600);
      line(250, 550, 700, 550);
      line(350, 550, 350, 650);
      line(400, 600, 450, 600);
      line(500, 550, 500, 650);
      line(550, 500, 550, 550);
      line(650, 550, 650, 650);
      // starting y 600-700
      line(150, 650, 250, 650);
      line(300, 600, 300, 700);
      line(400, 600, 400, 700);
      line(450, 650, 550, 650);
      line(550, 600, 550, 650);
      line(600, 600, 600, 700);
    // End Maze
}
  block() {
    // prevents the dot from crossing over maze walls
    if (
      //left barrier wall with gap
      this.x <= 700 + lineWeight/2 + this.size/2 && 
      this.x >= 700 - lineWeight/2 - this.size/2 &&
      this.y >= 100 &&
      this.y <= 600 ||
      this.x <= 700 + lineWeight/2 + this.size/2 &&
      this.x >= 700 - lineWeight/2 - this.size/2 &&
      this.y >= 650 &&
      this.y <= 700 ||
      this.x <= 725 + lineWeight/2 + this.size/2 &&
      this.x >= 700 - lineWeight/2 - this.size/2 &&
      this.y <= 600 + lineWeight/2 + this.size/2 &&
      this.y >= 600 - lineWeight/2 - this.size/2 ||
      this.x <= 725 + lineWeight/2 + this.size/2 &&
      this.x >= 700 - lineWeight/2 - this.size/2 &&
      this.y <= 650 + lineWeight/2 + this.size/2 &&
      this.y >= 650 - lineWeight/2 - this.size/2 
      //
    ) {
      this.speed = this.speed * -1;
    } else {
      this.speed = 3;
    }

  }
}

