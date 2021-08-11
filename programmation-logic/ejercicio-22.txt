var numero1;
var mensaje;

for(var i = 0; i < 3; i++){
    numero1 = parseInt(prompt("ingrese un numero"));
    if (numero1 % 3 === 0 && numero1 % 5 === 0)  
    {
    mensaje = `el numero ${numero1} es divisible por 3 y por 5`;
    }
    else
    {
        if (numero1 % 5 === 0)
        {
            mensaje = `el numero ${numero1} es divisible por 5`;
        }
        else {
            if (numero1 % 3 === 0 )
            {
            mensaje = `el numero ${numero1} es divisible por 3`;
            }
            else
            {
                mensaje = `el numero ${numero1} no es divisible por ninguno`;
                
            }
        }
}
    alert(mensaje);
}
