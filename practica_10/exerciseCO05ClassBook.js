class Libro {
    constructor(titulo, autor, año) {
        this._titulo = titulo;
        this._autor = autor;
        this._año = año;    
    }

    resumen(){
        console.log(`${this._titulo} del autor ${this._autor}, publicado en el año ${this._año}`);   
    }
}

const libro1 = new Libro('Cien años de soledad','Gabriel Garcia Marquez',1967);
libro1.resumen();