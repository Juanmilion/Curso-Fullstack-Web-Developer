# Módulo 5 – Node.js y Express

Este módulo tiene como objetivo practicar la creación de **proyectos Node.js**, el uso de **módulos**, la gestión de dependencias, y la implementación de **servidores HTTP con Express**, incluyendo rutas y respuestas condicionadas a parámetros.

## 📌 Objetivos del módulo
- Comprender la estructura de un proyecto Node.js y cómo manejar dependencias.
- Usar nodemon para ejecutar proyectos en modo desarrollo.
- Crear y utilizar módulos propios en Node.js.
- Implementar un servidor Express para atender peticiones HTTP.
- Gestionar rutas y enviar archivos o respuestas condicionales.
- Ejecutar y comprobar el funcionamiento de los proyectos.

---

## 📂 Ejercicios realizados

### 🧩 Ejercicio 1 – Proyecto Node.js y uso de módulos
- Creación de un proyecto Node.js en el directorio `ejercicio1`.
- Configuración de nodemon como dependencia de desarrollo.
- Creación de un módulo `age.js` dentro del directorio `utils`.
- Implementación de una función que calcula la edad a partir de la fecha de nacimiento.
- Importación y uso de la función en `app.js` para mostrar resultados en consola.
- Ejecución del proyecto mediante el script configurado y comprobación de los resultados.

### 📄 Ejercicio 2 – Node.js y Express con envío de archivos
- Creación de un proyecto Node.js en el directorio `ejercicio2`.
- Configuración de nodemon y Express como dependencias.
- Creación de un directorio `files` con archivos `info.txt` y un PDF de ejemplo.
- Implementación de un servidor Express en `app.js`.
- Creación de dos rutas GET que devuelven los archivos del directorio `files`.
- Ejecución del proyecto con nodemon y verificación de que los archivos se envían correctamente.

### 🌐 Ejercicio 3 – Rutas GET con parámetros y respuestas condicionales
- Creación de un proyecto Node.js en el directorio `ejercicio3`.
- Instalación y configuración de nodemon y Express.
- Implementación de un servidor Express en `app.js`.
- Creación de una ruta GET que recibe un parámetro y genera al menos dos respuestas distintas según su valor.
- Ejecución del proyecto y comprobación de que las respuestas varían según el parámetro recibido.
