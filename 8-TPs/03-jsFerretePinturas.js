/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var temperaturaParseada;
    var centigrados;

    temperatura = txtIdTemperatura.value;
    temperaturaParseada = parseInt (temperatura);

    centigrados = temperaturaParseada-32/1,8;
    alert (temperatura+ " Farenheit son "+centigrados+" centigrados");

    
}

function CentigradosFahrenheit () 
{
	var temperatura;
    var temperaturaParseada;
    var farenheit;
    var temperatura2

    temperatura = txtIdTemperatura.value;
    temperaturaParseada = parseInt (temperatura);

    farenheit = 1,8-32
    temperatura2 = temperaturaParseada*farenheit
    alert (temperatura+ " centigrados son "+farenheit+" farenheit");
}
