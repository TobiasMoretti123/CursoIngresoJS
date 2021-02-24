/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos). */
function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var promedioPositivo;
	var promedioNegativo;
	var negativos;
	var positivos;
	var contadorDeCeros;
	var contadorPares;
	var contador;

	contador = 0;
	negativos = 0;
	positivos = 0;
	contadorDeCeros = 0;
	contadorPares = 0;
	do 
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt (numeroIngresado);
		if (isNaN (numeroIngresado)) 
		{
			alert ("Ingrese un numero valido");
		} 
		else 
		{
			if (numeroIngresado == 0) 
			{
				contadorDeCeros = contadorDeCeros +1
			}
			else
			{
				if (numeroIngresado%2==0) 
				{
					contadorPares++
				}
				else
				{
					if(numeroIngresado>0)
					{
						positivos = positivos + numeroIngresado;
					}
					else
					{
						if (numeroIngresado<0)
						{
							negativos = negativos + numeroIngresado;
						}
					}
				}	
			}
		}
	respuesta = confirm ("Desea agregar otro numero?");
	contador++
	} while (respuesta);

	promedioPositivo = positivos/contador;
	promedioNegativo = negativos/contador;

	document.write(
	" La suma de los numeros Negativos es: "+negativos,
	" La suma de los positivos es: "+positivos,
	" El promedio de los negativos es: "+promedioNegativo,
	" El promedio de los positivos es: "+promedioPositivo,
	" La suma de los negativos es: "+negativos,
	" La suma de los positivos es: "+positivos,
	" La cantidad de ceros ingresada es: "+contadorDeCeros,
	" La cantidad de numeros pares es: "+contadorPares)
}