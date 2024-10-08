const { log } = require('console');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num;
function pedirNumero() {
    rl.question("Introduce un numero mayor a 5: ", (input) => {
        num = parseInt(input);
        if (num > 5) {
            console.log(`Numero es valido ${num}`);
            rl.close();
        }else{
            console.log("El numero debe de ser mayo a 5.");
            pedirNumero();
        }
    })
}
pedirNumero();