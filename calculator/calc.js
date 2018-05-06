var prev, op, eq;
prev = 0;
op = null;
eq = false;

var numbers = document.querySelectorAll(".number");
var operators = document.querySelectorAll(".operator");
var input = document.querySelector("input");
var equals = document.querySelector("#equal");
var reset = document.querySelector("#reset");

for(var i = 0; i<numbers.length;i++){
	numbers[i].addEventListener("click", function(){
		if(op == null && eq === false){
			prev = 0;
			input.value = input.value+this.textContent;
		}
		else if(op == null && eq ===true){
		 	input.value = this.textContent;
		 	eq = false;
		}
		else{
			input.value = input.value+this.textContent;
		}
	});
}

for(var i =0;i<operators.length;i++)
{
	operators[i].addEventListener("click", function(){
		prev = Number(input.value);
		input.value = "";
		op = this.textContent;
		eq = false;
	});
}

reset.addEventListener("click",function(){
	prev = 0;
	op = null;
	eq = false;
	input.value = "";
});

equals.addEventListener("click", function(){
	switch(op){
		case null:
			prev = 0;
			break;
		case "+":
			prev = prev + Number(input.value);
			input.value = prev.toFixed(5);
			op = null;
			break;
		case "-":
			prev = prev - Number(input.value);
			input.value = prev.toFixed(5);
			op = null;
			break;
		case "x":
			prev = prev * Number(input.value);
			input.value = prev.toFixed(5);
			op = null;
			break;
		case "/":
			if(Number(input.value) === 0){
				prev = 0;
				op = null
				input.value ="";
				alert("Dividing by zero is not allowed.");
			}
			else{
				prev = prev/Number(input.value);
				input.value = prev.toFixed("5");
				op = null;
				break;
			}
	}
	eq = true;
});