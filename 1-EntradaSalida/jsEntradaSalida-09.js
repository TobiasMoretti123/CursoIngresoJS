/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var numero1;
	var numero1parsiado;

	numero1 = txtIdSueldo.value;

	//transfromacion
	numero1parsiado = parseInt(numero1);

	alert (numero1parsiado*10/100);
	




	
}
