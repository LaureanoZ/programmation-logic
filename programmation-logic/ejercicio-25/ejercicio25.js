var notas;
var desaprueba = 0;
var aprueba    = 0;
var contador   = 0;
var porcentajeAprobados;
var porcentajeDesaprobados;
var sumaPromedio;
var promedioFinal;

do {
    notas = parseFloat(prompt("ingrese la nota"));
    do {
        
        if (notas < 4 && notas >= 1) {
            desaprueba += notas;
        }
        else if (notas >= 4 && notas <= 10) {
            aprueba += notas;

        }       
    } while (notas < 1 || notas > 10)


    contador++;

} while (confirm("quieres agregar una nota?"))


porcentajeAprobados = aprueba / contador * 100;
porcentajeDesaprobados = desaprueba / contador * 100;
sumaPromedio = aprueba + desaprueba;
promedioFinal = sumaPromedio / contador;

alert(`El porcentaje de alumnos aprobados es de ${porcentajeAprobados} `);
alert(`El porcentaje de alumnos desaprobados es de ${porcentajeDesaprobados}`);
alert(`El promedio general de todas las notas es de ${promedioFinal} `);






