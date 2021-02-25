/*al presionar el botón repetir hasta que utilizamos 'BREAK'.*/
function mostrar()
{
	var Break = true;

	for(var i; i!=Break; )
	{
		Break = confirm("utilizar BREAK?");
		if (Break==true) 
		{
			break;
		}
	}
}