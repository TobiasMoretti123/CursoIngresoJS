/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var ingreso;
	var acumulador;
	var contador;
	var respuesta;

	contador = 0
	acumulador = 0

	do {
		ingreso = prompt ("Ingrese un numero");
		ingreso = parseInt (ingreso);
		contador++
		acumulador = acumulador + ingreso;
		respuesta = confirm("Desea agregar otro numero?");
	} while (respuesta);

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}