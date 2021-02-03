/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var numero1;
	var numero1parsiado;
	var resultado;
	var descuento

	numero1 = txtIdImporte.value;
	numero1parsiado = parseInt(numero1);
	descuento = (numero1parsiado*25/100);

	resultado = (numero1parsiado-descuento);
	txtIdResultado.value = resultado;

}
