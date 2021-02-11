/*Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".*/
function mostrar()
{
	var horaDelDia = txtIdHora.value;
	switch (horaDelDia) 
	{
		case "7":
			alert ("Es de Mañana");
			break;
		case "8":
			alert ("Es de Mañana");
			break;
		case "9":
			alert ("Es de Mañana");
			break;
		case "10":
			alert ("Es de Mañana");
			break;
		case "11":
			alert ("Es de Mañana");
			break;
		default:
			alert ("No es la Mañana");
			break;
	}
}