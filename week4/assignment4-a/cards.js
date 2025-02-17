const cards = [];
let startingX = 50;
let startingY = 50;
let width = 100;
let height = 133;
let gap = 15;

function setup() {
     createCanvas(660, 677);
     background(220);
}

function draw() {
noLoop();
//outer loop for rows
for(let j = 0; j < 4; j++) {
    //Inner loop for columns
    for(let i = 0; i < 5; i++) {
        rect(startingX, startingY, width, height);
        startingX = startingX + width + gap;
    }
    startingY = startingY + height + gap;
    startingX = 50;
}
}