// __test__/main.test.js

// Importamos la función a testear
const { buscarUsuarioPorDni } = require("../main");

// Tests para la función buscarUsuarioPorDni
describe("Función buscarUsuarioPorDni", () => {

  test("devuelve el usuario correcto cuando el DNI existe", () => {
    // Llamamos a la función con un DNI existente
    const resultado = buscarUsuarioPorDni("12345678A");

    // Comprobamos que el resultado es el esperado
    expect(resultado).toEqual({
      dni: "12345678A",
      nombre: "Juan",
      edad: 30
    });
  });

  // Test adicional para el caso en que el DNI no existe
  test("devuelve mensaje cuando el DNI no existe", () => {
    const resultado = buscarUsuarioPorDni("00000000Z");

    // Comprobamos que el resultado es el mensaje esperado
    expect(resultado).toBe("No existen coincidencias");
  });

});
