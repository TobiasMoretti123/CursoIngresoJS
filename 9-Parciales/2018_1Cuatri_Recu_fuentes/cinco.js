/*Bienvenidos.
(SWITCH)pedir el ingreso de un día de la semana,
si es fin de semana mostrar " buen finde",
si es día hábil “ a trabajar”,
si no es un día valido, también informarlo,
usar una sola ventana alert.*/
function mostrar()
{
    var dia;
    var mensaje;

    dia = prompt ("Ingrese un dia de la semana");

    switch (dia) 
    {
        case "lunes":
        case "martes":
        case "miercoles":
        case "juesves":
        case "viernes":
            mensaje = "a trabajar";
            break;
        case "sabado":
        case "domingo":
            mensaje = "buen finde";
            break;
        default:
            mensaje = "No es un dia valido";
            break;
    }
    alert (mensaje);
}
