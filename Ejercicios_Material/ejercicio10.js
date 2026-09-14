/*
Ficha de Producto (Objeto Anidado
*/


//declaramos el objeto anidado
let producto ={
nombre:"Smartphone Galaxy",
precio:1800000,
disponible:true,
colores:["negro","blanco","azul"],
especificaciones:{
marca:"Samsung",
ram:"8GB",
almacenamiento:"256GB",
camara:"108MP"
},
vendedor:{
nombre:"TechStore",
ciudad:"Bogotá",
calificacion:4.8
  }
};

//imprimimos usando lanoracion punto y El [i] para acceder a los arreglos anidados segun corresponda
// para acceder a cada dato se debe tener en cuenta en que arreglo estamos y llamar el arreglo ppal. al que se quiere acceder
// para acceder  a una lista dentro de arreglo es mediante [i]
console.log("Nombre:",producto.nombre);
console.log("Precio:","$",producto.precio);
console.log("Primer color:",producto.colores[0]);
console.log("Marca:",producto.especificaciones.marca);
console.log("RAM:",producto.especificaciones.ram);
console.log("Cuidad del vendedor:",producto.vendedor.ciudad);
console.log("Caloficación:",producto.vendedor.calificacion);
producto.disponible = false; // cambiamoos el valor de disponible, le asignamos false
console.log("Disponible actualizado:",producto.disponible); //imprimimos disponible actualizado
producto.colores.push("Rojo"); // agregamo sun nuevo color a la lista anidada colores
console.log("Colores actualizados:",producto.colores);
console.log("Producto completo:",producto);
