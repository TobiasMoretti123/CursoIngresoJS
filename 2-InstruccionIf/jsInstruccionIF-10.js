/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
	var nota;

	nota = Math.floor(Math.random(1)*10);
	
	if (nota<4) 
	{
		alert ("Vamos, la proxima se puede");
	}
	else 
	{
		if(nota>3 && nota<9)
	{
		alert ("Aprobo");
	} 
		else	
		{
			alert ("EXELENTE");
		}	
	}
}