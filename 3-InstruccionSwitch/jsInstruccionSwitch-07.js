/*Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde se encuentra 
Norte, Sur, Este u Oeste*/
function mostrar()
{
	var destinoIngresado; 
	
	destinoIngresado = txtIdDestino.value;

	switch (destinoIngresado) 
	{
		case "Bariloche":
			alert ("Este lugar esta al oeste");
			break;
		case "Cataratas":
			alert ("Este lugar esta al norte");
			break;
		case "Mar del plata":
			alert ("Este lugar esta al este");
			break;
		case "Ushuaia":
			alert ("Este lugar esta al sur");
			break;
	}
}
