/*
Perfil de Usuario (Objeto)
*/

//creamos el objeto y los atrubutos
let perfil ={
nombre:"María",
apellido:"López",
edad:28,
profesion:"Diseñadora",
ciudad:"Medellín"
};


console.log("Perfi completo:",perfil); // imprimimos el objeto
console.log("Nombre:",perfil.nombre); //Imprime el nombre usando notación de punto
console.log("Apellido:",perfil["apellido"]); // Imprime el apellido usando notación de corchetes
console.log("Edad actualizada:",perfil.edad=29); // Imprime edad asignando el valor de 29
perfil.hobby = "Fotografía"; // s se agreg atributo hobby y se le asigna fotografia
console.log("Después de agregar hobby:",perfil); // Se imprime objeto luego de agregar atributo
delete perfil.ciudad; // Eliminamos atributo cuidad
console.log("Después de eliminar ciudad:",perfil);

