var a=[];
var b=[];
var c=[];
var xspeed=[];
var yspeed=[];


function setup() {
  createCanvas(600, 600);
	
	for(square=0;square<=100;square=square+1){
		a[square]= random(0,600)
		b[square]= random(0,600)
		c[square] = random(1,0.4)
		xspeed[square] = random (1,2)
		yspeed[square] = random(0.1,0.1)
  }
}
  
function draw() {
  background(255,105,180);
  noStroke();

	for(square=0;square<=100;square=square+1){
		
		push()
		fill(b[square]);
		translate(a[square],b[square])
		rotate(c[square])
		rect(5, 10, 40, 50);
		b[square]=b[square]-xspeed[square]
		c[square] = c[square] + yspeed[square]
		pop()
		
			if (b[square] < -100) {
				b[square]= random(40,600);
			}
	}
}
