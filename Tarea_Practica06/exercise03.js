// Importar el módulo readline para interactuar con la consola
const readline = require('readline');

// Crear la interfaz de entrada/salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Por favor, ingresa tu edad: ", function(edad) {
    edad = Number(edad);

    if (isNaN(edad) || edad < 0) {
        console.log("Por favor, ingresa una edad válida.");
    } else {
        
        if (edad >= 0 && edad <= 12) {
            console.log("Eres un niño.");
        } else if (edad >= 13 && edad <= 17) {
            console.log("Eres un adolescente.");
        } else if (edad >= 18 && edad <= 35) {
            console.log("Eres un adulto joven.");
        } else if (edad >= 36 && edad <= 59) {
            console.log("Eres un adulto.");
        } else if (edad >= 60) {
            console.log("Eres un adulto mayor.");
        }
    }

    
    rl.close();
});
