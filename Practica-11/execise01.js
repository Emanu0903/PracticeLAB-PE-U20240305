let objeto ={
    //Metodo get
    get propiedad(){
        return 'Valor de la propiedad'
    },
    //Metodo set
    set propiedad(valor){
        console.log(`Asignado el valor: ${valor}`);
        
    },
};

//Usando el get
console.log(objeto.propiedad);
//Usando el set
objeto.propiedad = 'Nuevo valor';

