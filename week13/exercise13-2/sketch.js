let pos;
let pos2;
let inc;
let inc2;
let size;
let sizeSlider;

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);

  pos = 0.0;
  inc = createSlider(1, 5, 1); //makes slider to control first sine wave

  pos2 = 0.0;
  inc2 = createSlider(1, 5, 2); // makes slider to control second sine wave

  size = 1.0;
  sizeSlider = createSlider(1, 5, 1) // makes slider to control size variation
}

function draw() {
  background(35, 35, 35, 75); // translucent background for motion blur effect

  // move canvas graph so 0,0 is in the center
  translate(width/2, height/2); 

  // make sine waves
  var sin1 = sin(pos);
  var sin2 = sin(pos2);
  var sin3 = sin(size)

  // amplify sine waves into more usable numbers
  let amplified = sin1 * 100;
  let amplified2 = sin2 * 50;
  let pointWeight = sin3 * 75;

  // make rings of points
  for (let z = 0; z <= 360; z += 5) {
    stroke('yellow');
    strokeWeight(pointWeight + 10);
    point (amplified2 * 3, amplified * 4);
    rotate(z)
  }
  for (let y = 0; y <= 360; y += 5) {
    stroke('magenta');
    strokeWeight(pointWeight + 10);
    point (amplified * 3, amplified2);
    rotate(y)
  }

  for (let x = 0; x <= 360; x += 5) {
    stroke('cyan');
    strokeWeight(pointWeight + 10);
    point (amplified, amplified2);
    rotate(x)
  }

  // creates the movement
  pos = pos + inc.value();
  pos2 = pos2 + inc2.value();
  size = size + sizeSlider.value();

}
