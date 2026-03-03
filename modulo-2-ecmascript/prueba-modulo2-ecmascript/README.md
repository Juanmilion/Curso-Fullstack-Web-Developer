# 📘 Prueba Módulo 2 – ECMAScript 2015

## 📌 Descripción

Proyecto realizado para la práctica del Módulo 2 del curso de formación, enfocado en las novedades introducidas en ECMAScript 2015 (ES6).

El objetivo principal es aplicar:

- Clases en JavaScript
- Instanciación de objetos
- Promesas (Promise)
- Uso de resolve y reject
- Patrón async-await
- Manejo de errores con try-catch

---

## 🧠 Objetivo del Proyecto

Desarrollar una aplicación sencilla que permita:

1. Recoger los datos de un alumno mediante un formulario.
2. Crear una instancia de la clase `Alumno`.
3. Utilizar una función que devuelve una Promesa.
4. Consumir dicha promesa mediante `async-await`.
5. Gestionar correctamente los posibles errores.

---

## 🏗️ Estructura del Proyecto

```
modulo2-ecmascript/
│
├── index.html
└── app.js
```
- **index.html** → Contiene la estructura del formulario.
- **app.js** → Contiene la lógica del programa (clase, promesa y funciones asíncronas).

---

## 🧩 Tecnologías Utilizadas

- HTML5
- JavaScript (ECMAScript 2015)

---

## ⚙️ Funcionamiento

1. El usuario introduce:
   - Nombre
   - Edad
   - Curso

2. Al enviar el formulario:
   - Se evita la recarga con `event.preventDefault()`.
   - Se ejecuta una función asíncrona.
   - Se crea una promesa que valida los datos.
   - Si los datos son correctos → `resolve()` devuelve una instancia de `Alumno`.
   - Si faltan datos → `reject()` devuelve un mensaje de error.
   - Se muestra el resultado en pantalla.

---

## 📚 Conceptos Aplicados

### 🔹 Clase ES6

Se define una clase `Alumno` con:

- Constructor
- Método `mostrarInfo()`

Ejemplo:

```
class Alumno {
  constructor(nombre, edad, curso) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
  }

  mostrarInfo() {
    return `${this.nombre} tiene ${this.edad} años y está cursando ${this.curso}`;
  }
} 
```

---

### 🔹 Promesa

Se implementa una función que retorna:

```
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
```

Estados posibles de una promesa:

- Pending
- Fulfilled (resolve)
- Rejected (reject)

---

### 🔹 async-await

Se utiliza una función asíncrona para consumir la promesa:

```
async function manejarFormulario(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const curso = document.getElementById("curso").value;

  try {
    const alumno = await crearAlumnoPromesa(nombre, edad, curso);
    document.getElementById("resultado").textContent = alumno.mostrarInfo();
  } catch (error) {
    document.getElementById("resultado").textContent = error;
  }
}
```

El uso de async-await mejora la legibilidad frente a .then() y .catch().

---

## 🚀 Cómo Ejecutar el Proyecto

(Link al demo)[https://Juanmilion.github.io/prueba-modulo2-ecmascript]

1. Clonar el repositorio:

```
git clone https://github.com/tuusuario/modulo2-ecmascript.git
```
2. Abrir el archivo `index.html` en el navegador.

No requiere servidor ni dependencias externas.

---

## 🎯 Resultado Esperado

- Si los datos son válidos → Se muestra la información del alumno.
- Si falta algún dato → Se muestra un mensaje de error.

---

## 👨‍💻 Autor
Juan Manuel Guerrero Vides
Proyecto realizado como práctica formativa en el módulo de ECMAScript 2015.