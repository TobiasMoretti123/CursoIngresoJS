/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var largoParceado;
    var anchoParceado;
    var perimetro;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largoParceado = parseInt (largo);
    anchoParceado = parseInt (ancho);

    perimetro = (largoParceado*2 + anchoParceado*2); 

    alert ("se requiere "+perimetro*3+ " metros de alambre");

}
function Circulo () 
{
    var radio;
    var radioParceado;
    var diametro;
    var alambre;
    var pi = Math.PI 

    radio = txtIdRadio.value;

    radioParceado = parseInt(radio);
    diametro = radio*2*pi
    alambre = diametro;

    alert ("Se requiere "+alambre*3+" metros de alambre");
}
function Materiales () 
{
    var largo;
    var ancho;
    var largoParceado;
    var anchoParceado;
    var perimetro;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largoParceado = parseInt (largo);
    anchoParceado = parseInt (ancho);

    perimetro = (largoParceado * anchoParceado); 

    alert ("se requiere "+perimetro*2+ " bolsas de cemento y "+perimetro*3+" bolsas de cal");
}