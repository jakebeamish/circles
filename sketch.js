
let circles = [];
let attempts = 0;

let r;
let s;
let radius;

function setup() {
    radius = random(2, 20)
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background('gainsboro');
  fill('white');
  // stroke(255);
  smooth();
  noStroke();
  circles.push(new Circle(width/2, height/2, radius));
  r = random();
  s = random(0.0001, 0.1);

  console.log(s)
}

function draw() {

  for (c of circles) {
    let z = noise(c.pos.x * s, c.pos.y * s);
    let y = noise(1 + c.pos.x * s, 1 + c.pos.y * s);
    fill(r * 360, z * 100, y * 100, 1)
    c.show();
  }

  for (let i = 0; i < 1000; i++) {
  // let n = createVector(random(width), random(height));
  let n = new Circle(random(width), random(height), radius);

  let overlapping = false;

  for (c of circles) {
    let d = c.pos.dist(n.pos);
    if (d <= c.rad + n.rad + 3) {
      overlapping = true;
      attempts++;
      break;
    }
  }
  let x = n.pos.dist(createVector(width/2, height/2));
  if (!overlapping && x < (width + height) * 0.15) {
     circles.push(new Circle(n.pos.x, n.pos.y, n.rad));
     // console.log(circles.length);
  }
  // console.log(attempts);

  if (attempts > 100000) {
    noLoop();
    console.log(circles.length);
  }
}
}

class Circle {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.rad = r;
  }

  show() {
    circle(this.pos.x, this.pos.y, this.rad * 2)
  }
}
