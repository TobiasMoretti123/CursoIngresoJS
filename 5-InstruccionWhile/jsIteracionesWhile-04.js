/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt (numeroIngresado);
	
	while (numeroIngresado<0 || numeroIngresado>9 || isNaN(numeroIngresado)) 
	{
		alert ("Debe ser un numero entre el 0 y el 9");
		numeroIngresado = prompt ("ingrese un número entre 0 y 9.");
		if (numeroIngresado>-1 && numeroIngresado<10) 
		{
			txtIdNumero.value = numeroIngresado;
		}
	}
	txtIdNumero.value = numeroIngresado;
}
