/*
Métodos de Strings
*/

let texto ="  JavaScript es Genial  "; // declaramos la variable 
console.log("Texto: " + texto); // Imprime el texto original llamando la variable texto
console.log("Texto sin espacios al inicio y al final: " + texto.trim()); //metodo .trim() para eliminar espacios al inicio y al final
console.log("Texto en MAYUS: " + texto.trim().toUpperCase()); //metodo .toUppercase() para convertir texto en MAYUS
console.log("Texto en minuscula: " +  texto.trim().toLowerCase()); //metodo .toUppercase() para convertir texto en minusculas
console.log("Longuitud de texto: " + texto.length);
console.log("¿Incluye 'Genial'?: " + texto.includes("Genial"));









