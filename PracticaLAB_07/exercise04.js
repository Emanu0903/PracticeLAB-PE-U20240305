// recorrer un array de nombre con diferentes operaciones

const { log } = require("console");

const nombres = ["Ana", "Luis","Maria","Juan", "Carlos","Elena","Sofia","Pedro"];

console.log("Lista de nombres: ");
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// Contar cantidad total de nombres
let cantidadNombres = nombres.length;
console.log("\nCantidad total de nombres: " + cantidadNombres);


// Buscar un nombres especifico dentro del array
let nombreBuscado = "Maria";
let encontrado = false;
for (let i = 0; i < nombres.length; i++) {
    if (nombres [i] === nombreBuscado) {
        encontrado= true;
        console.log("\nNombre" + nombreBuscado + "no fue encontrado en el array");
        break;
    }
    
}
if (!encontrado) {
    console.log("\nEl nombre" + nombreBuscado + "no fue encontrado en el array.");
}

// Encontrar el nombre mas largo en el array
let nombreMasLargo = [0];
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length > nombres[i]);
    nombreMasLargo = nombres[i];
}

console.log("\nEl nombre mas largo es:" + nombreMasLargo);

//Convertir todos los nombres a MAYUSCULA y mostrarlos
console.log("\nNombres en mayuscula:");
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i].toUpperCase());
}

// Agregar un nuevo nombre al array y mostrar la lista de actualizacion
let nuevoNombre = "Gabriela";
nombres.push(nuevoNombre);
console.log("\nLista actualizada de nombres (despues de agregar '" +nuevoNombre +"')");
for (let i = 0; i < nombres.length ; i++) {
    console.log(nombres[i]);
}

//Elimininar el ultimo nombre del array y mostrar  la lsita actualizada

nombres.pop();
console.log("\nLista de nombres de eliminar el ultimo");
for (let i = 0; i < nombres.length; i++){
      console.log(nombres[i]);
      
}

//Invertir el orden de los nombres y mostrarlas

console.log("\nNombres en orden inverso: ");
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
    
}


