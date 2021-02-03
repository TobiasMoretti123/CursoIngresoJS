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
	var resta;
	var numero1parsiado
	var numero2parsiado

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	//transfromacion
	numero1parsiado = parseInt(numero1);
	numero2parsiado = parseInt(numero2);

	resta = numero1parsiado - numero2parsiado;

	alert ("La resta es "+resta);
}

function multiplicar()
{ 
	var numero1;

	var numero2;
	var multiplicacion;
	var numero1parsiado
	var numero2parsiado

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	//transfromacion
	numero1parsiado = parseInt(numero1);
	numero2parsiado = parseInt(numero2);

	multiplicacion = numero1parsiado * numero2parsiado;

	alert ("La multiplicacion es "+multiplicacion);
}

function dividir()
{
	var numero1;

	var numero2;
	var division;
	var numero1parsiado
	var numero2parsiado

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	//transfromacion
	numero1parsiado = parseInt(numero1);
	numero2parsiado = parseInt(numero2);

	division = numero1parsiado / numero2parsiado;

	alert ("La division es "+division);
}

