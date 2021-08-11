// declaramos las variables

var numero1;
var numero2;
var operador;


// solicimtamos que el usurio ingrese los datos pedidos

numero1  = parseFloat(prompt("Ingrese un numero"));
numero2  = parseFloat(prompt("Ingrese otro numero"));
operador = prompt("ingrese un operador suma (+), resta (-), multiplicacion (*), division (/)");

if (operador === "+")
{
    numero1 + numero2;
    alert ("el resultado es: " + numero1 + numero2);
}
else
{
    if (operador === "-")
    {
        numero1 - numero2;
        alert ("el resultado es: " + numero1 - numero2);
    }
    else
    {
        if (operador === "*")
        {
            numero1 * numero2;
            alert ("el resultado es: " + numero1 * numero2);
        }
        else
        {
            if (operador === "/")
            {
                numero1 / numero2;
                alert ("el resultado es: " + numero1 / numero2);
            }
        }
       
        
    }
    
}
