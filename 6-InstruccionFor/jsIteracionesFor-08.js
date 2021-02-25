/*al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/

function mostrar()
{
	var numeroIngresado;
	var resto;
	var numerosPrimos;
	var numeros;

	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
	resto = 0
	numerosPrimos = 0
	numeros = 0

	for(resto=2;resto<numeroIngresado;i++)
	{
		if (numeroIngresado%resto==0) 
		{
			numerosPrimos++
		}
		else
		{
			if (numeroIngresado%resto!=0) 
			{
				numeros++
			}
		}
	}
	alert("La cantidad de numeros primos es: "+numerosPrimos);
	alert("La cantidad de numeros No primos son: "+numeros);
}