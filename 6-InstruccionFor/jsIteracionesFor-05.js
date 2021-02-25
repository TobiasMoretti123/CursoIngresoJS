/*al presionar el botón repetir el pedido 
de número hasta que ingresemos el 9.*/
function mostrar()
{

	for(var numero; ; )
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		if (numero==9) 
		{
			break;
		}
	} 
}