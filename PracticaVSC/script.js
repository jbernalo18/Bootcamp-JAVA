const herramienta = require("readline");
//readline es para hacer preguntas y mostraslas en la terminal
// se crea una varible fija y se llama a la herramienta readline
// Se carga la herramienta en la variable

const interfaz = herramienta.createInterface({
  input: process.stdin,
  output: process.stdout
});
 // process.studin es lo que escribimos en la terminal
 // process.stdout es lo que el programa muestra


const preguntas = [
  "Ingresa un animal: ",
  "Ingresa una comida: "
];

let respuestas = [];

const Preguntar = (indice) => {
  if (indice < preguntas.length) {

    interfaz.question(preguntas[indice], (respuesta) => {
      respuestas.push(respuesta);
      Preguntar(indice + 1);
    });

  } else {

    const [animal, comida] = respuestas;

    console.log("\n--- ANIMALES ---\n");
    console.log(`El ${animal} come ${comida} muy feliz`);

    interfaz.close();
  }
};

Preguntar(0);