// declaramos variables


var numero;
var mensaje;

// solicitamos al usuario que ingrese un numero


numero = parseInt(prompt("Ingrese un numero entero"));


if (numero === 0)
{
    mensaje = "el numero es 0";
}
else
{
    if (numero%2 ===0)
    {
        mensaje="el numero es par";
    }
    else
    {
        mensaje = "el numero es impar";
    }
}

alert (mensaje);
