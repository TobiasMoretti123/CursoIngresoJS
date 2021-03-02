/*En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/
function mostrar()
{
	var nombreIngresado;
	var nacionalidadIngresada;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaIngresada;
	var laPersonaConMasTemp;
	var nacionalidadDeLaPersonaMasTemp;
	var cantidadMayoresSolteros;
	var cantidadMujeresSolterasViudas;
	var cantidadTerceraEdadMasDe30Grados;
	var acumuladorMujeresCasadas;
	var promedioMujeresCasadas;
	var acumuladorEdad;
	var respuesta;
	var banderaTemperatura;
	

	cantidadMayoresSolteros = 0;
	cantidadMujeresSolterasViudas = 0;
	cantidadTerceraEdadMasDe30Grados = 0;
	acumuladorEdad = 0;
	banderaTemperatura = true
	respuesta = "si"

	while (respuesta=="si") 
	{
		nombreIngresado = prompt("Ingrese su nombre");
		nacionalidadIngresada = prompt("Ingrese su nacionalidad");

		edadIngresada = prompt("Ingrese su edad");
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada)==true||edadIngresada<0) 
		{
			edadIngresada = prompt ("Error reingrese edad");	
		}

		sexoIngresado = prompt ("Ingrese su sexo f femenino o m masculino");
		while (isNaN(sexoIngresado)==false||sexoIngresado!="f"&&sexoIngresado!="m") 
		{
			sexoIngresado = prompt ("Error reingrese sexo");	
		}
		estadoCivilIngresado= prompt("Ingrese su estado civil soltero, casado o viudo")
		while (isNaN(estadoCivilIngresado)==false||estadoCivilIngresado!="casado"&&estadoCivilIngresado!="soltero"&&estadoCivilIngresado!="viudo") 
		{
			estadoCivilIngresado = prompt ("Error reingrese estado civil");	
		}
		temperaturaIngresada = prompt ("Ingrese su temperatura corporal")
		temperaturaIngresada = parseInt(temperaturaIngresada)
		while (isNaN(temperaturaIngresada)==true) 
		{
			temperaturaIngresada = prompt("Error reingrese temperatura")
		}

		if (estadoCivilIngresado=="soltero"&&edadIngresada>17) 
		{
			cantidadMayoresSolteros++
		}
		else
		{
			if (estadoCivilIngresado=="soltero"||estadoCivilIngresado=="viudo"&&sexoIngresado=="f") 
			{
				cantidadMujeresSolterasViudas++
			}
			else
			{
				acumuladorMujeresCasadas++
				acumuladorEdad = acumuladorEdad + edadIngresada;
			}
		}

		if (edadIngresada>60&&temperaturaIngresada>38) 
		{
			cantidadTerceraEdadMasDe30Grados++
		}	

		if (banderaTemperatura==true) 
		{
			laPersonaConMasTemp = temperaturaIngresada;
			nacionalidadDeLaPersonaMasTemp = nacionalidadIngresada;
			banderaTemperatura = false
		}
		else
		{
			if (laPersonaConMasTemp<temperaturaIngresada) 
			{
				laPersonaConMasTemp = temperaturaIngresada;
				nacionalidadDeLaPersonaMasTemp = nacionalidadIngresada;
			}
		}
		respuesta = prompt ("Desea agregar mas? si/no")
	}
	document.write("a) La nacionalidad de la persona con mas temperatura es: "+nacionalidadDeLaPersonaMasTemp,
	"<br/>b) La cantidad de mayores de edad solteros es de: "+cantidadMayoresSolteros,
	"<br/>c) La cantidad de mujeres solteras o viudas es de: "+cantidadMujeresSolterasViudas,
	"<br/>d) La cantidad de personas de tercera edad con mas de 38 grados es de: "+cantidadTerceraEdadMasDe30Grados)

	if (acumuladorEdad == 0) 
	{
		document.write("<br/>e) No se ingreso ninguna mujer casada")
	}
	else  
	{
		promedioMujeresCasadas = acumuladorEdad/acumuladorMujeresCasadas;
		document.write("<br/>e) el promedio de edad de las mujeres casadas es de: "+promedioMujeresCasadas);
	}
}
