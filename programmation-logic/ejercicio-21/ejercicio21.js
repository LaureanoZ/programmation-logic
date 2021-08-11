// declaramos las variables

var categoria;
var sueldoBasico;
var horasExtra;
var mensaje;

// solicitamos al usuario que ingrese los datos

categoria    = parseFloat(prompt("ingrese su categoria"));
sueldoBasico = parseFloat(prompt("ingrese su sueldo basico mensual"));
horasExtra   = parseInt(prompt("ingrese sus horas extra"));

if (categoria === 1 && horasExtra >=20)
{
    mensaje = "sue sueldo es de:" + " " + sueldoBasico + 500 + "no supera los $4000";
}
else
{
    if(categoria === 2)
    {
        mensaje = "su sueldo es de:" + " " + sueldoBasico; + "no supera los $4000"
    }
    else
    {
        if(categoria === 3 && horasExtra >= 30 )
        {
            mensaje = "su sueldo es de:" + " " + sueldoBasico + 1000 + "Su sueldo si supera los $4000"
        }
        else 
        {
            mensaje = "usted no pertenece a ninguna categoria, su sueldo es:" + " " + sueldoBasico;
        }
    }
}





alert (mensaje);