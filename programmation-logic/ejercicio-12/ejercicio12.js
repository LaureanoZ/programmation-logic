// nombramos variables
var horasTrabajadas;
var valorHora;
var sueldoMensual;
// solicitamos al usuario que asigne sus horas trabajadas y el valor de las mismas

horasTrabajadas = parseInt(prompt("Indique las horas trabajadas"));
valorHora       = parseInt(prompt("Indique el valor de de la hora"));
sueldoMensual   = horasTrabajadas*valorHora;

// mostramos en pantalla el sueldo mensual del trabajador

alert("Su sueldo mensual es de" + " " + sueldoMensual)