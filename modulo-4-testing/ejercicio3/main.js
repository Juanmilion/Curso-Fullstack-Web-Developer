// main.js

// Función que convierte un objeto Date a un string con el formato "día de la semana, dd/mm/yyyy"
function formatFecha(fecha) {
  const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const diaSemana = dias[fecha.getDay()];
  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const año = fecha.getFullYear();
  return `${diaSemana}, ${dia}/${mes}/${año}`;
}

// Exportamos la función para poder testearla
module.exports = { formatFecha };
