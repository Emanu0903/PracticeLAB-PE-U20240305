class Automovil {
    constructor(marca,modelo) {
        this._marca = marca;
        this._modelo = modelo;
    }

    arrancar() {
        console.log(`${this._marca} ${this._modelo} esta arrancando.`);
    }

    detener() {
        console.log(`${this._marca} ${this._modelo} se ha detenido`);
    }
}

//Creacion de un objeto
const automvil1 = new Automovil('Nissan','Sentra');
automvil1.arrancar();
automvil1.detener();