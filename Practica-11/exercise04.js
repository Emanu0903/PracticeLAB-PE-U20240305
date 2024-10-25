class Usuario{
    constructor(username){
        this._username = username;
    }
    //Get para obtener el nombre del usuario
    get username(){
        return this._username;
    }

    //set para validar el nombre del usuario
    set username(username){
        if (username.length >= 3) {
            this._username = username;
        }else{
            console.log(`El nombre del usuario ${username} debe de tener al menos 3 caracteres. `);
        }
    }
};

const usuario = new Usuario('Mar',);
console.log(`Nombre valido: ${usuario.username}`);

usuario.username = 'Lalo';
console.log(`Nombre valido : ${usuario.username}`);

