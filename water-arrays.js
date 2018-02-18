var x = [];
var y = [];

x[0] = 150;
y[0] = 220;

x[1] = 150;
y[1] = 220;

x[2] = 150;
y[2] = 220;

x[4] = 150;
y[4] = 220;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x[4], 20);
  
  // draw drip
ellipse(x[0], y[0], 10);  

  y[0] = y[0] + 3;

  ellipse(x[1], y[1], 10);

  y[1] = y[1] + 5;

  ellipse(x[2], y[2], 10);  

  y[2] = y[2] + 4;
  
  // if invisible for a full “height” amount…
   if (y[0] > height){
    // reset
    y[0] = 220;
    y[1] = 220;
    y[2] = 220;
  }
}
