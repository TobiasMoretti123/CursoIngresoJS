/*Bienvenidos.
mostrar * en un solo alert * el mensaje 
"usted es xxxxx y vive en la localidad de xxxxxxxx".*/
function mostrar()
{
  var nombre;
  var localidad;
  var mensaje;

  nombre = elNombre.value;
  localidad = laLocalidad.value;

  mensaje = "Usted es "+nombre+" y vive en la localidad de "+localidad;

  alert (mensaje);
}
