// Crear una nueva instancia del objeto Date
let fechaActual = new Date();

// Obtener el día actual
let dia = fechaActual.getDate();

// Obtener el mes actual (recuerda que los meses empiezan desde 0, así que le sumamos 1)
let mes = fechaActual.getMonth() + 1;

// Obtener el año actual
let anio = fechaActual.getFullYear();

// Mostrar la fecha actual en formato día/mes/año
console.log("Fecha actual: " + dia + "/" + mes + "/" + anio);
