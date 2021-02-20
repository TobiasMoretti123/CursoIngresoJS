/*4.
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.*/
function CalcularPrecio () 
{
    var lamparas = 35;
    var cantidadLamparas;
    var precioLamparas;
    var descuento;
    var importeTotal;
    var marca;
    var precioConDescuento;
    var impuestoIIBB;

    marca = Marca.value;
    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt (cantidadLamparas);

   if (cantidadLamparas>5) 
   {
       descuento = 50;
   }
   else
   {
       switch (marca) 
       {
            case "ArgentinaLuz":
               switch (cantidadLamparas) 
               {
                    case 5:
                        descuento= 40;
                        break;
                    case 4:
                        descuento = 25;
                        break;
                    case 3:
                        descuento = 15;
                        break;
                    default:
                        descuento = 0;
                        break;
               }
            break;
            case "FelipeLamparaz":
                switch (cantidadLamparas) 
                {
                    case 5:
                        descuento = 30;
                        break;
                    case 4:
                        descuento = 25;
                        break;
                    case 3:
                        descuento = 10;
                        break;
                    default:
                        descuento = 0;
                        break;
                }
            default:
                switch (cantidadLamparas) 
                {
                    case 5:
                        descuento = 30;
                        break;
                    case 4:
                        descuento = 20;
                        break;
                    case 3:
                        descuento = 5;
                    default:
                        descuento = 0;
                }
       }

   }
    precioLamparas = cantidadLamparas*lamparas;
    precioConDescuento = precioLamparas*descuento/100;
    importeTotal = precioLamparas - precioConDescuento;
    impuestoIIBB = importeTotal*10/100;

    if (importeTotal>120)    
    {
        alert ("Usted pago "+(importeTotal+impuestoIIBB)+" de IIBB.”, siendo "+impuestoIIBB+" el impuesto que se pagó.");
    }
    txtIdprecioDescuento.value = importeTotal;
    
}
