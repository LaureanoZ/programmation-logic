// nombramos variables
var  numero1;
var  numero2;
var  numero3;
var  numero4;
var  suma;
var  promedio;
// pedimos al usuario que de valor numerico a las variables

numero1 = parseInt(prompt("Ingrese un numero"));
numero2 = parseInt(prompt("Ingrese un numero"));
numero3 = parseInt(prompt("Ingrese un numero"));
numero4 = parseInt(prompt("Ingrese un numero"));

suma        = numero1 + numero2 + numero3 + numero4;
promedio    = suma / 4;

// mostramos la suma y el promedio en pantalla

alert("La suma es" + " " + suma + " " + "y el promedio es" + " " + promedio);

