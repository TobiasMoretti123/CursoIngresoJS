/*Al ingresar una edad debemos informar si la persona 
es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) 
o niño (menor a 13 años).*/
function mostrar()
{
	var edadNumero;
	var edadString;

	edadString = txtIdEdad.value;
	edadNumero = parseInt(edadString);
	
	if (edadString!==edadNumero)
	{
		alert ("Usted no ingreso un numero")
	}
	else if(edadNumero>17)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		if(edadNumero<13)
		{
			alert("Usted es un niño");
		}
		else
		{
			alert ("Usted es adolescente");
		}
	}
}