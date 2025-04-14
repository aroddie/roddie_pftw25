// The concept of flocking simulations was originally created by Craig Reynolds: https://red3d.com/cwr/boids/
// This project was created with help from a tutorial by Patt Vira: https://www.youtube.com/watch?v=AMugNCfP1NA //

// Make bird array and determine number of birds
let birds =[];
let birdCount = 300;

function setup() {
    createCanvas(800, 600);
    for ( let i = 0; i < birdCount; i++) {
            // allows for randomized color per dot
    let randomColor = Math.ceil(Math.random() * birdColors.length - 1);
        birds.push(new Boid(random(width), random(height), birdColors[randomColor]));
    }
}

function draw() {
    background(25);
    for ( let bird of birds) {
        bird.show();
        bird.move();
        bird.flock(birds);
    }
    
}
// determines how close the birds start flocking together
let perceptionRadius = 30;

// Make the birdoids!
class Boid {
    constructor(x, y, color) {
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(-3, 3));
        this.acceleration = createVector(0, 0);
        this.maxSpeed = 3;
        this.maxForce = 0.2;
        this.color = color
    }

    show() {
        strokeWeight(3);
        stroke(this.color);
        point(this.position.x, this.position.y);
    }

    // Brings birds together
    alignment(birds) {
        let steering = createVector();
        let total = 0;

        for (let i = 0; i<birds.length; i++) {
            let distance = dist(this.position.x, this.position.y, birds[i].position.x, birds[i].position.y)
            if (birds[i] != this && distance < perceptionRadius) {
                steering.add(birds[i].velocity);
                total += 1;
            }
        }
        if (total > 0 ) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    // averages flock speed
    cohesion(birds) {
        let steering = createVector();
        let total = 0;

        for (let i = 0; i < birds.length; i++) {
            let distance = dist(this.position.x, this.position.y, birds[i].position.x, birds[i].position.y);
            if (birds[i] != this && distance < perceptionRadius) {
                steering.add(birds[i].position);
                total += 1;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    // Keeps birds from clumping too much
    separation(birds) {
        let steering = createVector();
        let total = 0;

        for (let i=0; i<birds.length; i++) {
            let distance = dist(this.position.x, this.position.y, birds[i].position.x, birds[i].position.y);
            if (birds[i] != this && distance < perceptionRadius) {
                let neighborVector = p5.Vector.sub(this.position, birds[i].position);
                neighborVector.div(distance * distance);
                steering.add(neighborVector);
                total += 1;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }

        return steering;
    }

    // puts all the flock variables together
    flock(birds) {
        let alignment = this.alignment(birds);
        let cohesion = this.cohesion(birds);
        let separation = this.separation(birds);

        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }

    // makes the flock move
    move() {
        this.loopWalls();
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.acceleration.mult(0);
    }

    // teleports the birds to the other side of the canvas when they leave
    loopWalls() {
        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }
        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }
}

// Pick Colors for birds
let birdColors = [
    'aliceblue', 'aquamarine', 'lightblue', 'lavender', 'lavenderblush', 'honeydew', 'blanchedalmond', 'peachpuff', 'mistyrose', 'thistle', 
  ];
