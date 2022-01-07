let num1 = 8;
let num2 = 2;

document.getElementById("num1").innerHTML = num1;

document.getElementById("num2").innerHTML = num2;

let sum = document.getElementById("sum")

add = () => {

	let result = num1 + num2
	sum.innerHTML = "Sum: " + result

}

subtract = () => {

	let result = num1 - num2
	sum.innerHTML = "Sum: " + result


}


multiply = () => {

	let result = num1 * num2
	sum.innerHTML =  "Sum: " +result


}


divide = () => {

	let result = num1 / num2
	sum.innerHTML ="Sum: " + result


}



