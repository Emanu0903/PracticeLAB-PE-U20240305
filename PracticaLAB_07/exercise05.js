// Ejercicio 5: Recorrer un objeto y sus propiedades

const persona = {
    nombre :"Josue",
    edad: 21,
    ciudad: "El Cuco"
};

for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
    
}