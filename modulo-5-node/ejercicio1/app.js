// app.js

// Importar la función calcularEdad desde el módulo utils/age.js
const calcularEdad = require('./utils/age');

// Ejemplo de uso de la función calcularEdad
const fechaNacimiento = '2002-09-16';
const edad = calcularEdad(fechaNacimiento);

// Mostrar la edad calculada en la consola
console.log(`La edad calculada es: ${edad} años`);
