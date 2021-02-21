/*Bienvenidos.
(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido,
de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y es menor a 50".*/
function mostrar()
{
    var numero1;
    var numero2;
    var numero1String;
    var numero2String;
    var mensaje;
    var suma;

    numero1String = prompt ("Ingrese un numero");
    numero2String = prompt ("Ingrese un segundo numero");
    numero1 = parseInt (numero1String);
    numero2 = parseInt (numero2String);
    mensaje = "la suma es "+suma+" y es menor a 50"
    
    if (numero1 === numero2) 
    {
        alert (numero1String+numero2String);
    } 
    else 
    {
        if (numero1>numero2) 
        {
            alert (numero1/numero2);
        } 
        else 
        {
            alert (numero1 + numero2);
            suma = numero1 + numero2;
        }
        if (suma<50) 
        {
            alert (mensaje);
        }
    }
}
