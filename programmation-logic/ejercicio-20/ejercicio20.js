// declaramos las variables
var lado1;
var lado2;
var lado3;
var mensaje


// solicitamos al usuario que ingrese los datos pedidos

lado1 = parseFloat(prompt("ingrese el valor del lado 1"));
lado2 = parseFloat(prompt("ingrese el valor del lado 2"));
lado3 = parseFloat(prompt("ingrese el valor del lado 3"));


if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3)
{
    mensaje = "tu triangulo es escaleno";
}
else
{
    if (lado1 === lado2 && lado1 === lado3 && lado2 === lado3)
    {
        mensaje = "tu triangulo es equilatero";
    }
    
    else
    {
       
     mensaje = "tu triangulo es isoceles"
        
    }
}
alert (mensaje);