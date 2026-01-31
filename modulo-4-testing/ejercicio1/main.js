// main.js

const usuarios = [
  { dni: "12345678A", nombre: "Juan", edad: 30 },
  { dni: "87654321B", nombre: "María", edad: 25 },
  { dni: "11223344C", nombre: "Carlos", edad: 40 }
];

function buscarUsuarioPorDni(dni) {
  const usuario = usuarios.find(user => user.dni === dni);

  if (!usuario) {
    return "No existen coincidencias";
  }

  return usuario;
}

module.exports = {
  usuarios,
  buscarUsuarioPorDni
};
