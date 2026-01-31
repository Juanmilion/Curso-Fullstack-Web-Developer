// __test__/main.test.js

// Importamos la función a testear
const { formatFecha } = require('../main.js');

// Tests para la función formatFecha
test('Convierte un objeto Date a string "día de la semana, dd/mm/yyyy"', () => {
  const fecha = new Date('2026-01-31'); // ejemplo
  // Comprobamos que el formato es el esperado
  expect(formatFecha(fecha)).toBe('sábado, 31/01/2026');
});
