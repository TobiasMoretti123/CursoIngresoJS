/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivil;
	var temperaturaCorporal;
	var nombreMasTemp;
	var masTemp;
	var cantidadMayoresViudos;
	var cantidadHombresSolterosViudos;
	var cantidadPersonas60ConMasDe38Temp;
	var acumuladorEdad;
	var promedioEdadSolteros;
	var banderaTemperatura;
	var respuesta;

	cantidadMayoresViudos = 0;
	cantidadHombresSolterosViudos = 0;
	cantidadPersonas60ConMasDe38Temp = 0;
	acumuladorEdad = 0;
	banderaTemperatura = true
	respuesta = "si"

	while (respuesta=="si") 
	{
		nombreIngresado = prompt ("Ingrese su nombre");
		edadIngresada = prompt ("Ingrese su edad");
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada)==true||edadIngresada<0) 
		{
			edadIngresada = prompt("Error, Reingrese edad");
		}
		sexoIngresado = prompt("Ingrese sexo f femenino m masculino");
		while (isNaN(sexoIngresado)==false||sexoIngresado!="f"&&sexoIngresado!="m") 
		{
			sexoIngresado = prompt ("Error, reingrese sexo");	
		}
		estadoCivil = prompt ("Ingrese su estado civil solteto, casado o viudo");
		while (isNaN(estadoCivil)==false||estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="viudo") 
		{
			estadoCivil = prompt ("Error, Reingrese estado");	
		}
		temperaturaCorporal = prompt ("Ingrese temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		while (isNaN(temperaturaCorporal)==true||temperaturaCorporal<30||temperaturaCorporal>45) 
		{
			temperaturaCorporal = prompt ("Erro, Ingrese una temperatura valida");
		}
		if (edadIngresada>17 && estadoCivil == "viudo") 
		{
			cantidadMayoresViudos ++
		}
		switch (sexoIngresado) 
		{
			case "m":
				if (estadoCivil=="soltero") 
				{
					cantidadHombresSolterosViudos++
					acumuladorEdad = acumuladorEdad + edadIngresada;
				}
				else if (estadoCivil=="viudo")
				{
					cantidadHombresSolterosViudos++
				}
				break;
		}
		if (edadIngresada>60 && temperaturaCorporal>38) 
		{
			cantidadPersonas60ConMasDe38Temp++
		}
		
		if (banderaTemperatura==true) 
		{
			nombreMasTemp = nombreIngresado;
			masTemp = temperaturaCorporal;
			banderaTemperatura = false;
		}
		else
		{
			if (masTemp<temperaturaCorporal) 
			{
				nombreMasTemp = nombreIngresado;
				masTemp = temperaturaCorporal;
			}
		}
		respuesta = prompt ("Desea agregar a alguien mas?")		
	}

	document.write("a) El nombre de la persona con mas Temperatura es: "+nombreMasTemp)
	if (cantidadMayoresViudos == 0)
	{
		document.write("<br/> b) No se ingreso ningun mayor de edad viudo");
	}
	else
	{
		document.write("<br/> b) La cantidad de mayores de edad que estan viudos es de "+cantidadMayoresViudos)
	}
	if (cantidadHombresSolterosViudos == 0) 
	{
		document.write("<br/> c) No se ingreso ningun hombre soltero o viudo");
	}
	else
	{
		document.write("<br/> c) La cantidad de hombres solteros o viudos es de: "+cantidadHombresSolterosViudos);
	}
	if (cantidadPersonas60ConMasDe38Temp==0) 
	{
		document.write("<br/> d) No se ingreso ningun hombre de tercera edad con mas de 38 grados");	
	}
	else
	{
		document.write("<br/> d) La cantidad de personas de tercera edad con mas de 38 grados es de: "+cantidadPersonas60ConMasDe38Temp);
	}
	if (acumuladorEdad == 0) 
	{
		document.write("<br/> e) No se ingreso ningun hombre soltero");
	}
	else
	{
		promedioEdadSolteros = acumuladorEdad/cantidadHombresSolterosViudos
		document.write("<br/> e) El promedio de edad de los hombres solteros es de: "+promedioEdadSolteros);
	}
	

	


}
