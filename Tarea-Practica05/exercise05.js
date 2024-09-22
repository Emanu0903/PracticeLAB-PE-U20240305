let edad = 30;
let membresia = "VIP";

//Evaluacion de la edad del usuario
if (edad < 18) {
    console.log("Eres menor de edad, puedes acceder a la membresia juvenil");
} else if (edad >= 18 && edad <= 60) {
    console.log("Eres un adulto, puedes acceder a todas las mebresias");
}else{
    console.log("Eres mayor de 60 años, tienes descuentos en las membresias");
}

switch (membresia) {
    case "Basica":
        console.log("Membresia Basica: Acceso a las areas de entrenamiento estandar.");
        break;
    case "Estandar":
        console.log("Membresia Estandar: Acceso a todas las areas de entrenamiento y clases grupales");
        break;
    case "VIP":
        console.log("Membresia VIP: Acceso completo, con beneficios adicionales como spa y entrenadores personalizados");
        break;
                        
    default:
        console.log("Tipo de membresia no valido.");
}