// This project was made with help from a tutorial by Jeff Thompson: https://www.youtube.com/watch?v=WpzdIwYnSS0 //

let branches;
let paused = false;
let maxAge = 150;
let branchNumber = 1;

function setup() {
    createCanvas(800, 600);
    background(25);
    branches = [];
    for (let i=0; i < branchNumber; i++) {
        let b = new Branch(width/2, height);
        branches.push(b);
    }
}

function draw() {
    if (!paused) {
        for (let i = branches.length - 1; i>=0; i-=1) {
            let b = branches[i];
            b.update();
            if (b.distFromStart >= height-50 || b.age > maxAge) {
                branches.splice(i, 1);
            }

            b.show();
        }

        // stops simulation if it starts to lag too much
        if (frameRate() < 30) {
            setup();
        }
    }
}

function keyPressed() {
    // p key pauses/unpauses
    if (key === 'p') {
        paused = !paused;
    } 
    // all other keys reset drawing
    else {
        setup();
        paused = false;
    }
}

// make branches!
class Branch {
    constructor(x, y) {
        this.angleChangeAmt = radians(15);
        this.speed = 1;
        this.splitChance = 2;
        this.splitAngle = radians(45);
        this.x = x;
        this.y = y;
        this.prevX = x;
        this.prevY = y;
        this.angle = radians(270);

        this.distFromStart;
        this.age = 0;
    }
    //  make branches longer
    update() {
        this.age += 1;
        this.distFromStart = dist(width/2, height, this.x, this.y);

        this.angle += random(-this.angleChangeAmt, this.angleChangeAmt);
        this.prevX = this.x;
        this.prevY = this.y;
        this.x += cos(this.angle) * this.speed;
        this.y += sin(this.angle) * this.speed;

        // Randomly split branch
        if (random(175) < this.splitChance) {
            let b = new Branch(this.x, this.y, this.angle+this.splitAngle);
            branches.push(b);
            this.angle -= this.splitAngle;
        }
    }

    show() {
        // colors for the branches
        let branchColors = [
            'royalblue', 'steelblue', 'cornflowerblue', 'mediumpurple', 'mediumslateblue', 'mediumorchid', 'orchid','palevioletred', '#e38aae', '#ffb2d0', 
        ];
        //maps colors to the age of the branch
        let ageColor = Math.round(map(this.age, 0, 150, 0, 9, true)) 
        stroke(branchColors[ageColor]);
        line(this.prevX, this.prevY, this.x, this.y);
        console.log(branchColors[ageColor]);
        this.blossom();
    }
    // make a branch bloom when it "dies"
    blossom() {
        if (this.age === maxAge || this.distFromStart >= height - 50) {
            fill('deeppink');
            stroke('deeppink');
            ellipse(this.x, this.y, 4, 6);
        }
    }
}

