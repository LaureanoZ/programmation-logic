//declaro variables

var diametro;
var perimetro;
var area;

// pedimos al ususario que ingrese el valor que tendra el diametro del circulo

diametro = parseInt(prompt("ingrese el diametro del circulo"));
perimetro= 3.1416 * diametro;
radio    = diametro / 2;
area     = 3.1416 * (radio ** 2);

alert("El perimetro es:" + " " + perimetro + " " + "y el area es:" + " " + area); 