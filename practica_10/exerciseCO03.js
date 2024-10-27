class CuentaBancaria {
    constructor(titular, saldo) {
        this._titular = titular;
        this._saldo = saldo;
    }

    // Metodo estatico
    static tipoDeCuenta() {
        return 'Cuenta de ahorro';
    }

    imprimirInfo() {
        console.log(`Titular: ${this._titular}, saldo: ${this._saldo}`);
    }
}

// Creacion de un objeto
const cuenta1 = new CuentaBancaria('Emanuel',2800);
cuenta1.imprimirInfo();
console.log(CuentaBancaria.tipoDeCuenta());
