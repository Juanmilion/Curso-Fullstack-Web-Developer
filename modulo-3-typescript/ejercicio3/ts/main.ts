// Interfaz para datos comunes del formulario de inscripción
interface Formulario {
    nombre: string;
    apellidos: string;
    email: string;
}

// Clase que implementa la interfaz Formulario y añade campos específicos para la inscripción a un curso
class InscripcionCurso implements Formulario {
    nombre: string;
    apellidos: string;
    email: string;
    curso: string;
    fechaInscripcion: Date;

    // Constructor
    constructor(nombre: string, apellidos: string, email: string, curso: string, fechaInscripcion: Date) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.curso = curso;
        this.fechaInscripcion = fechaInscripcion;
    }

    // Métodos get
    getNombre(): string { return this.nombre; }
    getApellidos(): string { return this.apellidos; }
    getEmail(): string { return this.email; }
    getCurso(): string { return this.curso; }
    getFechaInscripcion(): Date { return this.fechaInscripcion; }

    // Métodos set
    setNombre(nombre: string): void { this.nombre = nombre; }
    setApellidos(apellidos: string): void { this.apellidos = apellidos; }
    setEmail(email: string): void { this.email = email; }
    setCurso(curso: string): void { this.curso = curso; }
    setFechaInscripcion(fecha: Date): void { this.fechaInscripcion = fecha; }
}


const inscripcion1 = new InscripcionCurso(
    "Juanma",
    "Guerrero",
    "juanma@example.com",
    "Fullstack Web Developer",
    new Date("2026-01-21")
);

// Ejemplos de uso de los métodos
console.log(inscripcion1.getNombre());
console.log(inscripcion1.getApellidos());
console.log(inscripcion1.getEmail());
console.log(inscripcion1.getCurso());

inscripcion1.setCurso("Frontend Developer");
console.log(inscripcion1.getCurso());
