function setup() {
    createCanvas(100, 133);
}

function draw() {
    background('midnightblue');
    fill('white'); // moons
    strokeWeight(0);
    circle(50, 67, 20); // Center moon
    circle(30, 67, 20); // Left moon
    circle(70, 67, 20); // right moon
    fill('midnightblue'); // moon phase cutouts
    circle(25, 67, 15); // left
    circle(75, 67, 15); // right
    noFill();
    strokeWeight(3);
    stroke('yellow');
    arc(0, 0, 100, 133, 0, HALF_PI); // Start Center Sparkle
    arc(100, 0, 100, 133, HALF_PI, PI);
    arc(100, 133, 100, 133, PI, PI+HALF_PI);
    arc(0, 133, 100, 133, PI+HALF_PI, TWO_PI); // End Center Sparkle
    fill('indigo');
    // stroke('indigo');
    arc(0, 0, 50, 50, 0, HALF_PI); // Start Corner Circles
    arc(100, 0, 50, 50, HALF_PI, PI);
    arc(100, 133, 50, 50, PI, PI+HALF_PI);
    arc(0, 133, 50, 50, PI+HALF_PI, TWO_PI); // End Corner Circles
}