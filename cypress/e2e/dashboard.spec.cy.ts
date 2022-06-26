describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/dashboard");
  });

  it("should appear Service Spending Dashboard", () => {
    cy.contains("Service Spending Dashboard");
  });

  it("should open drawer", () => {
    cy.contains("Add").click();
    cy.contains("Enter the name of your new view");
  });

  it("should go back to dashboard and see new view", () => {
    cy.contains("Add").click();
    cy.get("input")
      .first()
      .type("my view");
    cy.contains("Continue").click();
    cy.contains("my view");
  });
});
