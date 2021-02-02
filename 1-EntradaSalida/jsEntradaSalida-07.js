/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

	alert ("La suma es "+suma);	
}

function restar()
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

	suma = numero1parsiado - numero2parsiado;

	alert ("La resta es "+suma);
}

function multiplicar()
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

	suma = numero1parsiado * numero2parsiado;

	alert ("La multiplicacion es "+suma);
}

function dividir()
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

	suma = numero1parsiado / numero2parsiado;

	alert ("La division es "+suma);
}

