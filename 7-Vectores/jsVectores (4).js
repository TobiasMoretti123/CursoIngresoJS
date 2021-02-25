/*al presionar el botón se pedira, a traves de prompt, y numeros
que seran guardados en un vector y luego seran mostrados mediante
document.write(). mostrar ademas la sumatoria de todos los numeros.*/
function mostrar()
{
	var arrayNumeros = []
    var numeroIngresado;
    var confirmar;
    var contador;
    var suma;

    contador = 0
    suma = 0

    do 
    {
        numeroIngresado = prompt("Ingrese un numero");
        numeroIngresado = parseInt(numeroIngresado);
        arrayNumeros.push(numeroIngresado);
        confirmar=confirm("Desea continuar?");
        contador++

    } while (confirmar);

    for(var i=0;i<contador;i++)
    {
        document.write(arrayNumeros[i]);
    }
    for(var i=0; i<arrayNumeros.length;i++)
    {
        suma = suma + arrayNumeros[i];
    }
    document.write(" la sumatoria de los numeros es: "+suma);
}