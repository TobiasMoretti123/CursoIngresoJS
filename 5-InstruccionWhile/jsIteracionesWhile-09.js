/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var continuar;
	var flag=true;

	do 
	{
		numeroIngresado = prompt ("Ingrese un numero");
		numeroIngresado = parseInt (numeroIngresado);
		if (flag==true) 
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			flag=false
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}	
		}
		continuar = confirm("Desea continuar?");
	} while (continuar);
	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
}
