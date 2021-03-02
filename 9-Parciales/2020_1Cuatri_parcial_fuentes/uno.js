/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
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
	var masBaratoAlcohol;
	var masbaratoCantidad;
	var fabricanteDelMasBarato;
	var promedioDelDeMasUnidades;
	var unidadesJabon;
	var unidadesAlcohol;
	var unidadesBarbijo; 
	var banderaDelMasBarato;

	unidadesJabon = 0;
	unidadesAlcohol = 0;
	unidadesBarbijo = 0;
	banderaDelMasBarato = true

	for(var i=0;i<5;i++)
	{
		tipoProductos = prompt("Ingrese tipo de producto barbijo, jabon o alcohol");
		while (isNaN(tipoProductos)==false||tipoProductos!="barbijo"&&tipoProductos!="jabon"&&tipoProductos!="alcohol") 
		{
			tipoProductos = prompt ("Error, Ingrese tipo de producto barbijo, jabon o alcohol");
		}
		precioProducto = prompt ("Ingrese precio del producto entre 100 y 300");
		precioProducto = parseInt(precioProducto);
		while (isNaN(precioProducto)==true||precioProducto<100||precioProducto>300) 
		{
			precioProducto = prompt("Error, Ingrese precio del producto entre 100 y 300");
		}
		cantidadDeProducto = prompt ("ingrese cantidad de producto entre 1 y 1000");
		cantidadDeProducto = parseInt(cantidadDeProducto)
		while (isNaN(cantidadDeProducto)==true||cantidadDeProducto<1||cantidadDeProducto>1000) 
		{
			cantidadDeProducto = prompt("Error, ingrese cantidad de producto entre 1 y 1000")
		}
		marcaDelProducto = prompt("Ingrese marca del producto");
		fabricanteProducto = prompt("Ingrese fabricante del producto");

		switch (tipoProductos) 
		{
			case "alcohol":
				unidadesAlcohol = unidadesAlcohol + cantidadDeProducto;
				if (banderaDelMasBarato == true) 
				{
					masBaratoAlcohol = precioProducto;
					masbaratoCantidad = cantidadDeProducto;
					fabricanteDelMasBarato = fabricanteProducto;
					banderaDelMasBarato = false
				}
				else
				{
					if (masBaratoAlcohol<precioProducto) 
					{
						masBaratoAlcohol = precioProducto;
						masbaratoCantidad = cantidadDeProducto;
						fabricanteDelMasBarato = fabricanteProducto;
					}
				}
				break;
			case "barbijo":
				unidadesBarbijo = unidadesBarbijo + cantidadDeProducto;
				break;
			case "jabon":
				unidadesJabon = unidadesJabon + cantidadDeProducto;
				break;
		}
	}
	if (unidadesAlcohol==0) 
	{
		document.write("a) No se ingreso alcohol");
	}
	else
	{
		document.write("a) El fabricante del alcohol mas barato es: "+fabricanteDelMasBarato+" con una cantidad de: "+masbaratoCantidad+" articulos");
	}

	if (unidadesAlcohol>unidadesBarbijo&&unidadesAlcohol>unidadesJabon) 
	{
		promedioDelDeMasUnidades = cantidadDeProducto/unidadesAlcohol
		document.write("<br/>b)El producto con mas unidades es el alcohol y el promedio es de: "+promedioDelDeMasUnidades)
	}
	else
	{
		if (unidadesJabon>unidadesBarbijo) 
		{
			promedioDelDeMasUnidades = cantidadDeProducto/unidadesJabon
			document.write("<br/>b)El producto con mas unidades es el jabon y el promedio es de: "+promedioDelDeMasUnidades)
		}
		else
		{
			promedioDelDeMasUnidades = cantidadDeProducto/unidadesBarbijo
			document.write("<br/>b)El producto con mas unidades es el barbijo y el promedio es de: "+promedioDelDeMasUnidades)
		}	
	}
	document.write("<br/>c) Las unidades de jabones es: "+unidadesJabon)

	
}
