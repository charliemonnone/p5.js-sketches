let n = 0.01;
let timing_counter = 0;
function setup() {
  stroke(60,50,50);
  strokeWeight(1.2);
  createCanvas(500, 500);
  noFill();
}

function draw() {
  if(timing_counter >= 50) {
    timing_counter = 0;
  }
  xend_point = map(timing_counter, 0, 50, -5, 80);
  yend_point = map(timing_counter, 0, 50, -90, -15);
  end_transp = map(timing_counter, 0, 50, 255, 0);
  translate(width /2 , height / 2);
  background(255,240,220);
  
  push();
  fill(60,50,50)
  translate(0, 3*sin(0.3*n));
  triangle(-100,-10, -20, 200,-20,-60);
  pop();
  
  push();
  fill(60,50,50)
  translate(0, 6*cos(0.2*n));
  triangle(80,0,-10,190,-10,-80);
  pop();
  
  push();
  fill(60,50,50)
  translate(0, -2*sin(0.4*n));
  triangle(-100,-20,-20,-130,-20,-70);
  pop();
  
  push();
  fill(60,50,50)
  translate(cos(0.2*n),0);
  triangle(-100,-30,-22,-140,-90,-60)
  pop();
  
  push();
  translate(0, 6*cos(0.2*n));
  // selection_anim(xend_point,yend_point, end_transp);
  pop();
  n += 0.1;
  timing_counter += 0.4;
  
}

function selection_anim(xend_point,yend_point, end_transp) {
//   wwhat if the lines cut across the top of the right side instead of above it? color: 230,220,200
  stroke(40,30,30,end_transp);
  for(var i = 0; i < 3; i ++) {
    line(-5,-90-(i * 10),xend_point,yend_point-(i * 10));
  }
  
  
}