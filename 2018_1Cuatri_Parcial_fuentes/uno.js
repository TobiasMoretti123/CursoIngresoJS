
function mostrar()
{
    var largo;
    var ancho;
    var resultado;
    var largoparceado;
    var anchoparceado;


    largo = prompt ("ingreso el largo de un rectangulo");
    ancho = prompt ("ingrese ancho de un rectangulo");

    largoparceado = parseInt(largo);
    anchoparceado = parseInt(ancho); 

    resultado = largo*2 + ancho*2;

    alert ("El perimetro del rectagulo es igual a "+resultado);

}
