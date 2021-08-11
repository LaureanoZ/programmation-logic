// nombramos variables
var valorHora;
var horasTrabajadas;
var aniosAntiguedad;
var segurosVendidos;
var seguroCaro;
var sueldoMensual;
var seguroCalculo;
var seguroCaroCalculo;
var aniosAntiguedadCalculo;
var seguroTotal;
var seguroCaroTotal;
var aniosAntiguedadTotal;
var sueldoMensualTotal;
var promedioHoras;

// pedimos al usuario que ingrese los valores

valorHora              = parseInt(prompt("ingrese el valor de la hora"));
horasTrabajadas        = parseInt(prompt("ingrese las horars trabajadas"));
aniosAntiguedad        = parseInt(prompt("ingrese sus años de antiguedad"));
segurosVendidos        = parseInt(prompt("ingrese los seguros vendidos"));
seguroCaro             = parseInt(prompt("ingrese los seguros caros vendidos"));
sueldoMensual          = valorHora * horasTrabajadas;
seguroCalculo          = (sueldoMensual * 25) / 100;
seguroCaroCalculo      = (sueldoMensual * 50) / 100;
aniosAntiguedadCalculo = (sueldoMensual * 15) / 100;
seguroTotal            = segurosVendidos * seguroCalculo;
seguroCaroTotal        = seguroCaro * seguroCaroCalculo;
aniosAntiguedadTotal   = aniosAntiguedad * aniosAntiguedadCalculo;
sueldoMensualTotal     = sueldoMensual + seguroTotal + seguroCaroTotal + aniosAntiguedadTotal;
promedioHoras          = sueldoMensualTotal / horasTrabajadas;

// Mostramos en pantalla el Sueldo mensual, junto al promedio de ganancia por horas

alert("Su ganancia mensual es de" + " " + sueldoMensualTotal + " " + "y el promedio de sueldo por hora es de" + " " + promedioHoras);


