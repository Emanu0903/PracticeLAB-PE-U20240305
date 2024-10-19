const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    rl.question("1. Escribir\n2.Leer\n3.Salir\nEscoge una opcion: ", (opcion) => {
        switch (opcion) {
            case '1':
                console.log("Opcion 1: Eliges Escribir");
                mostrarMenu();
                break;
            case '2':
                console.log("Opcion 2: Elige Leer");
                mostrarMenu();
                break;
            case '3':
                console.log("Fin del programa");
                break;
            default:
                console.log("Debes elegir una de las opciones validas");
                
        }
    });
}

mostrarMenu();