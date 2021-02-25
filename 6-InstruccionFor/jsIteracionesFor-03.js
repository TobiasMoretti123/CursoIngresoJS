/*al presionar el botón pedir la cantidad de 
veces que quiero repetir el mensaje "Hola UTN FRA"*/
function mostrar()
{
	var repeticiones;

	repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones = parseInt(repeticiones);
	
	for(var i=0;i<repeticiones;i++)
	{
		alert ("Hola UTN FRA");
	}
}