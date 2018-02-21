var a=[]
var b=[]
var c=[]
var e=[];


function setup() {
  createCanvas(800, 800);
  colorMode(RGB)
	
	for(var circle=0; circle<=50; circle=circle+1){
		a[circle]=random(100,800)
		b[circle]=random(100,800)
		c[circle]=random(100,130)
		hue[circle]=random(50,190)
		saturation[circle]=random(40,80)
    e[circle] = 500;
	}
}

function draw() {
  background(0);
  for (circle=0;
       circle<=50;
       circle=circle+1){
		  fill(hue[circle], saturation[circle], 100);
  	ellipse(a[circle], b[circle], c[circle]);
     if (random() < 0.01) {
			c[circle] = random(100, 300);
		  
  }
      if (random() < 0.5) {
   		c[circle] = random(40, 80);
    	e[circle] = random(105,45)
    }
  
    if (random() < 0.5) {
    	c[circle] = random(90, 110);
    	e[circle] = 50;
    } 
  }
  
}
