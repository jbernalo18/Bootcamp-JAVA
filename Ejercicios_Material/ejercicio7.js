/*
Inventario de Tienda (Arreglo)
*/

let inventario =["laptop","mouse","teclado","monitor","cable HDMI"]; // declaramos el array 

console.log(`Inventario completo: ${inventario}`); // Imprime el arreglo completo: 
console.log(`Primer elemento: ${inventario[0]}`); //Imprime el primer elemento mediante el indice 0
console.log(`Último elemento: ${inventario[inventario.length - 1]}`); //Imprime el último elemento mediante el indice 4
inventario.push("webcam"); //Se agrega elemento mediante metodo .push
console.log(`Después de push('webcam'): ${inventario}`); //Se imprime array luego del push
let elementoEliminado = inventario.pop(); // Eliminar ultimo elemento con metodo pop y guardarlo en una variable 
console.log(`Elemento eliminado: ${elementoEliminado}`); //Imprimimos la variable solo con el elemento eliminado 
console.log(`Después de .pop(): ${inventario}`); //Imprimimos array luego de aliminar el ultimo elemento 
inventario.unshift("audifonos"); //Agregamos un elemento al inicio mediante unshift
console.log(`Después de .unshift(): ${inventario}`); //Imprimimos array luego de añadir al inicio un elemento
let elementoEliminado2 = inventario.shift(); // Se elimina el primer elemen del array
console.log(`Elemento eliminado: ${elementoEliminado2}`); //Imprimimos la variable solo con el elemento eliminado 
console.log(`Después de .shift(): ${inventario}`); // Imprimimos array luego de eliminar el ultimo elemento
console.log(`Total elementos: ${inventario.length}`); //Imprimimos el total de elemntos con el metodo length





