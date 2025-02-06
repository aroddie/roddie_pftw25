function setup() {
  createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, moonColor, moonPhase) {
  translate(originX, originY);
  fill(primaryColor);
  strokeWeight(0);
  rect(0, 0, 200, 200);
  stroke("white") 
  strokeWeight(5);
  arc(0, 0, 100, 100, 0, HALF_PI); // Start Corner Arcs
  arc(200, 0, 100, 100, HALF_PI, PI);
  arc(200, 200, 100, 100, PI, PI+HALF_PI);
  arc(0, 200, 100, 100, PI+HALF_PI, TWO_PI); // End Corner Arcs
  fill(moonColor);
  stroke(moonColor);
  circle(100, 100, 70); // Moon base
  fill(primaryColor);
  strokeWeight(0);
  circle(moonPhase, 100, 60); // Moon Cutout
  noFill();
  stroke("yellow");
  strokeWeight(5);
  arc(25, 25, 50, 50, PI, PI+HALF_PI); // Start Corner Sparkles
  arc(175, 25, 50, 50, PI+HALF_PI, TWO_PI);
  arc(175, 175, 50, 50, 0, HALF_PI);
  arc(25, 175, 50, 50, HALF_PI, PI); // End Corner Sparkles
  arc(0, 0, 200, 200, 0, HALF_PI); // Start Center Sparkle
  arc(200, 0, 200, 200, HALF_PI, PI);
  arc(200, 200, 200, 200, PI, PI+HALF_PI);
  arc(0, 200, 200, 200, PI+HALF_PI, TWO_PI); // End Center Sparkle
}

function draw() {
  createTile(0, 0, 'pink', 'white', 115);
  createTile(0, 200, 'lavender', 'indigo', 65); 
  createTile(0, 200, 'lightblue', 'yellow', 110);
  createTile(200, -400, 'magenta', 'silver', 100);
  createTile(0, 200, 'purple', 'lightblue'); // no moonPhase = full moon
  createTile(0, 200, 'blue', 'pink', 100);
  createTile(200, -400, 'red', 'cornsilk', 85);
  createTile(0, 200, 'indigo', 'lavender', 135);
  createTile(0, 200, 'black', 'white', 90);
}