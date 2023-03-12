var nom = "Matias Barraza";
var mai = "mati.bza@yahoo.com";
var celu = "(02346) - 304699";
var cumple = "30 años";
var imagen = "https://media.licdn.com/dms/image/C4D03AQGqpOxL3dnVNg/profile-displayphoto-shrink_800_800/0/1601344730371?e=2147483647&v=beta&t=riQ8fZSK-6WIsMxgqUyHH_Dw7f8-vzZEeRZT8mGA2nc"


async function consultar() {
var resultado = await fetch("https://randomuser.me/api/")
				.then( response => response.json() )
				.then( data => data )
			console.log( resultado )
			imagen = resultado.results[0].picture.large;
			mai = resultado.results[0].email;
			nom = resultado.results[0].name.first;
			nom = nom + " " + resultado.results[0].name.last;
			celu = resultado.results[0].phone;
			cumple = resultado.results[0].dob.age + " años";
				mail();
				telefono();
				cumpleanios();
				cargar_imagen();
				nombre();
}

function cargar_datos() {
	consultar();
	var lk = document.getElementById("linkedin");
	var lk2 = document.getElementById("btinfo");
	lk.style.display = "none";
	lk2.style.display = "none";
}

function nombre() {
	document.getElementById("sub01").innerHTML = "Mi nombre es:";
	document.getElementById("sub0").innerHTML = nom;
}
function mail() {
	document.getElementById("sub01").innerHTML = "Mi direccion e-mail es:";
	document.getElementById("sub0").innerHTML = mai;
}
function telefono() {
	document.getElementById("sub01").innerHTML = "Mi numero es:";
	document.getElementById("sub0").innerHTML = celu;
}
function cumpleanios() {
	document.getElementById("sub01").innerHTML = "Mi edad es:";
	document.getElementById("sub0").innerHTML = cumple;
}
function cargar_imagen() {
	var x = document.getElementById("foto").src = imagen;
}
function info() {
	var inf = document.getElementById("inf");
	inf.style.opacity = "100%";
}
function aceptar() {
	var inf = document.getElementById("inf");
	inf.style.opacity = "0%";
}