var numOfQuarters = 0, numOfDimes = 0, numOfNickels = 0, numOfPennies = 0;

var input = prompt("Enter moneys: ", 0);
console.log(input);

var output = document.getElementById("coins");

numOfQuarters = parseInt(input / .25);
input = input % .25;

numOfDimes = parseInt(input /.1);
input = input % .1;

numOfNickels = parseInt(input / .05);
input = input % .05;

numOfPennies = parseInt(input / .01);

output.innerHTML = "Quarters: " + numOfQuarters + "<br>"
				 + "Dimes: " + numOfDimes + "<br>" 
				 + "Nickels: " + numOfNickels + "<br>" 
				 + "Pennies: " + numOfPennies;