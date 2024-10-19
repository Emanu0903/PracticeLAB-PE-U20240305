const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeroCorrecto = Math.floor(Math.random() * 100) + 1;

let intentos = 0;

function adivinarNumero() {
  rl.question('Adivina el número (entre 1 y 100): ', (respuesta) => {
    let numeroUsuario = parseInt(respuesta, 10);
    intentos++;

    if (numeroUsuario === numeroCorrecto) {
      console.log(`¡Correcto! Adivinaste el número ${numeroCorrecto} en ${intentos} intentos.`);
      rl.close(); 
    } else if (numeroUsuario > numeroCorrecto) {
      console.log("El número es menor. Intenta de nuevo.");
      adivinarNumero(); 
    } else {
      console.log("El número es mayor. Intenta de nuevo.");
      adivinarNumero(); 
    }
  });
}


adivinarNumero();
