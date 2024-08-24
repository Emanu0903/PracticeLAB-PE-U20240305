//Abrimos libreria readline
const { AsyncLocalStorage } = require('async_hooks');
const { log } = require('console');
const readline = require('readline');

//Creamos una interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero entero cualquiera: ",(numero)=>{
    if (numero % 2 === 0) {
        return console.log("Su numero es Par");
        
    }else{
        return console.log("Su numero es Impar");
        
    }
    rl.close();
});
