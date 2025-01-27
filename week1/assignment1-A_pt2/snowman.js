let grid = undefined;
let fill1 = window.prompt("what color is the snow?", "white").toLowerCase();
let stroke1 = window.prompt("what color are the trees?", "brown").toLowerCase();
let stroke2 = window.prompt("what's your favorite color?", "purple").toLowerCase();

function setup() {
    createCanvas(1000, 800);
    background("skyblue");
    grid = loadImage("images/100px_grid.png");
}

function draw() {
    // background(grid);
    //cloud
    fill("white");
    stroke("white");
    ellipse(700, 100, 150, 80);
    ellipse(625, 110, 70, 60);
    ellipse(775, 110, 70, 60);
    // snow
    stroke("gray");
    fill(fill1);
    arc(0, 800, 1200, 800, PI+HALF_PI, QUARTER_PI);
    arc(1000, 900, 2000, 1000, PI, QUARTER_PI);
    //tree trunk
    stroke(stroke1);
    strokeWeight(40);
    line(100, 425, 100, 350);
    // tree branches
    stroke("darkgreen");
    fill("darkgreen");
    triangle(100, 300, 150, 350, 50, 350);
    triangle(100, 265, 130, 300, 70, 300);
    triangle(100, 225, 120, 250, 80, 250);
    // snowman legs
    stroke("gray");
    fill(fill1);
    strokeWeight(20);
    // base
    ellipse(500, 600, 350);
    // body
    ellipse(500, 400, 250);
    // head
    ellipse(500, 200, 200);
    // left arm
    stroke(stroke1)
    line(400, 400, 200, 300);
    // right arm
    line(600, 400, 800, 300);
    // hat brim
    fill(stroke2);
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    // hat body
    quad(450, 50, 550, 50, 550, 120, 450, 120);
    //eyes
    stroke(0);
    strokeWeight(50);
    point(425, 200);
    point(575, 200);
    // mouth
    noFill();
    strokeWeight(10);
    arc(500, 210, 30, 30, 0, PI);
}