function nombre() {
	document.getElementById("sub01").innerHTML = "Mi nombre es:";
	document.getElementById("sub0").innerHTML = "Matias Barraza";
}
function mail() {
	document.getElementById("sub01").innerHTML = "Mi direccion e-mail es:";
	document.getElementById("sub0").innerHTML = "mati.bza@yahoo.com";
}
function telefono() {
	document.getElementById("sub01").innerHTML = "Mi numero es:";
	document.getElementById("sub0").innerHTML = "(2346) - 304699";
}
function cumpleanios() {
	document.getElementById("sub01").innerHTML = "Mi cumpleaños es:";
	document.getElementById("sub0").innerHTML = " 13 Febrero 1993";
}
function info() {
	var inf = document.getElementById("inf");
	inf.style.opacity = "100%";
}
function aceptar() {
	var inf = document.getElementById("inf");
	inf.style.opacity = "0%";
}