class Alumno {
    // Constructor para inicializar las propiedades del alumno
    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    // Método para mostrar la información del alumno
    mostrarInfo() {
        return `${this.nombre} tiene ${this.edad} años y está cursando ${this.curso}`;
    }
}
// Método para crear un alumno utilizando una promesa
function crearAlumnoPromesa(nombre, edad, curso) {
    return new Promise((resolve, reject) => {
        if (nombre && edad && curso) {
            const alumno = new Alumno(nombre, edad, curso);
            resolve(alumno);
        } else {
            reject("Faltan datos para crear el alumno");
        }
    });
}

async function manejarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const curso = document.getElementById("curso").value;

    try {
        const alumno = await crearAlumnoPromesa(nombre, edad, curso);
        document.getElementById("resultado").textContent = alumno.mostrarInfo();
        console.log(alumno.mostrarInfo());
    } catch (error) {
        document.getElementById("resultado").textContent = error;
    }
}

document.getElementById("formAlumno").addEventListener("submit", manejarFormulario);
