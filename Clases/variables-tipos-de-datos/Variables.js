/*
Objetivos
Explicar variables en JS
Introducir ipos de datos primitivos en JS
Introducir estructuras de datos 

-Variable
- Number
- String
- Concatenar
- Boolean
- Array
- Object

*/ 

//Let: Asignar variable
let nombre = "Maria"; // creamos variable tipo string
console.log(nombre);

nombre = "Julian"; //reasignar valor de la variable
console.log(nombre);

//Constante : Espacio en memoria que no va cambiar
const PI = 3.1416;
console.log(PI);

//var vs let
/*
con var se puede declarar pero es inseguro
puede acceder a la variable asi este fuera del bloque 

operadores matemticos: 
+ suma
- resta
* multplicacion
/ division

concatenar 
se usa el "+"
*/

let nombreUsuario = "Juliana"
let apellidoUsuario = "Bernal"

let concatenacion = nombreUsuario + " " + apellidoUsuario ;
console.log(typeof concatenacion, concatenacion);


// boolean
let sumaBoolean = true + false;
console.log(typeof +  sumaBoolean); 

/*
undefined y null

*/
let saldoCuentaBancaria; //undefined
console.log(saldoCuentaBancaria);

let valorNulo = null; //vacio 