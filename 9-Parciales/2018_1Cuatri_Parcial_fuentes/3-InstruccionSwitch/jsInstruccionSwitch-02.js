/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/
function mostrar()
{
	var mesDelAño;

	mesDelAño = txtIdMes.value;
	switch (mesDelAño)
	{
		case ("Junio"):
			alert("Abrigate que hace frio.");
			break;
		case ("Julio"):
			alert("Abrigate que hace frio.");
			break;
		case ("Agosto"):
			alert("Abrigate que hace frio.");
			break;
		case ("Marzo"):
			alert("Falta para el invierno");
			break;
		case ("Abril"):
			alert("Falta para el invierno");
			break;
		case ("Mayo"):
			alert("Falta para el invierno");
			break;
		default:
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
	}
}