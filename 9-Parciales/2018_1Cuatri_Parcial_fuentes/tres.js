function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;
    var precioParceado;
    var descuentoParceado;

    precio = prompt ("Ingrese el Importe ");
    descuento = prompt ("ingrese el descuento");

    precioParceado = parseInt (precio);
    descuentoParceado = parseInt (descuento);
    precioFinal = precio-descuento

    elPrecioFinal.value = precioFinal
   
}
