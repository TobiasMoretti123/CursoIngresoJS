/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	
	var numero1;

	var numero2;
	var suma;
	var numero1parsiado
	var numero2parsiado

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	//transfromacion
	numero1parsiado = parseInt(numero1);
	numero2parsiado = parseInt(numero2);

	suma = numero1parsiado + numero2parsiado;

	alert ("el numero es "+suma);
}

