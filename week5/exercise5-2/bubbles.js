

function setup() {
    createCanvas(600, 400);
}

function draw()  {
    background(35);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].show();
        bubbles[i].move();
    }

}

// Create Bubble class
class Bubble {
    constructor(x, y, diam, color) {
        this.x = x;
        this.y = y;
        this.diam = diam;
        this.color = color;
    }
    // Create bubble appearence
    show() {
        stroke(this.color);
        strokeWeight(2);
        noFill();
        circle(this.x, this.y, this.diam);
    }
    // make bubbles move
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
        // teleport bubbles back to center when they go off canvas
        if (this.x > 600 || this.x < 0) {
            this.x = 300;
        }
        if (this.y > 400 || this.y < 0) {
            this.y = 200;
        }
    }
}

// Allow User to input number of bubbles
let bubblesNumber = Number(window.prompt('How many bubbles? (Numerals only, please)'));

// randomize bubble color
let colorVar= ['lavender', 'pink', 'aliceblue', 'yellow', 'aquamarine', 'peachpuff'];
const randomColor = Math.ceil(Math.random() * colorVar.length - 1) 
// Make bubbles! 
let bubbles = [];
for(let loopVar = 0; loopVar < bubblesNumber; loopVar++) {
    const newBubble = new Bubble(300, 200, 24, colorVar[randomColor]);
    bubbles.push(newBubble);
}

