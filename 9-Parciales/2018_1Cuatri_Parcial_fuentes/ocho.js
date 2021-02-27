/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/
function mostrar()
{
    var numeroIngresado;
    var letraIngreada;
    var arrayNumeros = []
    var arrayLetras = []
    var cantidadCeros = 0
    var cantidadPares = 0
    var cantidadImpares = 0
    var sumaNegativos = 0
    var promedioPositivos;
    var numeroMaximo;
    var letraMaxima;
    var numeroMinimo;
    var letraMinima;
    var confirmar;

    do 
    {
        numeroIngresado = prompt("Ingrese un numero del -100 al 100");
        numeroIngresado = parseInt(numeroIngresado);
        letraIngreada = prompt("Ingrese una letra");

        if (isNaN(numeroIngresado)||numeroIngresado<-100||numeroIngresado>100) 
        {
            alert("Ingrese un numero valido");
        }
        else
        {
            if (numeroIngresado==0) 
            {
                cantidadCeros ++    
            }
            else
            {
                if (numeroIngresado%2==0) 
                {
                    cantidadPares++
                }
                else
                {
                    cantidadImpares++
                }
            }
        }
        arrayLetras.push(letraIngreada);
        arrayNumeros.push(numeroIngresado);
        confirmar = confirm("Desea agregar otro numero y letra?"); 
    } while (confirmar);

    for(var i=0;i<arrayNumeros.length;i++)
    {
        if (arrayNumeros[i]<0) 
        {
            sumaNegativos = sumaNegativos + arrayNumeros[i]
        }
        else
        {
            if (arrayNumeros[i]>0) 
            {
                sumaNegativos = sumaNegativos + arrayNumeros[i];    
            }
        }
    }
    letraMinima = arrayLetras[0];
    letraMaxima = arrayLetras[0];
    numeroMinimo = arrayNumeros[0];
    numeroMaximo = arrayNumeros[0];
    for(var i=0;i<arrayNumeros.length;i++)
    {
        if (arrayNumeros[i]>numeroMaximo) 
        {
            numeroMaximo = arrayNumeros[i];
            letraMaxima = arrayLetras[i];  
        }
        else
        {
            if (arrayNumeros[i]<numeroMinimo) 
            {
                numeroMinimo = arrayNumeros[i];
                letraMinima = arrayLetras[i];
            }
        }
    }
promedioPositivos = sumaNegativos/i
document.write
("La cantidad de numeros pares es: "+cantidadPares,
"<br/>La cantidad de numeros impares es: "+cantidadImpares,
"<br/>La cantidad de ceros es: "+cantidadCeros,
"<br/>El promedio de todos los positivos es: "+promedioPositivos,
"<br/>La suma de todos los numeros negativos es: "+sumaNegativos,
"<br/>El numero maximo es: "+numeroMaximo+" Y la letra es: "+letraMaxima,
"<br/>El numero minimo es: "+numeroMinimo+" Y la letra es: "+letraMinima);
}
