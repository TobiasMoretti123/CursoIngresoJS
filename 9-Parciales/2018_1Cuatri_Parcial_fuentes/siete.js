/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) 
, el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
function mostrar()
{
  var arrayNotas = []  
  var notaIngresada;
  var arraySexo = []
  var sexoIngresado;
  var notaMasBaja;
  var suma = 0;
  var promedio;
  var varones = 0;
  var sexoDeLaNotaMasBaja;

  for(var i=0;i<5;i++)
  {
    notaIngresada = prompt("Ingrese su nota");
    notaIngresada = parseInt(notaIngresada);
    sexoIngresado = prompt("Ingrese su sexo f femenino, m masculino");
    if (isNaN(notaIngresada)||notaIngresada<0||notaIngresada>10) 
    {
        alert("Ingrese una nota valida");
    }
    else
    {
        if (sexoIngresado!="f" && sexoIngresado!="m") 
        {
            alert("Ingrese un sexo valido");
        }
        else if (sexoIngresado=="m"&&notaIngresada>=6) 
        {
            varones++
        }
    }
    arraySexo.push (sexoIngresado);
    arrayNotas.push(notaIngresada);
  }
  sexoDeLaNotaMasBaja = arraySexo[0];
  notaMasBaja = arrayNotas[0];
  for(var i=1;i<arrayNotas.length;i++)
  {
    if (arrayNotas[i]<notaMasBaja) 
    {   
        notaMasBaja=arrayNotas[i];
        sexoDeLaNotaMasBaja = arraySexo[i];
    }
  }
  for(var i=1;i<arrayNotas.length;i++)
  {
    suma = suma + arrayNotas[i];
  }
  promedio = suma/i
  document.write(
  "Nota mas baja es: "+notaMasBaja+" Y su sexo es: "+sexoDeLaNotaMasBaja,
  "<br/>El promedio de las notas es: "+promedio,
  "<br/>La cantidad de varones que tienen 6 o mas son: "+varones)
}
