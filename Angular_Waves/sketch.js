let n = 0.1;

function setup() {
  createCanvas(500, 500);
  noFill();
  
}

function draw() {
  translate(0, height / 4);
  background(255,240,230);
  for(var i = 1; i < 10; i ++) {
    let xoff = i * 30;
    
    makeWave(xoff);
  }
  n += 0.009;
}

function makeWave(xoff){
  // beginShape(TRIANGLES);
  beginShape(TRIANGLE_STRIP);
  // beginShape();
  // beginShape(POINTS);
  step_size = 0.5;
  // step_size = 0.1;
  for(var i = 0; i < TWO_PI; i += step_size) {
//   try to find way to make verticies of greater y val move faster?
    // let x = cos(n * xoff/50) * 50 * sin(i) 
    let y = i * 50;
    let x = cos(n * 5*noise(i)) * 50 * sin(i* i/3) 
    // let x =  20 * sin(i* cos(2*n))
    
    vertex(x+xoff,y);
    }
  endShape(CLOSE);
}