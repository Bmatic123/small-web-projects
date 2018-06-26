var rows, cols, width, height;

rows = 23;
cols = 50;
width = height = 20;

var table = document.querySelector("table");
var start = document.querySelector(".start");
var stop = document.querySelector(".stop");

table.innerHTML = "";

for(var i =0;i<rows;i++)
{
	var row = "<tr>\n";
	for(var j =0;j<cols;j++)
	{
		row += "<td></td> ";
	}
	row+="\n</tr>";
	table.innerHTML += row;
}

var r = document.querySelectorAll("tr");
var t = [];

r.forEach(function(row){
	t.push(row.querySelectorAll("td"));
});

window.grid = []

for(var i =0;i<rows;i++)
{
	grid.push([]);
	for(var j=0;j<cols;j++)
	{
		grid[i][j] = 0;
	}
}


for(var i =0;i<rows;i++)
{
	for(var j=0;j<cols;j++)
	{
		t[i][j].i = i;
		t[i][j].j = j;
		t[i][j].style.height = height+"px";
		t[i][j].style.width = width+"px";
		t[i][j].style.border = "1px solid black";
		t[i][j].addEventListener("click",function(){
				this.style.background = "#000";
				grid[this.i][this.j] = 1;
		});
	}
}


var I;
start.addEventListener("click",function(){
	I = setInterval(function(){
		var temp = []

		for(var i =0;i<rows;i++)
		{
			temp.push([]);
			for(j=0;j<cols;j++)
			{
				temp[i][j] = 0;
			}
		}

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

		for(i=0;i<rows;i++)
		{	
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

				if(grid[i][j] == 1)
				{
					t[i][j].style.background = "#000";
				}
				else
				{
					t[i][j].style.background = "#fff";
				}
			}
		}
	}, 100)	
});

stop.addEventListener("click", function(){
	clearInterval(I);
	for(var i =0;i<rows;i++)
	{
		for(var j=0;j<cols;j++)
		{
			grid[i][j] = 0;
			t[i][j].style.background = "#fff";
		}
	}
});