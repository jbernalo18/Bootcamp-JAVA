/*
Operadores de Comparación y Lógicos
*/

//declaramos variables y asignamos operadores logicos 
let edad =20;
let tieneEntrada =true;
let esMayorDeEdad = edad >=18;
let puedeIngresar = esMayorDeEdad && tieneEntrada;
let necesitaAcompañante =!esMayorDeEdad ||!tieneEntrada;


//se imprime por medio de interpolación las variables ya comparadas
console.log(`¿Es mayor de edad? ${esMayorDeEdad}`);
console.log(`¿Puede ingresar? ${puedeIngresar}`);
console.log(`¿Necesita acompañante? ${necesitaAcompañante}`);


