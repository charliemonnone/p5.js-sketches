let rot = 0;
let timer = 0;
let n = 0.01;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  translate(width / 2, height / 2);
  background(250,240,230);
  let x = map(rot,0,1,0,PI);
  push();
  rotate(x);
  line(0,0,50,50);
  pop();
  push();
  rotate(-x/2);
  line(0,0,50,-50);
  pop();
  push();
  rotate(x*2);
  line(0,0,-50,-50);
  pop();
  push();
  rotate(x/4*2);
  line(0,0,-50,50);
  pop();
  if(rot < 1) rot += 0.02;
  timer += 0.1;
  if(timer > 15) {
    rot = 0;
    timer = 0;
  } 
  n +=0.1;
  
}