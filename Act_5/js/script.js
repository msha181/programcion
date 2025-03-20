function operacion() {
	let numero1
	let numero2

	numero1 = parseInt(document.getElementById("numero1").value);
	numero2 = parseInt(document.getElementById("numero2").value);
	document.getElementById("operar").innerHTML = "La suma de los números es: " + (numero1 + numero2) + " <br> Su resta es: " + (numero1 - numero2) + " <br> Su multiplicación: " + (Math.round(numero1 * numero2)) + " <br> Su división: " + (Math.round(numero1 / numero2)) + " <br> Por último, su resto es: " + (Math.round(numero1 % numero2)) + "";
}