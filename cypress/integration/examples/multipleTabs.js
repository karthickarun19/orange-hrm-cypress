describe("Tutorialspoint Test", function () {
  // test case
  it("Multiple tab handling", function () {
    // launch the url
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    // removing the target attribute from the link with removeAttr()
    cy.get("#opentab").invoke("removeAttr", "target").click();
    // assertion to verify the current Url
    cy.url().should("include", "https://www.rahulshettyacademy.com/#/index");
    // moving back to the parent tab with the help of go() method
    cy.go("back");
  });
});
