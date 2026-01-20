// Función para calcular la edad a partir de la fecha de nacimiento
const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);

    const diferenciaTiempo = hoy.getTime() - nacimiento.getTime();
    const edad = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365));

    return edad;
};

// Array de usuarios con sus fechas de nacimiento
const usuarios = [
    {
        nombre: "Juanma",
        apellidos: "Guerrero",
        fechaNacimiento: "1995-04-10"
    },
    {
        nombre: "María",
        apellidos: "López",
        fechaNacimiento: "1998-09-22"
    },
    {
        nombre: "Carlos",
        apellidos: "Pérez",
        fechaNacimiento: "2001-01-15"
    },
    {
        nombre: "Lucía",
        apellidos: "Martín",
        fechaNacimiento: "1992-12-03"
    }
];

// Generar el listado de usuarios con sus edades
const listadoUsuarios = usuarios.map((usuario, index) => {
    const edad = calcularEdad(usuario.fechaNacimiento);

    return `${index + 1}. ${usuario.nombre} ${usuario.apellidos} - ${edad} años`;
});

// Mostrar el listado en la consola
console.log(listadoUsuarios);
