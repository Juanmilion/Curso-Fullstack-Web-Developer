// Clase que implementa la interfaz Formulario y añade campos específicos para la inscripción a un curso
var InscripcionCurso = /** @class */ (function () {
    // Constructor
    function InscripcionCurso(nombre, apellidos, email, curso, fechaInscripcion) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.curso = curso;
        this.fechaInscripcion = fechaInscripcion;
    }
    // Métodos get
    InscripcionCurso.prototype.getNombre = function () { return this.nombre; };
    InscripcionCurso.prototype.getApellidos = function () { return this.apellidos; };
    InscripcionCurso.prototype.getEmail = function () { return this.email; };
    InscripcionCurso.prototype.getCurso = function () { return this.curso; };
    InscripcionCurso.prototype.getFechaInscripcion = function () { return this.fechaInscripcion; };
    // Métodos set
    InscripcionCurso.prototype.setNombre = function (nombre) { this.nombre = nombre; };
    InscripcionCurso.prototype.setApellidos = function (apellidos) { this.apellidos = apellidos; };
    InscripcionCurso.prototype.setEmail = function (email) { this.email = email; };
    InscripcionCurso.prototype.setCurso = function (curso) { this.curso = curso; };
    InscripcionCurso.prototype.setFechaInscripcion = function (fecha) { this.fechaInscripcion = fecha; };
    return InscripcionCurso;
}());
var inscripcion1 = new InscripcionCurso("Juanma", "Guerrero", "juanma@example.com", "Fullstack Web Developer", new Date("2026-01-21"));
// Ejemplos de uso de los métodos
console.log(inscripcion1.getNombre());
console.log(inscripcion1.getApellidos());
console.log(inscripcion1.getEmail());
console.log(inscripcion1.getCurso());
inscripcion1.setCurso("Frontend Developer");
console.log(inscripcion1.getCurso());
