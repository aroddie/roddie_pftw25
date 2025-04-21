let startingX = 30;
let startingY = 5;
let keys = [];

// picture variables
let catPics = [];
// sound variables
let catSounds = [];
let purr;
let purrBtn;

function preload() {
  // load images
  catPics = [
    loadImage("./images/cat01.png"),
    loadImage("./images/cat02.png"),
    loadImage("./images/cat03.png"),
    loadImage("./images/cat04.png"),
    loadImage("./images/cat05.png"),
    loadImage("./images/cat06.png"),
    loadImage("./images/cat07.png"),
    loadImage("./images/cat08.png"),
    loadImage("./images/cat09.png"),
    loadImage("./images/cat10.png"),
    loadImage("./images/cat11.png"),
    loadImage("./images/cat12.png")
  ];
  // load sounds
  catSounds = [
    loadSound("./sounds/mew01.mp3"),
    loadSound("./sounds/mew02.mp3"),
    loadSound("./sounds/mew03.mp3"),
    loadSound("./sounds/mew04.mp3"),
    loadSound("./sounds/mew05.mp3"),
    loadSound("./sounds/mew06.mp3"),
    loadSound("./sounds/mew07.mp3"),
    loadSound("./sounds/mew08.mp3"),
    loadSound("./sounds/mew09.mp3"),
    loadSound("./sounds/mew10.mp3"),
    loadSound("./sounds/mew11.mp3"),
    loadSound("./sounds/mew12.mp3")
  ];
  purr = loadSound("./sounds/purr.mp3");
}

function setup() {
  createCanvas(800, 650);
  // arrange the cats
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      const catKey = catPics.pop();
      keys.push(new Key(startingX, startingY, catKey))
      startingX += 195;
    }
    startingY += 210;
    startingX = 10;
  }
  purrBtn = createButton('Purr Track');
  purrBtn.mousePressed(togglePurr);
}

function draw() {
  background(35);
  // show the cats!
  for (let cats of keys) {
    cats.show();
  }
}

function togglePurr() {
  if (!purr.isPlaying()) {
    purr.loop();
    purr.setVolume(0.2);
    purrBtn.html('Paws the Beat');
  } else {
    purr.pause();
    purrBtn.html('Purr Track')
  }
}

// Control piano with mouse
function mousePressed() {
  for (let k = 0; k < keys.length; k++) {
    if (keys[k].hitBox(mouseX, mouseY)) {
      // make the sounds play!
      catSounds[k].play();
    }
  }
}

// Control piano with keyboard
function keyPressed() {
  if (key === 'a' || key === 'm') {
    keys[0].jiggle();
    catSounds[0].play();
  }
  if (key === 'b' || key === 'n' || key === 'y') {
    keys[1].jiggle();
    catSounds[1].play();
  }
  if (key === 'c' || key === 'o') {
    keys[2].jiggle();
    catSounds[2].play();
  }
  if (key === 'd' || key === 'p') {
    keys[3].jiggle();
    catSounds[3].play();
  }
  if (key === 'e' || key === 'q') {
    keys[4].jiggle();
    catSounds[4].play();
  }
  if (key === 'f' || key === 'r' || key === 'z') {
    keys[5].jiggle();
    catSounds[5].play();
  }
  if (key === 'g' || key === 's') {
    keys[6].jiggle();
    catSounds[6].play();
  }
  if (key === 'h' || key === 't') {
    keys[7].jiggle();
    catSounds[7].play();
  }
  if (key === 'i' || key === 'u') {
    keys[8].jiggle();
    catSounds[8].play();
  }
  if (key === 'j' || key === 'v') {
    keys[9].jiggle();
    catSounds[9].play();
  }
  if (key === 'k' || key === 'w') {
    keys[10].jiggle();
    catSounds[10].play();
  }
  if (key === 'l' || key === 'x') {
    keys[11].jiggle();
    catSounds[11].play();
  }
  if (key === ' ') {
    togglePurr();
  }
}

// Make cat piano key class
class Key {
  constructor(x, y, pic) {
    this.x = x;
    this.y = y;
    this.width = 180;
    this.height = 180;
    this.pic = pic;
    this.show();
  }

  show() {
    image(this.pic, this.x, this.y);
  }

  // cat hitbox for mouse control
  hitBox(mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width &&
      mouseY >= this.y && mouseY <= this.y + this.height) {
      this.jiggle();
      return true;

    } else {
      return false;
    }
  }

  // add a visual component to confirm input
  jiggle() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
}
