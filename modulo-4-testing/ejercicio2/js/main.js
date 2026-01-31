// js/main.js

// Función para mostrar el texto legal y el botón de aceptar
function showLegalText() {
  document.getElementById("legal-text").style.display = "block";
  document.getElementById("accept-legal").style.display = "inline-block";
}

// Función para aceptar el texto legal
function acceptLegalText() {
  document.getElementById("accept-message").style.display = "block";
}
