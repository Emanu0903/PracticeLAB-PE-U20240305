const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVocalesYDígitos(cadena) {
    let numVocales = 0;
    let numDígitos = 0;
    const vocales = "aeiouAEIOU";

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        if (vocales.includes(caracter)) {
            numVocales++;
        }

        if (caracter >= '0' && caracter <= '9') {
            numDígitos++;
        }
    }

    return { numVocales, numDígitos };
}


function pedirCadena() {
    rl.question("Por favor, ingresa una cadena de texto (no puede estar vacía): ", function(cadena) {
        if (cadena.trim() === "") {
            console.log("La cadena no puede estar vacía.");
            pedirCadena(); 
        } else {
            const resultado = contarVocalesYDígitos(cadena);
            console.log(`Número de vocales: ${resultado.numVocales}`);
            console.log(`Número de dígitos: ${resultado.numDígitos}`);
            rl.close();
        }
    });
}


pedirCadena();
