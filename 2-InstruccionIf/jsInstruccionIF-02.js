//Al ingresar una edad debemos informar solo 
//si la persona es mayor de edad
function mostrar()
{
	var edad;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(edad>17)
	{
		alert ("Usted es mayor de edad");
	}
}