const prompt = require('prompt-sync')();

let listaNombres = []; 

for (let i=0; i<=4; i++){
let nombreSolicitado2 = prompt("ingrese nombre: "); 
listaNombres.push(nombreSolicitado2); 
}
for (let i= 0 ; i< listaNombres.length; i++){

let nombreActual = listaNombres[i];
   console.log(`Posición ${i} de la lista :  ${nombreActual}`);
}


