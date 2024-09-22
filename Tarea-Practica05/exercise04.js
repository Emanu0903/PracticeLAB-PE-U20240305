let plan = "Basico";

switch (plan) {
    case "Basico":
        console.log("Plan Basico: acceso limitado a contenido");
        break;
    case "Estandar":
        console.log("Plan estandar: Acceso a la mayoria del contenido");
        break;
    case "Premium":
        console.log("Plan Premium: Acceso ilimitado a todo el contenido.");
        break;        
    default:
        console.log("Plan no valido");
        
}