/*Bienvenidos.
Pedir por prompt el precio 
y el porcentaje de descuento, 
mostrar el precio final con descuento por id.*/
function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;
    

    precio = prompt ("Poner precio");
    descuento = prompt ("Poner el descuento");

    precio = parseInt (precio);
    descuento = parseInt (descuento);

    precioFinal = precio - precio*descuento/100;
    elPrecioFinal.value = precioFinal;
}
