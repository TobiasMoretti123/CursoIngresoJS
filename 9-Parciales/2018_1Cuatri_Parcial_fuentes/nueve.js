/*Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/
function mostrar()
{
    var MarcaIngresada;
    var arrayMarcas = [];
    var pesoProducto;
    var arrayPeso = [];
    var productoMasPesado;
    var pesoMaximo;
    var pesoMinimo;
    var temperaturaIngresada;
    var cantidadTemperaturasPares = 0;
    var cantidadProductosCero = 0;
    var sumaPeso = 0;
    var promedioPeso;
    var continuar;

    do 
    {
        MarcaIngresada = prompt("Ingrese una marca");
        pesoProducto = prompt("Ingrese Peso del producto");
        pesoProducto = parseInt(pesoProducto);
        temperaturaIngresada = prompt("Ingrese la temperatura");
        temperaturaIngresada = parseInt(temperaturaIngresada);
        if (isNaN(pesoProducto)||pesoProducto<1||pesoProducto>100) 
        {
            alert ("Ingrese un peso entre 1 y 100")
        } 
        else 
        {
            if (isNaN(temperaturaIngresada)||temperaturaIngresada<-30||temperaturaIngresada>30) 
            {
               alert ("Ingrese una temperatura entre -30 y 30") 
            }
            else
            {
                if (temperaturaIngresada%2==0) 
                {
                    cantidadTemperaturasPares++
                }
                else
                {
                    if (temperaturaIngresada<0) 
                    {
                        cantidadProductosCero++
                    }
                }
            }
        }
        arrayMarcas.push(MarcaIngresada);
        arrayPeso.push(pesoProducto);
        continuar = confirm("Desea agregar otra marca?")
    } while (continuar);

    pesoMaximo = arrayPeso[0];
    pesoMinimo = arrayPeso[0];
    productoMasPesado = arrayMarcas[0];
    for(var i=0;i<arrayPeso.length;i++)
    {
        if (arrayPeso[i]>pesoMaximo) 
        {
            pesoMaximo=arrayPeso[i];
            productoMasPesado = arrayMarcas[i];
        } 
        else 
        {
            if (arrayPeso[i]<pesoMinimo) 
            {
                pesoMinimo=arrayPeso[i];
            }
        }
    }
    for(var i=0;i<arrayPeso.length;i++)
    {
        sumaPeso = sumaPeso + arrayPeso[i];
    }
    promedioPeso = sumaPeso/i

    document.write(
    "La cantidad de temperaturas pares es: "+cantidadTemperaturasPares,
    "<br/>El producto mas pesado es: "+productoMasPesado+" Y su peso es de: "+pesoMaximo+"Kg",
    "<br/>La cantidad de productos que se concervan a -0 son: "+cantidadProductosCero,
    "<br/>El promedio del peso de todos los productors es: "+promedioPeso,
    "<br/>El peso maximo es: "+pesoMaximo,
    "<br/>El peso minimo es: "+pesoMinimo);
}
