let n = 1;
let m = 1;
function setup() {
  createCanvas(500, 500);
  

}

function draw() {
  translate(width/2, height / 2);
  background(255,240,230);
  // beginShape(LINES);
  // beginShape(TRIANGLE_STRIP);
  // beginShape(POINTS);
//   rotate(PI)
//   push()
//   beginShape();
//   rotate(PI/2.5)
//   drawShape(0)
//   endShape();
//   pop()
  
//   push()
//   beginShape();
//   rotate(PI/2)
//   drawShape(4)
//   endShape();
//   pop()
  
//   push()
//   beginShape();
//   rotate(PI/1.5)
//   drawShape(2)
//   endShape();
//   pop()
  
  
  for(var i = 1; i < 11; i ++) {
    
    push();
    translate(0, 10*sin(3*n))
    beginShape(TRIANGLE_STRIP);
    
    rotate(TWO_PI/(10/i));
    drawShape(i);
    endShape();
    pop();
  }
  n += 0.005;
  // n += 0.1;
  m += 0.001;
}

function drawShape(offset) {
  for(var i = 0; i < PI; i += 0.7) {
    // let y = 5*sin(2*n*i) * sin(i);
    // let y = sin(n) * 50 * sin(i) ;
    
    // fill(0,0,0,255*(2/i))
    // stroke(0,0,0,255*(1/i))
    fill(60,50,50);
    // noFill();
    // noStroke();
    stroke(60,50,50);
    let y = 50 * sin(n) * sin(i)
//     looks gross let y = 50 * sin(n) * sin(i)*noise(n)
    if(i % 0.2 <= 0.1) {
       
       // y = 50*cos(n)*sin(i)
      y = 20*cos(n) * sin(i)
    }
    
    
    // let z = sin(n) * 50 * sin(i)* noise(i);
    let x = i * 50;

    // rotate(PI/9.2)
    
    
    // vertex(y,x);
    vertex(x,y);
  }
}