/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var ingreso;

	contador = 0;
	acumulador = 0;
	respuesta ='si';

	while (respuesta = 'si') 
	{
		respuesta = prompt ("Desea ingresar otro numero? si/no");
		ingreso = prompt ("Numero que desee agregar");
		ingreso = parseInt (ingreso);
		acumulador = acumulador + ingreso
		contador = contador + 1
		if (respuesta == 'no')
		{
			txtIdSuma.value=acumulador;
			txtIdPromedio.value=acumulador/contador;
		}
	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}