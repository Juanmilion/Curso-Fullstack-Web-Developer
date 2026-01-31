// cypress/e2e/legal.cy.js

// Test de aceptación para la funcionalidad de condiciones legales
describe("Aceptación de condiciones legales", () => {

  // Antes de cada test, visitamos la página
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/modulo-4-testing/ejercicio2/index.html");
  });

  // Test para verificar la funcionalidad de mostrar y aceptar el texto legal
  it("muestra el texto legal y permite aceptar las condiciones", () => {

    cy.get("#legal-text").should("not.be.visible");
    cy.get("#accept-legal").should("not.be.visible");
    cy.get("#accept-message").should("not.be.visible");

    cy.get("#show-legal").click();

    cy.get("#legal-text").should("be.visible");
    cy.get("#accept-legal").should("be.visible");

    cy.get("#accept-legal").click();

    cy.get("#accept-message").should("be.visible");
  });

});
