// nombramos las variables
var valorHora;
var horasTrabajadas;
var aniosAntiguedad;
var sueldoMensual;
var aniosAntiguedadCalculo;
var sueldoMensualTotal
var aniosAntiguedadTotal

// pedimos al usuario que ingrese los valores de las variables

valorHora              = parseInt(prompt("Ingrese el valor de la hora"));
horasTrabajadas        = parseInt(prompt("Ingrese la cantidad de horas trabajadas"));
aniosAntiguedad        = parseInt(prompt("Ingrese sus años de antiguedad"));
sueldoMensual          = valorHora * horasTrabajadas;
aniosAntiguedadCalculo = (sueldoMensual * 15) / 100;
aniosAntiguedadTotal   = aniosAntiguedadCalculo * aniosAntiguedad;
sueldoMensualTotal     = valorHora * horasTrabajadas + aniosAntiguedadTotal;

// Mostramos el Saldo mensual, teniendo en cuenta sus años de antigüedad

alert("Su salario mensual sumado a su antigüedad es de:" + " " + sueldoMensualTotal);
