/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var precio1Parceado;
    var precio2Parceado;
    var precio3Parceado;
    var precioFinal

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1Parceado = parseInt (precio1);
    precio2Parceado = parseInt (precio2);
    precio3Parceado = parseInt (precio3);

    precioFinal = (precio1Parceado+precio2Parceado+precio3Parceado);

    alert ("La suma de los precios es igual "+precioFinal);

}
function Promedio () 
{
	var precio1;
    var precio2;
    var precio3;
    var precio1Parceado;
    var precio2Parceado;
    var precio3Parceado;
    var precioFinal;
    var promedio;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1Parceado = parseInt (precio1);
    precio2Parceado = parseInt (precio2);
    precio3Parceado = parseInt (precio3);

    precioFinal = precio1Parceado+precio2Parceado+precio3Parceado;
    promedio = precioFinal/3;

    alert ("el promedio de los precios es igual "+promedio);
}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var precio1Parceado;
    var precio2Parceado;
    var precio3Parceado;
    var precioFinal;
    var iva;
    var impuesto;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1Parceado = parseInt (precio1);
    precio2Parceado = parseInt (precio2);
    precio3Parceado = parseInt (precio3);

    precioFinal = precio1Parceado+precio2Parceado+precio3Parceado;
    iva = precioFinal*21/100;
    impuesto = precioFinal + iva;

    alert ("el iva de los precios es igual "+impuesto);
}