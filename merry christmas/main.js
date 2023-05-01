var font;
var particles = [];
var count = false;
var xPos = 400;
var bgColor = "#addaff";
var t1 = "Merry";
var t2 = "Christmas";
var t1YPos = 190;
var t2YPos = 390;
var particleSize = [2, 25];

function preload() {
  font = loadFont(
    "https://raw.githubusercontent.com/hemantparashar/images/merry-christmas/AvenirNextLTPro-Demi.otf"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgColor);
  textFont(font);

  if (windowWidth < 700) {
    textSize(100);
    t1YPos = 190;
    t2YPos = 300;
    particleSize = [6, 16];
  } else {
    textSize(162);
  }
  var space = windowWidth - textWidth(t2);
  xPos = space * 0.5;
  console.log({ space, xPos });
  colorText();

  var points = font.textToPoints(t1, xPos, t1YPos);
  points.forEach(p => {
    const particle = new Particle(p.x, p.y);
    particles.push(particle);
  });

  points = font.textToPoints(t2, xPos, t2YPos);
  points.forEach(p => {
    const particle = new Particle(p.x, p.y);
    particles.push(particle);
  });
}

function draw() {
  background(bgColor);
  colorText();
  particles.forEach(p => {
    p.behaviours(colorText);
    p.update();
    p.show();
  });
}

function colorText() {
  noStroke();
  fill("#e41c0d");
  text(t1, xPos, t1YPos);
  fill("#2e9c32");
  text(t2, xPos, t2YPos);
}

function Particle(x, y) {
  this.pos = createVector(width / 2, height);
  this.target = createVector(x, y);
  this.vel = createVector();
  this.acc = createVector();
  this.r = random(particleSize[0], particleSize[1]);
  this.maxSpeed = 10;
  this.maxForce = 1;
}

Particle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
};

Particle.prototype.show = function() {
  stroke("#fff");
  strokeWeight(this.r);
  point(this.pos.x, this.pos.y);
};

Particle.prototype.behaviours = function() {
  var arrive = this.arrive(this.target);
  var mouse = createVector(mouseX, mouseY);
  var flee = this.flee(mouse);

  arrive.mult(1);
  flee.mult(8);

  if (this.pos.y < 450) {
    this.applyForce(arrive);
    this.applyForce(flee);
  } else {
    this.applyForce(createVector(0, -1));
  }
};

Particle.prototype.applyForce = function(f) {
  this.acc.add(f);
};

Particle.prototype.arrive = function(target) {
  var desired = p5.Vector.sub(target, this.pos);

  var d = desired.mag();
  var speed = this.maxSpeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxSpeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxForce);
  return steer;
};

Particle.prototype.flee = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < 80) {
    desired.setMag(this.maxSpeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  } else {
    return createVector(0, 0);
  }
};
