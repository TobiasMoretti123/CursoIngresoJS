/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero1;

	var numero2;
	var resto;
	var numero1parsiado
	var numero2parsiado

	numero1 = txtIdNumeroDividendo.value;
	numero2 = txtIdNumeroDivisor.value;

	//transfromacion
	numero1parsiado = parseInt(numero1);
	numero2parsiado = parseInt(numero2);

	resto = numero1parsiado % numero2parsiado;

	alert ("El resto es "+resto);	
}
