/*
Generador de Nombre de Usuario
*/

// declaramos las variables 
let primerNombre ="Carlos";
let primerApellido ="Gómez"; 
let añoNacimiento =1998;

//Primera letra del nombre (minúscula)
//Apellido completo (minúscula)
//Últimos dos dígitos del año de nacimiento
console.log(`El nombre de usuario es: ${primerNombre[0].toLowerCase()}${primerApellido.toLocaleLowerCase()}${añoNacimiento%100}`);
