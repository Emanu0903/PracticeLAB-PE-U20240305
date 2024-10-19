const readline = require('readline');

// Configurar el encoding
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let letra = '', veces = 0, cadena = '';

function preguntarLetra() {
    rl.question("¿Qué letra desea, X o Z? ", (inputLetra) => {
        letra = inputLetra.trim().toUpperCase(); // Corregido trim para evitar espacios
        if (letra === 'X' || letra === 'Z') {
            preguntarVeces();
        } else {
            console.log("Debes elegir entre la letra X o Z.");
            preguntarLetra(); // Vuelve a preguntar si no es X o Z
        }
    });
}

function preguntarVeces() {
    rl.question("¿Cuántas repeticiones (1-15)? ", (inputVeces) => {
        veces = parseInt(inputVeces);
        if (!isNaN(veces) && veces >= 1 && veces <= 15) {
            generarCadena();
        } else {
            console.log("El número de repeticiones debe estar entre 1 y 15.");
            preguntarVeces(); // Vuelve a preguntar si el número no está en el rango
        }
    });
}

function generarCadena() {
    while (veces > 0) {
        cadena += letra;
        veces--;
    }
    console.log("Resultado: " + cadena);
    rl.close();
}

preguntarLetra();
