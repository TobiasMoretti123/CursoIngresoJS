/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f para femenino ó m para masculino.");

	while (sexoIngresado != "f" && sexoIngresado != "m") 
	{
		alert ("Sexo no valido");
		sexoIngresado = prompt ("ingrese f para femenino ó m para masculino.");
		if (sexoIngresado == "f" && sexoIngresado == "m") 
		{
			txtIdSexo.value=sexoIngresado;
		}
	}
	txtIdSexo.value=sexoIngresado;
}