describe("template spec", () => {
  it("filtering list and open/close dialog with selected item", () => {
    cy.visit("http://localhost:5173");
    cy.get('input[name="filter-name"]').type("Rick Sanchez");
    cy.get("table tbody tr").should("have.length", 1).contains("Rick Sanchez");
    cy.get("svg.lucide-info").click();
    cy.get("div[role='dialog']").contains("Rick Sanchez");
    cy.get('button[aria-label="close"]').click();
    cy.get('input[name="filter-name"]').clear();
  });
});
