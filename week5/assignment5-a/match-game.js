
const DOWN = 'down';
const UP = 'up';
let title = 'Moon \nMatch!';
let startingX = 50;
let startingY = 50;
let cards = [];
const gameState = {
    totalPairs: 10,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let comingSoon;
let modak;

let cardfaceArray = [];
function preload() {
    cardfaceArray = [
        loadImage('images/dark-moon.png'),
        loadImage('images/first-quarter.png'),
        loadImage('images/lovers-moon.png'),
        loadImage('images/lucky-star.png'),
        loadImage('images/metamorphic.png'),
        loadImage('images/moon-goddess.png'),
        loadImage('images/moon-stag.png'),
        loadImage('images/star-child.png'),
        loadImage('images/waning-crescent.png'),
        loadImage('images/witchs-moon.png'),
    ]

    comingSoon = loadFont('./fonts/ComingSoon-Regular.ttf')
    modak = loadFont('./fonts/Modak-Regular.ttf')
}
function cardback (x, y) {
    fill('white'); // moons
    strokeWeight(0);
    circle(x + 50, y + 67, 35); // Center moon
    circle(x + 20, y + 67, 30); // Left moon
    circle(x + 80, y + 67, 30); // right moon
    fill('midnightblue'); // moon phase cutouts
    circle(x + 15, y + 67, 25); // left
    circle(x + 85, y + 67, 25); // right
    /** original card back code follows:*/
    // noFill();
    // strokeWeight(3);
    // stroke('yellow');
    // arc(x + 0, y + 0, 100, 133, 0, HALF_PI); // Start Center Sparkle
    // arc(x + 100, y + 0, 100, 133, HALF_PI, PI);
    // arc(x + 100, y + 133, 100, 133, PI, PI+HALF_PI);
    // arc(x + 0, y + 133, 100, 133, PI+HALF_PI, TWO_PI); // End Center Sparkle
    // fill('indigo');
    // // stroke('indigo');
    // arc(x + 0, y + 0, 50, 50, 0, HALF_PI); // Start Corner Circles
    // arc(x + 100, y + 0, 50, 50, HALF_PI, PI);
    // arc(x + 100, y + 133, 50, 50, PI, PI+HALF_PI);
    // arc(x + 0, y + 133, 50, 50, PI+HALF_PI, TWO_PI); // End Corner Circles
    // strokeWeight(0); // clear stroke for following cards
    /** I simplified the card backs because they looked too busy when all laid out together
     */
}

function setup() {
    createCanvas(950, 677);
    // background('lavender');
    let selectedFaces = [];
    for (let z = 0; z < 10; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove selected cardface to limit to 2 uses
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 5; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 115;
        }
        startingY += 148;
        startingX = 50;
    }

}

function draw () {
    background('lavender');
    fill('lightblue');
    rect(25, 25, 610, 627);
    if (gameState.numMatched === gameState.totalPairs) {
        fill('yellow');
        stroke('midnightblue');
        strokeWeight(5);
        textSize(66);
        textFont(modak);
        text('You win!!!', 650, 550);
        noStroke();
        textSize(20);
        fill('midnightblue');
        textFont(comingSoon);
        text('Refresh the page to play again!', 660, 575);
        noLoop();
    }
    for (let m = 0; m < cards.length; m++) {
        if (!cards[m].isMatch) {
            cards[m].face = DOWN;
        }
        cards[m].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill('midnightblue');
    textSize(36);
    textFont(comingSoon);
    text('attempts: ' + gameState.attempts, 650, 400);
    text('matches: ' + gameState.numMatched, 650, 350);
    textSize(72);
    textFont(modak);
    text(title, 650, 75);
}

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        // first check flipped cards length, then trigger flip
        if(gameState.flippedCards.length < 2 && 
            cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // Cards match!
            // Mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty flipped cards array
            gameState.flippedCards.length = 0;
            // increment score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

class Card {
    constructor(x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 133;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show () {
        if(this.face === UP || this.isMatch) {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x, this.y);
        } else {
            fill('midnightblue')
            rect(this.x, this.y, this.width, this.height);
           cardback(this.x, this.y);
        }

    }

    didHit (mouseX, mouseY) {
        if(mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }
    }

    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        // Pick random index
        const idx = Math.floor(Math.random() * counter);
        // decrease counter by 1
        counter--;
        // swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}
