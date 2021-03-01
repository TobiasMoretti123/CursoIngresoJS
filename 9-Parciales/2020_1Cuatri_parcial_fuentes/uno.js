
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar()
{
	var tipoProductos;
	var precioProducto;
	var cantidadDeProducto;
	var marcaDelProducto;
	var fabricanteProducto;
	var cantidadJabon;
	
	for(var i=0;i<5;i++)
	{
		tipoProductos = prompt("Ingrese tipo de producto barbijo , jabón o alcohol");
		if (isNaN(tipoProductos)==true||tipoProductos!="barbijo"&&tipoProductos!="jabón"&&tipoProductos!="alcohol") 
		{
			alert("Error, reingrese los datos");
			break;
		}

		precioProducto = prompt("Ingrese el precio de producto entre 100 y 300");
		precioProducto = parseInt(precioProducto);
		if (isNaN(precioProducto)==false||precioProducto<100||precioProducto>300) 
		{
			alert("Error, reingrese los datos");
			break;
		}

		cantidadDeProducto = prompt("Ingrese una cantidada no mayor a 1000");
		cantidadDeProducto = parseInt(cantidadDeProducto);
		if (isNaN(cantidadDeProducto)==false||cantidadDeProducto<1||cantidadDeProducto>1000) 
		{
			alert("Error, reingrese los datos");
			break;
		}

		marcaDelProducto = prompt("Ingrese marca o frabricante");
		fabricanteProducto = prompt("Ingrese un fabricante");
	}
}
