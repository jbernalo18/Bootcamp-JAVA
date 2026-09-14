/*
Carrito de Compras (Arreglo de Objetos)
*/

let carrito =[
{producto:"Laptop",precio:2500000,cantidad:1},
{producto:"Mouse",precio:80000,cantidad:2},
{producto:"Teclado",precio:150000,cantidad:1}
];

console.log("Carrito completo:", carrito);// accedemos al carrito completo llamaando el arreglo completo
console.log("Primer producto:",carrito[0].producto); //accedemos al primer prodcuto mediante su indice[0] y el item producto
console.log("Precio segundo prodcuto:",carrito[1].precio); //accedemos al precio segundo producto mediante su indice [1] y el item precio
console.log("Cantidad del tercer prodcuto:", carrito[2].cantidad); // accedemos a la cantidad del tercer producto mediante su indice [2] y el item cantidad
carrito.push({producto:"Monitor", precio: 800000, cantidad: 1 }); // Agregamos un nuevo producto al arreglo mediante push
console.log("Nuevo producto agregado:",carrito[3].producto); //a/accedemos al nombre del tercer producto mediante su indice [3] y el item producto

// declaramos las variables donde se guardan las multiplicaciones para luego sumarlas
let totalProd1 = carrito[0].cantidad * carrito[0].precio
let totalProd2 = carrito[1].cantidad * carrito[1].precio
let totalProd3 = carrito[2].cantidad * carrito[2].precio
let totalProd4 = carrito[3].cantidad * carrito[3].precio

let totalPagar = totalProd1+totalProd2+totalProd3+totalProd4

console.log("Total a pagar:",totalPagar);
