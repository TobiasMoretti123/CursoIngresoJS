/* Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: Es muy pequeño para NO ser soltero.*/
function mostrar()
{
	var edad;
	var estCivil;

	edad = txtIdEdad.value;
	estCivil = estadoCivil.value;
	edad = parseInt (edad);

	if(edad<18 && estCivil!="Soltero")
	{
		alert ("Es muy pequeño para no ser soltero");
	}
}	