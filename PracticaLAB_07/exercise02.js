let suma = 0;

let iteraciones = 0;
while (suma <= 1000) {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    suma += numeroAleatorio;
    iteraciones++;
    console.log(`Iteracion ${iteraciones}: Se añadio ${numeroAleatorio}, suma actual: ${suma}`);
    
}

console.log(`Proceso ompletado en ${iteraciones} iteraciones. Suma total: ${suma}`);