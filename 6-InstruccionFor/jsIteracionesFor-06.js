/*al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.*/
function mostrar()
{
	var numero;
	var numerosPares;
	var cantidad;

	numerosPares = 0
	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	for(var i=1;i<=numero;i++)
	{
		alert(i)
		if (i%2==0) 
		{
			numerosPares++
		}
	}
	cantidad = "La cantidad de numeros pares es: "+numerosPares;
	alert(cantidad);
}