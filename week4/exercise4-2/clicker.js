let rectX = 0;
let rectY;
const rectWidth = 75;
const rectHeight = 75;
let clickCount = 0;
let speed;

function setup () {
    createCanvas(500, 500)
    rectY = random(height - rectHeight);
    speed = random(1, 3);
}

function draw () {
    background('aliceblue');
    textSize(28);
    strokeWeight(0);
    fill('green');
    text(clickCount, 0, 495);
    drawShape();
    rectX += speed;
    if(rectX > width + 1) {
        noLoop();
        textSize(18);
        text('Your score was ' + clickCount, 100, 300);
    }
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
    }
}

function drawShape() {
    fill('navy');
    stroke('navy');
    rect(rectX, rectY, 75, 75);
}