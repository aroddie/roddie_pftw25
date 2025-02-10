let heading;
let button;
let input;
let message = 'type something to change me';

function sayMessage() {
  message = input.value();
  input.value('');
}

function setup() {
  createCanvas(800, 600);
  
  heading = createElement('h2', ['Howdy']);
  heading.position(100, 200);
  button = createButton('alert message');
  button.size(100, 25);
  button.position(100, 275);
  button.mousePressed(sayMessage);
  input = createInput('');
  input.position(100, 250);
}

function draw() {
  background('lightblue');
  textSize(28);
  fill('purple');
  text(message, 100, 400);
}
