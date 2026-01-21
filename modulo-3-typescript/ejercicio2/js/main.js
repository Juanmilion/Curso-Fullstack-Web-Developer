// Función que recibe una Edad y devuelve un string con el formato adecuado
function mostrarEdad(edad) {
    if (typeof edad === "number") {
        // Redondear si es number
        return "Tu edad es ".concat(Math.floor(edad));
    }
    else if (typeof edad === "string") {
        // Concatenar si es string
        return "Tu edad es ".concat(edad);
    }
    else {
        // Si es null
        return "Valor incorrecto";
    }
}
// Ejemplos de uso
console.log(mostrarEdad(29)); // number
console.log(mostrarEdad("treinta")); // string
console.log(mostrarEdad(null)); // null
