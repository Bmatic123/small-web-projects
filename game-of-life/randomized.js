var canvas = document.querySelector("canvas");

var c = canvas.getContext("2d");

window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas()
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

resizeCanvas();

//Makes Empty Grid
function make2DArray(row,col)
{
	var tempgrid = new Array(row);
	for(i = 0;i<tempgrid.length;i++)
	{
		tempgrid[i] = new Array(col)
		for(j = 0;j<col;j++)
		{
			tempgrid[i][j] = 0;
		}
	}
	return tempgrid;
}

var rows, cols, width, height;

rows = cols = 20;
width = height = 30;
var grid = make2DArray(rows,cols);

var x, y;
x = y = 0;

//Initial Grid
for(i=0;i<rows;i++)
{
	y = 0;
	for(j=0;j<cols;j++)
	{
		var n = Math.floor(Math.random()*10);
		c.beginPath();
		c.strokeRect(x,y,width-3,height-3);
		if(n<3)
		{
			c.fillRect(x,y,width-3,height-3);
			grid[i][j] = 1;
		}
		else
		{
			grid[i][j] = 0;
		}
		c.closePath();
		y+= width;
	}
	x+=height;
}	

//Update grid periodically
I = setInterval(function(){

	var temp = make2DArray(rows, cols);

	// Counter neighbours
	for(i=0;i<rows;i++)
	{
		for(j=0;j<cols;j++)
		{
			for(a = -1;a<2;a++)
			{
				for(b=-1;b<2;b++)
				{
					try
					{
						if(grid[i+a][j+b] != null)
						{
							temp[i][j] += grid[i+a][j+b];
							}		
						}
						catch(err)
						{
							continue;
						}
					}
				}
			temp[i][j] -= grid[i][j];
		}
	}	

	x = 0;
	y = 0;

	c.clearRect(0,0,canvas.width, canvas.height);
	for(i=0;i<rows;i++)
	{	
		y = 0;
		for(j=0;j<cols;j++)
		{
			if(grid[i][j] == 1)
			{
				if(temp[i][j] == 2 || temp[i][j] == 3)
				{
					grid[i][j] = 1;
				}
				else
				{
					grid[i][j] = 0;
				}
			}
			else
			{
				if(temp[i][j] == 3)
				{
					grid[i][j] = 1;
				}
			}
			c.beginPath();
			c.strokeRect(x,y,width-3,height-3);
			if(grid[i][j] == 1)
			{
				c.fillRect(x,y,width-3,height-3);
			}
			c.closePath();
			y+= width;
		}
		x+=height;
	}
}, 1000);








