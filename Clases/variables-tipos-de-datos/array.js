// Array listas

//declaramos la variable donde se va guardar
//listas con []
//separados por ,
// typeof objeto no dice array
// indice empieza en 0
// Las listas tienen metodos con la notacion . 
//                      0        1       2    
let listaCompras = ["huevos", "leche","arepas"]
console.log(listaCompras[0]); 

listaCompras.push("Manzanas"); 
console.log(listaCompras); 

let listaCompras2 = ["Agua", "peras"]; 

// shift(): Elimina el primer elemento de la lista y te lo devuelve.
console.log(listaCompras.concat(listaCompras2));
let mascotas = ["Perro", "Gato", "Loro"];
let primero = mascotas.shift(); 
// primero vale "Perro" y la lista queda: ["Gato", "Loro"]