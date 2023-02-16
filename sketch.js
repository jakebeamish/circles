
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  circles.push(new Circle(width/2, height/2))
}

function draw() {

  for (c of circles) {
    c.show();
  }

  let n = createVector(random(width), random(height));

  let overlapping = false;

  for (c of circles) {
    let d = c.pos.dist(n);
    if (d < c.rad * 2) {
      overlapping = true;
      break;
    }
  }
  let x = n.dist(createVector(width/2, height/2));
  if (!overlapping && x < 200) circles.push(new Circle(n.x, n.y));

}

class Circle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.rad = 15;
  }

  show() {
    circle(this.pos.x, this.pos.y, this.rad * 2)
  }
}
