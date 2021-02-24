/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var ingreso;
	sumaPositivos=0;
	multiplicacionNegativos=-1;

	do 
	{
		ingreso = prompt ("Ingrese un numero");
		ingreso = parseInt (ingreso);
		respuesta = confirm("Desea agregar otro numero?")
	if (ingreso<0) 
	{
		multiplicacionNegativos = multiplicacionNegativos*ingreso;	
	}
	else
		sumaPositivos = sumaPositivos + ingreso
	} while (respuesta);

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}