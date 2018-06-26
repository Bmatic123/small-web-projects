let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth*0.99;
canvas.height = window.innerHeight*0.99;

let c = canvas.getContext("2d");

let colourArray = ["#333333", "#FF0F0F", "#666666", "#000000", "#D87500"];

function CircleConstructor()
{
	this.origRadius = (0.5+Math.random())*15;
	this.radius = this.origRadius;
	this.x = this.radius+Math.random()*(canvas.width-this.radius*2);
	this.y = this.radius+Math.random()*(canvas.height-this.radius*2);
	this.dx = 1.2+5*(Math.random()-0.2);
	this.dy = 1.2+5*(Math.random()-0.2);

	// If colour needs to be completely random 
	// If a darker shade is preferred, remove the +50 part.
	// this.colour = "rgba("+(50+Math.random()*256)+","+(50+Math.random()*256)+","+(50+Math.random()*256)+",0.9)";

	// Colour randomly chosen from a predefined set
	this.colour = colourArray[Math.floor(Math.random()*(colourArray.length))];
	console.log(this.colour);

	this.draw = function(){
		c.beginPath();

		c.fillStyle = this.colour;
		c.strokeStyle = this.colour;

		c.arc(this.x, this.y, this.radius, 0, Math.PI*2,false);
		c.stroke();
		c.fill();
	};

	this.update = function(){
		this.x += this.dx
		this.y += this.dy;
		if(this.x+this.radius>canvas.width || this.x - this.radius < 0)
		{
			this.dx = -this.dx;
		}
		if(this.y+this.radius>canvas.height || this.y - this.radius < 0)
		{
			this.dy = -this.dy;
		}
		if(Math.abs(this.x - mouse.x) < 75 &&  Math.abs(this.y-mouse.y)<75)
		{
			if(this.radius < this.origRadius*6)
			{
				this.radius += 2;
			}
		}
		else
		{
			if(this.radius > this.origRadius)
			{
				this.radius -= 2;
			}
		}
	};

}

function animate()
{
	requestAnimationFrame(animate);

	c.clearRect(0,0,canvas.width,canvas.height);
	circles.forEach(function(circle){
		circle.draw();
		circle.update();
	});
}


let mouse = {
	x: undefined,
	y: undefined
}

window.addEventListener("mousemove", function(event){
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

let circles = [];

for(let i = 0;i<150;i++)
{
	let newCircle = new CircleConstructor();
	circles.push(newCircle);
}

animate();
