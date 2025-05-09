/***********************************************************
 * Created by Arden Roddie for MCAD Programming for the Web
 * *****************Spring Semester 2025********************
 ***********************************************************/

//******************
// Global Variables
// ************** */
// Sprites
let dot;
let walls;
let star;
let instruct;

// Movement
let pressedKeys = [];

// Win State
let restart;
let secret;

// Styles
let sansSerif;
let serif;
let bgColor = '#040720';
let accentColor = 'goldenrod';
let textColor = 'lavenderblush'

//****************
// Canvas Setup
// ************ */
function preload() {
  sansSerif = loadFont('./fonts/Raleway.ttf');
  serif = loadFont('./fonts/Tagesschrift.ttf');
}

function setup() {
    let maze = createCanvas(800, 800);
    maze.parent('mazeHolder')
    makeDot();
    makeStar();
    drawMaze();
    instructions();
}

function draw() {
    background(bgColor);
    move();
    winCondition();
  }

  function instructions(){
    noStroke();
    textFont(sansSerif);
    instruct = new Sprite(400, 50, 180, 0, STATIC);
    instruct.text = 'use WASD keys to move';
    instruct.textSize = 16;
    instruct.textColor = textColor;
    instruct.color = bgColor;
  }

//*********************************
// Dot Creation and Management 
// ********************************/
function makeDot() {
    strokeWeight(10); // offsets the dot to make collisions appear better
    dot = new Sprite(750, 625, 30);
    dot.color = textColor;
    dot.stroke = bgColor; // makes stroke blend in with the background
}

//** I've chosen to use this method of movement rather than 
// p5play's integrated keyboard controls because this allows 
// for multiple keys to be read at once, which creates a 
// smoother movement in my opinion */
function keyPressed() {
    pressedKeys[key] = true;
  }
  
  function keyReleased() {
    delete pressedKeys[key];
  }

function move() {
    let speed = 4
    let walk = createVector(0,0);

    // allow for WASD to control movement
      if(pressedKeys.w || pressedKeys.up) {
        walk.y += -1;
      }
      if(pressedKeys.a) {
        walk.x += -1;
      }
      if(pressedKeys.s) {
        walk.y += 1;
      }
      if (pressedKeys.d) {
        walk.x += 1;
      }
      walk.setMag(speed);
      dot.x += walk.x;
      dot.y += walk.y;      
}

//*****************
// Game Functions 
// ****************/

function makeStar() {
    star = new Sprite(400, 400, [3, -72, 3, 144, 5]);
    star.color = accentColor;
}

function winCondition() {
    if (dot.overlaps(star)) {
        star.remove();
        instruct.remove();
        fill(accentColor);
        textSize(72);
        textFont(serif);
        text('You Win!', 200, 80);
        restart = createButton('Play Again?');
        restart.position(550, 40);
        restart.parent('mazeHolder'); // makes button position relative to the canvas instead of the webpage
        restart.mousePressed(replay);
        textSize(20);
        secret = createA('./original-maze/', '🗝️', '_blank'); // creates sneaky link to my first maze attempt
        secret.position(100, 50);
        secret.parent('mazeHolder'); // makes link position relative to the canvas instead of the webpage
        noLoop();
    }
}

function replay() {
    dot.remove();
    restart.hide();
    setup();
    loop();
}

//*******************
// Maze Structure 
// *****************/
function drawMaze() {
    walls = new Group();
    walls.stroke = 'lightsteelblue';
    walls.strokeWeight = 10;
    walls.collider = STATIC;
    // Canvas borders [0]
        new walls.Sprite(-5, -5, [[810, 0], [0, 810], [-810, 0], [0, -799]]);

        // Outer Borders
            //[1]
            new walls.Sprite(725, 600, [[-25, 0], [0, -500], [-600, 0], [0, 600], [600, 0], [0, -50], [25, 0]]); 
        // End outer borders
        // Inner maze walls
            // starting A1 - F1
            //[2]
            new walls.Sprite(150, 150, [[0, 150], [100, 0], [0, 350], [-100, 0]]);
            //[3]
            new walls.Sprite(200, 150, [[0, 50], [100, 0], [0, -100]]);
            //[4]
            new walls.Sprite(250, 100, [[0, 50]]);
            //[5]
            new walls.Sprite(400, 150, [[-50, 0], [0, 100]]);
            //[6]
            new walls.Sprite(450, 150, [[0, 50]]);
            //[7]
            new walls.Sprite(500, 100, [[0, 50], [50, 0], [0, 50]]);
            //[8]
            new walls.Sprite(650, 150, [[-50, 0], [0, 100]]);
            //[9]
            new walls.Sprite(650, 200, [[50, 0]]);
            // starting A2 - F2
            //[10]
            new walls.Sprite(200, 250, [[0, 50]]);
            //[11]
            new walls.Sprite(250, 200, [[0, 50], [200, 0]]);
            //[12]
            new walls.Sprite(300, 250, [[0, 250], [200, 0], [0, -300], [-100, 0]]);
            //[13]
            new walls.Sprite(500, 250, [[150, 0]]);
            // starting A3 - F3
            //[14]
            new walls.Sprite(100, 350, [[100, 0]]);
            //[15]
            new walls.Sprite(425, 350, [[25, 0], [0, 100], [-100, 0], [0, -100], [25, 0], [0, -50], [125, 0]]); //center box
            //[16]
            new walls.Sprite(550, 350, [[0, -50], [150, 0]]);
            // starting A4 - F4
            //[17]
            new walls.Sprite(150, 350, [[0, 50]]);
            //[18]
            new walls.Sprite(150, 450, [[50, 0], [0, 50], [50, 0]]);
            //[19]
            new walls.Sprite(200, 400, [[50, 0]]);
            //[20]
            new walls.Sprite(550, 400, [[50, 0], [0, -50], [50, 0], [0, 150], [-50, 0], [0, -50], [-100, 0]]);
            // starting A5 - F5
            //[21]
            new walls.Sprite(100, 500, [[50, 0], [0, 100]]);
            //[22]
            new walls.Sprite(150, 550, [[50, 0]]);
            //[23]
            new walls.Sprite(250, 550, [[450, 0]]);
            //[24]
            new walls.Sprite(350, 550, [[0, 100]]);
            //[25]
            new walls.Sprite(500, 550, [[0, 100]]);
            //[26]
            new walls.Sprite(550, 500, [[0, 50]]);
            //[27]
            new walls.Sprite(650, 550, [[0, 100]]);
            // starting A6 - F6
            //[28]
            new walls.Sprite(200, 600, [[50, 0]]);
            //[29]
            new walls.Sprite(300, 600, [[0, 100]]);
            //[30]
            new walls.Sprite(450, 600, [[-50, 0], [0, 100]]);
            //[31]
            new walls.Sprite(450, 650, [[100, 0], [0, -50]]);
            //[32]
            new walls.Sprite(600, 600, [[0, 100]]);
        // End Maze
}
