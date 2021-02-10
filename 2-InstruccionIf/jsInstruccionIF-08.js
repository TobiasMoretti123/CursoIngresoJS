/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
NO HACER NADA, pero si no es asi, 
y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/
function mostrar()
{
	var edad;
	var estCivil;

	edad = txtIdEdad.value;
	estCivil = estadoCivil.value;
	edad = parseInt (edad);

	if(edad>17 && estCivil=="Soltero")
	{
		alert ("Es soltero y no es menor");
	}
}