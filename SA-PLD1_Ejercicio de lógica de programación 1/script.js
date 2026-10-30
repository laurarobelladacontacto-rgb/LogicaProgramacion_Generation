// 1. Pedir los numeros (devuelve texto,  usamos Number)
const num1 = Number(prompt("Ingresa el primer número:"));
const num2 = Number(prompt("Ingresa el segundo número:"));
const num3 = Number(prompt("Ingresa el tercer número:"));

// mensajes en la página
const resultado = document.getElementById("resultado");

// 2. Validar que los tres sean numeros
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  resultado.innerHTML = "Error: debes ingresar solo números.";
  console.log("Error: debes ingresar solo números.");

// 3.  los tres son iguales
} else if (num1 === num2 && num2 === num3) {
  resultado.innerHTML = "Los números son iguales.";
  console.log("Los números son iguales.");

}