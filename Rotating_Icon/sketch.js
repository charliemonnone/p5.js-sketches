let speed = 1;
let n = 0.01;
let flip = true;
let m = 1;
let lineDraw = 60;

function setup() {
  // noLoop();
  createCanvas(500, 500);
  strokeWeight(1.2)
  stroke(60,50,50);
  
}

function draw() {
  if(lineDraw >= 90) {lineDraw = 60}
  if(n > -11 && flip) {
    n -= 0.08
    if(n <= -10.5) {n = 0.01}
  }
  background(255,240,220);
  
  ellipseMode(CENTER);
  rectMode(CENTER)
  translate(width / 2, height / 2);
  
  translate(0, 0.3 * sin(n));
  
  noFill();
  ellipse(0,0,100,100);
  fill(60,50,50);
  ellipse(0,0, 30 + sin(m), 30 + 3*cos(m));
  
  rotate(PI / -4.0);
  rotate(2.5*speed);
  
  noFill();
  rect(0,0,100,100);
  push();
  stroke(60,50,50,255*sin(0.6*n))
  line(-60,-60,-lineDraw,-lineDraw );
  line(60,60,lineDraw ,lineDraw );
  pop();
  
  fill(60,50,50);
  translate(0, 0.9 * sin(m));
  triangle(-30,-60,0,-90,30,-60);
  translate(0, 1.2 * cos(m));
  triangle(-30,60,0,90,30,60);
  
  
  speed = exp(n);
  m +=0.05;
  lineDraw = map(speed, 0, speed, 60, 70);
  // lineDraw += 10 * speed;
   
}

function quadratic() {
  for(var i = 0; i < 100; i += 0.000005) {
    speed = pow();
  }
  
  }