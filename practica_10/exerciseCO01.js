// Definicion de la clase
class Persona {
    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad = edad;
    }

    // Metodo para imprimir la informacion en la consola
    immprimirInfo() {
        console.log(`Nombre: ${this._nombre}, Edad: ${this._edad}`);
    }
}

// Creacion de un objeto
const persona1 = new Persona('Josue',21);
persona1.immprimirInfo(); //Imprime: NOmbre: Josue, Edad: 21