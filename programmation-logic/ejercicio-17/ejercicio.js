// Declaramos las variables

var letra;
var mensaje;

// Solicitamos que el usuario ingrese una letra

letra = prompt("Ingrese una letra");

if (letra === "a")
{
    mensaje = "tu letra es una vocal y es la primera";
}
else
{
    if (letra === "e")
    {
        mensaje = "tu letra es una vocal y es la segunda";
    }
    else 
    {
        if (letra === "i")
        {
            mensaje = "tu letra es una vocal y es la tercera";
        }
        else
        {
            if (letra === "o")
            {
                mensaje = "tu letra es una vocal y es la cuarta";
            }
            else
            {
                if (letra === "u")
                {
                    mensaje = "tu letra es una vocal y es la quinta";
                }
                else
                {
                    mensaje = "tu letra no es una vocal";
                }
            }
        }
    }
}
alert = mensaje;
