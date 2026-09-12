/*
 Precio con IVA
*/

//declaramos las variables

let precioProducto = 50000, porcentajeIVA= 19;

let valorIVA =  ( precioProducto * porcentajeIVA / 100);
let PrecioTotal = (precioProducto + valorIVA);
console.log("El precio del producto es: " +"$"+precioProducto);
console.log("El valor del IVA es: "+"$"+valorIVA);
console.log("El precio total con IVA es: "+"$"+PrecioTotal);



