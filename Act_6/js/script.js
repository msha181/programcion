function operacion() {
	let numero;

	numero = parseInt(document.getElementById("numero").value);
	
	if (numero % 2){
		document.getElementById("operar").innerHTML = "El número es impar";
	}
	else{
		document.getElementById("operar").innerHTML = "El número es par";
	}
}