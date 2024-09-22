// Ejercicio 3: Evaluar el desempleo de un empleado segun su puntaje

let puntaje = 100;
 
//Evaluacion del desempleo usando if, else if, else
if (puntaje >= 90) {
    console.log("Desempeño excelente.");
} else if(puntaje >=75) {
    console.log("Desempeño bueno.");
} else if(puntaje >= 60){
    console.log("Desempeño aceptable");
}else{
    console.log("Desempeño insufciente");
}