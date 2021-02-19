/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/
function mostrar()
{
	var estacionIngresada;
	var estadia;
	var porcentaje;
	var localidad;
	var precioFinal;

	estacionIngresada = txtIdEstacion.value;
	localidad = txtIdDestino.value;
	estadia = 15000;
	switch (localidad) 
	{
		case "Bariloche":
			switch (estacionIngresada) 
			{
				case "Invierno":
					porcentaje = 20;
					break;
				case "Verano":
					porcentaje = -20;
					break;
				default:
					porcentaje = 10;
					break;
			}
		break;
		case "Mar del plata":
			switch (estacionIngresada) 
			{
				case "Invierno":
					porcentaje = -20;
					break;
				case "Verano":
					porcentaje = 20;
					break;
				default:
					porcentaje = 10;
					break;
			}
		break;
		case "Cordoba":
			switch (estacionIngresada) 
			{
				case "Invierno":
					porcentaje = -10;
					break;
				case "Verano":
					porcentaje = 10;
					break;
				default:
					porcentaje = 0;
					break;
			}
		break;
		case "Cataratas":
			switch (estacionIngresada) 
			{
				case "Invierno":
					porcentaje = -10;
					break;
				case "Verano":
					porcentaje = 10;
					break;
				default:
					porcentaje = 10;
					break;
			}
		break;
	}
	precioFinal = estadia+estadia*porcentaje/100;
	
	alert ("Su estadia en esta localidad y en esta estacion del año es igual a "+precioFinal+"$");
}