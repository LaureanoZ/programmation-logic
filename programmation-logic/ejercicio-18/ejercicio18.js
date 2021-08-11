// declaramos variables

var numeroRango1;
var numeroRango2;
var numero;
var mensaje;

// pedimos al usuario que introduzca los numeros




numeroRango1 = parseInt(prompt("Ingrese un numero para inicializar el rango entre dos numeros"));
numeroRango2 = parseInt(prompt("Ingrese un numero para finalizar el rango entre dos numeros"));
numero       = parseInt(prompt("ingrese un numero"));





if (numero >= numeroRango1 && numero <= numeroRango2 & numero % 2 === 0)
{
    mensaje = "tu numero esta dentro del rango y es par";
}
else
{
    if (numero >= numeroRango1 && numero <= numeroRango2)
    {
        mensaje = "tu numero esta dentro del rango";
    }    
    else
    {
        if(numero % 2 !== 0)
        {
            mensaje = "tu numero esta fuera del rango y es impar";
        }
        else
        {
            mensaje = "tu numero esta fuera del rango";
        }
    }
}


alert = mensaje