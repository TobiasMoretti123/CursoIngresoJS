/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var numero1;
	var numero1parsiado;
	var resultado; 

	numero1 = txtIdSueldo.value;
    numero1parsiado = parseInt(numero1);

	resultado = (numero1parsiado*10/100+numero1parsiado);
	txtIdResultado.value = resultado

}
