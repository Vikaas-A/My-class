function add(){
	var A1 = parseInt(document.getElementById("a1").value);
	var A2 = parseInt(document.getElementById("a2").value);
	var A3 = A1+A2;
	document.getElementById("Add").textContent = A3;
}
function sub(){
	var A1 = parseInt(document.getElementById("s1").value);
	var A2 = parseInt(document.getElementById("s2").value);
	var A3 = A1-A2;
	document.getElementById("Sub").textContent = A3;
}
function mul(){
	var A1 = parseInt(document.getElementById("m1").value);
	var A2 = parseInt(document.getElementById("m2").value);
	var A3 = A1*A2;
	document.getElementById("Mul").textContent = A3;
}
function div(){
	var A1 = parseInt(document.getElementById("d1").value);
	var A2 = parseInt(document.getElementById("d2").value);
	var A3 = A1/A2;
	document.getElementById("Div").textContent = A3;
}
