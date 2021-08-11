// declaramos las variables
var numero;
var mensaje;

// solicitamos al usuria que ingrese un numero

numero = parseInt(prompt("ingrese un numero"));

if (numero % 3 === 0 && numero % 5 === 0)  
{
    mensaje = "el numero es multiplo de 3 y de 5";
}
else
{
    if (numero % 5 === 0)
    {
        mensaje = "el numero es multiplo de 5";
    }
    else (numero % 3 === 0 )
    {
        mensaje = "el numero es multiplo de 3";
    }
}

alert (mensaje)
  