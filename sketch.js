

function setup() {
  createCanvas(400, 400);
  background(130);

}

function draw() {
  
  console.log(mouseX + ", " + mouseY);

  
  let x = map(mouseX, 0, width, 0, 255);
  background(x,50,100);
 
 
  fill(220)
  stroke(0)
  beginShape(); 
  vertex(22,100); 
  quadraticVertex(26,55,60,90);
  endShape();
  
    if (mouseIsPressed === true) { 
  background(225,7,0)    
  fill(130)
  stroke(0)
  beginShape(); 
  vertex(22,100); 
  quadraticVertex(26,55,60,90);
  endShape();
  }
  
  else if (mouseX > 50)
  {
  fill(225,7,0)
  stroke(0)
  beginShape(); 
  vertex(22,100); 
  quadraticVertex(26,55,60,90);
  endShape();
    
  }
  
  fill(0,128,0)
  noStroke(0)
  beginShape(); 
  vertex(1,200); 
  quadraticVertex(5,1,152,140);
  quadraticVertex(100,153,152,140);
  quadraticVertex(85,253,121,390);
  quadraticVertex(0,400,0,400);
  endShape(); 
  
  stroke(0)
  noFill()
  arc(76, 140, 150, 10, 0, HALF_PI);
  
  
  fill(220)
  stroke(1)
  beginShape(); 
  vertex(67,100); 
  quadraticVertex(89,60,110,110);
  endShape();
  
  if (mouseIsPressed === true) {
  fill(130)
  stroke(1)
  beginShape(); 
  vertex(67,100); 
  quadraticVertex(89,60,110,110);
  endShape();}
  
  else if (mouseX > 200)
  {
  fill(0,0,255)
  stroke(1)
  beginShape(); 
  vertex(67,100); 
  quadraticVertex(89,60,110,110);
  endShape();
  }
  
  
  fill(0)
  noStroke(0)
  beginShape(); 
  vertex(390,160); 
  quadraticVertex(350,-50,230,160);
  quadraticVertex(280,500,370,360);
  endShape();

  
  fill(0,128,0)
  noStroke(0)
  beginShape(); 
  vertex(380,200); 
  quadraticVertex(330,0,250,160);
  quadraticVertex(280,380,360,280);
  endShape();
  
  stroke(0)
  noFill()
  arc(251, 150, 220, 20, 0, HALF_PI);
  

}

  
