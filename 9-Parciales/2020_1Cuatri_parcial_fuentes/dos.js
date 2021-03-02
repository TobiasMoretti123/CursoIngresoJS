/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{ 
    var tipoProductos;
    var cantidadDeBolsas;
    var precioPorBolsa;
    var descuento;
    var acumuladorPrecio;
    var acumuladorCantidad;
    var importeTotal;
    var importeTotalConDescuento;
    var tipoMasCantidad;
    var masCantidad;
    var tipoMasCaro;
    var masCaro;
    var respuesta;
    var banderaMas;

    acumuladorPrecio = 0;
    acumuladorCantidad = 0;
    banderaMas = true;
    respuesta ="si";

    while (respuesta=="si") 
    {
        tipoProductos = prompt("Ingrese tipo de producto arena, cal o cemento");
        while (isNaN(tipoProductos)==false||tipoProductos!="arena"&&tipoProductos!="cal"&&tipoProductos!="cemento") 
        {
            tipoProductos = prompt ("Error, reingrese arena , cal o cemento");
        }
        cantidadDeBolsas = prompt("Ingrese cantidad de bolsas");
        cantidadDeBolsas = parseInt(cantidadDeBolsas);
        while (isNaN(cantidadDeBolsas)==true||cantidadDeBolsas<0) 
        {
            cantidadDeBolsas = prompt ("Error, ingrese una cantidad valida");  
        }
        precioPorBolsa = prompt("Ingrese precio por bolsa");
        precioPorBolsa = parseInt(precioPorBolsa);
        while (isNaN(precioPorBolsa)==true || precioPorBolsa<0) 
        {
            precioPorBolsa = prompt ("Error, ingrese un precio valido");
        }

        if (cantidadDeBolsas>10) 
        { 
            descuento= 10;
        }
        else
        {
            if (cantidadDeBolsas>30) 
            {
                descuento =30;
            }
        }

        if (banderaMas==true) 
        {
            tipoMasCantidad = tipoProductos;
            masCantidad = cantidadDeBolsas;
            tipoMasCaro = tipoProductos;
            masCaro = precioPorBolsa;
            banderaMas == false;
        }
        else
        {
            if (masCantidad<cantidadDeBolsas) 
            {
              tipoMasCantidad = tipoProductos;
              masCantidad = cantidadDeBolsas;
            }
            if (masCaro<precioPorBolsa) 
            {
              tipoMasCaro = tipoProductos;
              masCaro = precioPorBolsa;
            }
        }
        acumuladorCantidad = acumuladorCantidad + cantidadDeBolsas;
        acumuladorPrecio = acumuladorPrecio + precioPorBolsa;
        respuesta = prompt("Desea agregar mas productos si/no");

    }
    
    importeTotal = acumuladorPrecio*acumuladorCantidad;
    document.write("a) El importe total bruto es de: "+importeTotal);

    importeTotalConDescuento = importeTotal - importeTotal*descuento/100
    if (descuento == 0) 
    {
        document.write("<br/>b) No se agrego ningun descuento");
    }
    else
    {
        document.write("<br/>b) El importe total con descuento es de: "+importeTotalConDescuento+"$");
    }

    document.write("<br/>d) El tipo con mas cantidad de bolsas es: "+tipoMasCantidad,
    "<br/>e) El tipo mas caro es: "+tipoMasCaro);
    


   


}
