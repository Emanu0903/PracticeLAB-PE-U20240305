class Clima{
    constructor(celsius){
        this._celsius = celsius;
    }
//Get para obtener la temperatura en Farenheit
    get fahrenheit(){
        return (this._celsius *9) / 5 +32;
    }

    //Set para cambiar la temperatura a fahrenheit
    set fahrenheit(fahrenheit) {
        this._celsius = ((fahrenheit - 32) * 5) / 9;
    }

    //Get y set para la temperatura en celsius
    get celsius(){
        return this._celsius;
    }

    set celsius(celsius) {
        this._celsius = celsius;
    }

}

//Crear un objeto con temperatura en celsius

const clima = new Clima(25);

//Mostrar la temperatura en fahrenheit (77 grados)
console.log(`Clima en grados Fahrenheit: ${clima.fahrenheit}°F`);
clima.fahrenheit = 86;

//ahora se muestra en celsius (30 grados)
console.log(`Clima en grados celsius: ${clima.celsius}°C`);


