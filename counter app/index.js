let count = 0;
let save = document.getElementById("save");


function clicked() {
	count = count + 1;
	document.getElementById("count").innerHTML = count;
}

function saved() {
	
	
	let both = count + " - ";
	save.textContent += both 
	document.getElementById("count").textContent = 0;
	count = 0;
	


}
