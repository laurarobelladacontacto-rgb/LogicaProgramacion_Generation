//Laura ejercio lógica 2

/*Algoritmo: es la lista ordenada de pasos para resolver el problema.
1. Pedir la temperatura al usuario
2. Mientras lo escrito no sea un número válido:
      mostrar mensaje de error
      volver a pedir la temperatura
3. Calcular Fahrenheit = (C × 9/5) + 32
4. Calcular Kelvin = C + 273.15
5. Mostrar ambos resultados*/


// Trae el paquete que nos permite pedir datos en la terminal
const prompt = require("prompt-sync")();



// Constante con el mensaje que se muestra al pedir el dato
const mensaje = "Ingresa la temperatura en grados Celsius:";

// Funcion que revisa si el texto ingresado es un numero valido
function esNumeroValido(texto) {

  // Filtro 1: el usuario presiono "Cancelar"
  if (texto == null) {
    return false;
  }

  // Filtro 2: el campo esta vacio o solo tiene espacios
  if (texto.trim() == "") {
    return false;
  }

  // Filtro 3: el texto no se puede convertir a numero
  if (isNaN(Number(texto))) {
    return false;
  }
  // Paso los tres filtros: es valido
  return true;
}

// 1. Pedir la temperatura al usuario
let entrada = prompt(mensaje);

// 2. Repetir la pregunta mientras el dato no sea valido
while (!esNumeroValido(entrada)) {
  console.log("Error: debes ingresar un número válido.");
  entrada = prompt(mensaje);
}

// 3. Convertir el texto a numero
const celsius = Number(entrada);

// 4. Hacer las conversiones
const fahrenheit = (celsius * 9 / 5) + 32;
const kelvin = celsius + 273.15;

// 5. Mostrar los resultados en la consola
console.log("Grados Kelvin: " + kelvin);
console.log("Grados Fahrenheit: " + fahrenheit);