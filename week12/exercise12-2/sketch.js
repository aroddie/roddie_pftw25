// variables for all sounds and buttons
let pop;
let popBtn;
let ding;
let dingBtn;
let quack;
let quackBtn;
let yay;
let yayBtn;
let loser;
let loserBtn;
let honey;
let honeyBtn;
let fine;
let fineBtn;

function preload() {
  pop = loadSound("./sounds/pop.mp3");
  ding = loadSound("./sounds/ding.mp3");
  quack = loadSound("./sounds/quack.mp3");
  yay = loadSound("./sounds/yay.mp3");
  loser = loadSound("./sounds/loser.mp3");
  honey = loadSound("./sounds/honey.mp3");
  fine = loadSound("./sounds/fine.mp3");
}

function setup() {
  createCanvas(800, 600);
  background(35);
  popBtn = createButton("pop")
  popBtn.mousePressed(togglePop);
  dingBtn = createButton("ding");
  dingBtn.mousePressed(toggleDing);
  quackBtn = createButton("quack");
  quackBtn.mousePressed(toggleQuack);
  yayBtn = createButton("yay");
  yayBtn.mousePressed(toggleYay);
  loserBtn = createButton("womp womp")
  loserBtn.mousePressed(toggleLoser);
  loser.addCue(2, trombone); // delays visual appearence in loser audio
  loser.addCue(5, loserBtnReset); // resets loser button txt when sound is over
  honeyBtn = createButton("oh honey")
  honeyBtn.mousePressed(toggleHoney);
  honey.addCue(1.5, storm); // delays storm visual in honey audio
  honey.addCue(3.2, honeyBtnReset); // resets honey button txt when sound is over
  fineBtn = createButton("i'm fine")
  fineBtn.mousePressed(toggleFine);
  fine.addCue(6, fineBtnReset); // resets fine button txt when sound is over
}
// pop functions
function togglePop() {
  pop.play();
  noStroke();
  fill(random(255), random(255), random(255));
  circle(random(800), random(600), random(10, 100));
}

// ding functions
function toggleDing() {
  ding.play();
  ding.setVolume(0.5);
  textSize(random(20, 150));
  text('🛎️', random(-100,750), random(650));
}

// quack functions
function toggleQuack() {
  quack.play();
  quack.setVolume(0.2);
  textSize(random(20, 150));
  text('🦆', random(-100, 750), random(650));
}

// yay functions
function toggleYay() {
  yay.play();
  yay.jump(1);
  yay.setVolume(0.2);
  textSize(random(20, 150));
  text('🥳', random(-50, 750), random(650));
}

// loser functions
function toggleLoser() {
  if (!loser.isPlaying()) {
    loser.play();
    loser.setVolume(0.2);
    loserBtn.html("stop womp");
  } else {
    loser.stop();
    loserBtn.html("womp womp");
  }
}
function trombone() {
  textSize (random(100, 200));
  text('🎺', random(-50, 700), random(600));
}
function loserBtnReset() {
  loserBtn.html("womp womp");
}

// honey functions
function toggleHoney() {
  if (!honey.isPlaying()) {
    honey.play();
    honey.setVolume(0.3);
    honeyBtn.html("stop the storm");
    honeyPot();
  } else {
    honey.stop();
    honeyBtn.html("oh honey");
  }
}
function honeyPot() {
  textSize (random(20, 150));
  text('🍯', random(-100, 750), random(650));
}
function storm() {
  textSize (random(150, 250));
  text('🌩️', random(-50, 650), random(75,300));
}
function honeyBtnReset() {
  honey.stop();
  honeyBtn.html("oh honey");
}

// fine functions
function toggleFine() {
  if (!fine.isPlaying()) {
    fine.play();
    fine.setVolume(0.3);
    fineBtn.html("stop getting into it");
    notFine();
  } else {
    fine.stop();
    fineBtn.html("i'm fine");
  }
}
function notFine() {
  let size = random(20,150);
  let x = random(-50, 700);
  let y = random(50, 650);
  textSize(size);
  text('🥲', x, y);
  textSize(size * 1.5);
  text('🌧️', x, y - size);
}
function fineBtnReset() {
  fineBtn.html("i'm fine");
}