// // Variables globales
// let nombre = "Juanma";
// let apellidos = "Guerrero";

// function comprobarEdad(edad) {

//     if (edad >= 18) {
//         let mensaje = "Bienvenido " + nombre + " " + apellidos;
//     } else {
//         let mensaje = nombre + " " + apellidos + ", no puedes acceder.";
//     }

//     // ❌ ERROR: mensaje no está definido en este ámbito
//     console.log(mensaje);
// }

// // Llamada a la función
// comprobarEdad(20);

// Variables globales
let nombre = "Juanma";
let apellidos = "Guerrero";

function comprobarEdad(edad) {

    let mensaje; // ✅ Declarada en el ámbito de la función

    if (edad >= 18) {
        mensaje = "Bienvenido " + nombre + " " + apellidos;
    } else {
        mensaje = nombre + " " + apellidos + ", no puedes acceder.";
    }

    // ✅ Ahora sí es accesible
    console.log(mensaje);
}

// Llamada a la función
    console.log("19"); // Probamos con 19 años
    comprobarEdad(19);
console.log("16"); // Probamos con 16 años
comprobarEdad(16);

