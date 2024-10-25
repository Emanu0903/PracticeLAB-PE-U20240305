class Persona{
    constructor(nombre,apellido){
        //Propiedades privadas
        this._nombre = nombre;
        this._apellido = apellido;
    }
    //Metodo Get para obtener el completp
    get nombreCompleto(){
        return `${this._nombre} ${this._apellido}`;
    }

    set nombreCompleto(nombreCompleto){
        [this._nombre, this._apellido] = nombreCompleto.split(" ");
    }

};

const persona = new Persona('Emanuel','Marquina');
persona.nombreCompleto = 'Emanuel Marquina';
console.log(persona.nombreCompleto);