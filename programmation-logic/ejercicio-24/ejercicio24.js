var numero1;
var numero2;
var resultado;
var operador;



do {
    numero1  = parseFloat(prompt("Ingrese un numero"));
    numero2  = parseFloat(prompt("Ingrese otro numero"));
    operador = prompt("ingrese un operador suma (+), resta (-), multiplicacion (*), division (/)");
    if (operador == "+") {
        resultado = numero1 + numero2;
        alert(`El resultado es: ${resultado}`);
    }
    else {
        if (operador == "-") {
            resultado = numero1 - numero2;
            alert(`El resultado es: ${resultado}`);
        }
        else {
            if (operador == "*") {
                resultado = numero1 * numero2;
                alert(`El resultado es: ${resultado}`);
            }
            else {
                if (operador == "/") {
                    resultado = numero1 / numero2;
                    alert(`El resultado es: ${resultado}`);
                }
            }


        }

    }

} while (confirm("Queres volver a realizar otra operacion?"));