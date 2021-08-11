var rango1;
var rango2;
var numero;
var rangoNumerico;
var mensaje;
rango1 = parseInt(prompt("ingrese un el valor inicial del rango numerico"));
rango2 = parseInt(prompt("ingrese un el valor final del rango numerico, este debe tener una diferencia de 5 numeros"));
rangoNumerico = rango2 - rango1;

if (rango1 > rango2) {
    alert("el primer numero que ingresas debe ser menor que el segundo");
} else {
    if(rangoNumerico < 5)  {
        alert ("Por favor introduzca un rango numerico mayor a 5");
    }
    else {
        do {
            numero = parseInt(prompt("ingrese un numero"));
            if (numero >= rango1 && numero <= rango2 & numero % 2 === 0) {
                alert(`tu numero: ${numero} esta dentro del rango y es par`);
            }
            else {
                if (numero >= rango1 && numero <= rango2) {
                    alert(`tu numero: ${numero} esta dentro del rango`);
                }
                else {
                    if (numero % 2 !== 0) {
                        alert(`tu numero: ${numero} esta fuera del rango y es impar`);
                    }
                    else {
                        alert(`el numero: ${numero} esta fuera del rango`);
                    }
                }
            }
        } while (confirm("quiere seguir ingresando numeros?"));
    }

}

