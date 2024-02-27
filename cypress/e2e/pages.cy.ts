describe("template spec", () => {
  it("checking pagination and buttons", () => {
    cy.visit("http://localhost:5173");
    cy.get('button[role="tab"]').contains("Episodes").click();
    cy.get("table tbody tr").should("have.length", 20);
    cy.get("span").contains("Page 1 of 3");
    cy.get("button").contains("Previous Page").should("be.disabled");
    cy.get("button").contains("Next Page").click();
    cy.get("span").contains("Page 2 of 3");
    cy.get("button").contains("Next Page").click();
    cy.get("span").contains("Page 3 of 3");
    cy.get("button").contains("Next Page").should("be.disabled");
  });
});
