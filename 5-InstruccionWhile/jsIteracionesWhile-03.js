/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var clave;
	var claveIngresada;

	clave = "utn750"
	claveIngresada = prompt ("Ingrese una clave");

	while (claveIngresada != clave) 
	{
		alert ("La clave es incorrecta");
		claveIngresada = prompt ("Ingrese una clave");
		claveIngresada == clave;
	}
	alert ("Ingreso la clave correctamente");
}