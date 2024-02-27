describe("template spec", () => {
  it("swith layout from table to grid", () => {
    cy.visit("http://localhost:5173");

    cy.get('div[data-state="active"]').find("table").should("be.visible");
    cy.get("button").contains("Switch Layout").click();
    cy.get('div[data-state="active"]')
      .find('section[data-label="grid"]')
      .should("be.visible");
  });
});
