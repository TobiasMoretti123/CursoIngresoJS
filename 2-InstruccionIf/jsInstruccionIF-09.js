/*Al presionar el Botón, 
mostrar un número Random del 1 al 10 inclusive*/
function mostrar()
{
	var numero;
	
	numero = Math.floor(Math.random(1)*20);

	if (numero<=10 && numero>1)
	{
		alert ("Numero es "+numero);
	}
}