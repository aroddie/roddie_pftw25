// Prompt
let weather = window.prompt("Do you prefer sun or rain?").toLowerCase();
console.log(weather);

function setup() {
  // Creates a canvas 600 pixels wide and 400 pixels high.
  createCanvas(600, 400);
}

function draw() {

//  if (mouseIsPressed === true) {
//   fill(0);
//  } else {
//   fill(255);
//  }


if (weather === "sun") {
 // sky blue background
  background(135, 206, 235);
// Sun
  fill("yellow"); //Makes the circle yellow
  stroke("orange"); //Makes the outline orange
  strokeWeight(20); // Makes the outline thicker
  circle(50, 50, 100);

  // Grass
  fill("green"); 
  stroke("black"); // Black outline
  strokeWeight(1); // outline thickness
  rect(0, 200, 600, 200);

  // emojis
  textSize(75);
  text("🌸", 250, 250);   //flower
  if (mouseIsPressed === true) {
    text("🐞", mouseX, mouseY);
  } else {
  text("🦋", mouseX, mouseY);  //butterfly
  }

} else {
  //Rainy Background
  background(113, 140, 142);
  // Rain
  textSize(200);
  text("🌦️", 0, 175);
  text("🌈", 375, 175);

  // Grass
  fill("DarkGreen"); 
  stroke("black"); // Black outline
  strokeWeight(1); // outline thickness
  rect(0, 200, 600, 200);
    
  // emojis
  textSize(75);
  text("🌸", 120, 250);   //flower
  text("🌹", 250, 300);
  text("🌷", 320, 250);
  if (mouseIsPressed === true) {
  text("☔", mouseX, mouseY);  //umbrella
  } else {
    text("☂️", mouseX, mouseY);
  }
}







}

