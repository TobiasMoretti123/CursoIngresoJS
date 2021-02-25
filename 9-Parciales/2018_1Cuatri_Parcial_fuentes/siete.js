/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) 
, el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
function mostrar()
{
   var notaIngresada;
   var sexoIngresado;
   var promedio;
   var notaMasBaja;
   var cantidadVarones;
   var flag=true

   cantidadVarones = 0
   promedio = 0

    for(i=0;i<5;i++)
    {
        notaIngresada = prompt("Ingrese una nota del 0 al 10");
        notaIngresada = parseInt(notaIngresada);
        sexoIngresado = prompt("Ingrese su sexo f femenino o m masculino");
    
        if (notaIngresada<0||notaIngresada>10) 
        {
            alert("Ingrese una nota valida");
            break;
        } 
        else 
        {
            if (sexoIngresado!="f"&&sexoIngresado!="m") 
            {
                alert("Ingrese un sexo valido");
                break;
            }
            else
            {
                if (sexoIngresado == "m" && notaIngresada>=6) 
                {
                    cantidadVarones++
                }
                else
                {
                    if (flag==true) 
                    {
                        notaMasBaja = notaIngresada
                    }
                    else
                    {
                        if (notaIngresada<notaMasBaja) 
                        {
                            notaMasBaja = notaIngresada
                        }
                    }
                }
            }
        }
        promedio = promedio + notaIngresada
    }
    alert ("El promedio de las notas es: "+promedio/i);
    alert ("La nota mas baja es: "+notaMasBaja);
    alert ("La cantidad de varones que su nota es mayor o igual a 6 es: "+cantidadVarones);
}
