/*al presionar el botón se pedira, a traves de prompt, y numeros
que seran guardados en un vector y luego serán mostrados mediante
document.write().*/
function mostrar()
{
	var arrayNumeros = []
    var numeroIngresado;
    var confirmar;

    do 
    {
        numeroIngresado = prompt("Ingrese un numero");
        numeroIngresado = parseInt(numeroIngresado);
        arrayNumeros.push(numeroIngresado);
        confirmar=confirm("Desea continuar?");

    } while (confirmar);


    for(var i=0;i<arrayNumeros.length;i++)
    {
        document.write(arrayNumeros[i]);
    }
}