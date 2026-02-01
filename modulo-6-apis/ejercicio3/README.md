# Ejercicio 3 – Node.js y Express: Operaciones CRUD

Este ejercicio tiene como objetivo comprobar las **operaciones CRUD** (Crear, Leer, Actualizar, Borrar) en un proyecto **Node.js** con **Express**.

---

## 📌 Objetivos

- Inicializar un proyecto Node.js.
- Instalar y configurar una dependencia de desarrollo (`nodemon`).
- Crear rutas propias en Express (`/books`) con métodos **GET**, **POST**, **PUT** y **DELETE**.
- Devolver datos en formato JSON desde cada ruta.
- Implementar validación de datos en el método POST.
- Responder con códigos de estado adecuados (`201` para creación, `400` para error, `404` si no existe).
- Ejecutar el proyecto con nodemon y comprobar las peticiones con Postman.

---

| Método | URL | Body (JSON) | Descripción |
|--------|-----|-------------|-------------|
| GET    | /books | — | Devuelve la lista de libros |
| POST   | /books | `{ "title": "Libro X", "author": "Autor Y" }` | Añade un nuevo libro |
| PUT    | /books/:id | `{ "title": "Nuevo título" }` | Actualiza un libro por su id |
| DELETE | /books/:id | — | Elimina un libro por su id |