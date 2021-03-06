/// <reference types="cypress" />

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

describe("Test Contact Us form via WebdriverUni", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
      //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
      cy.visit("http://www.webdriveruniversity.com")
      cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
      cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
      cy.title().should('include', 'WebDriver | Contact Us');
      cy.url().should('include', 'contactus');
      //cy.get('#contact-us').click({force: true})
      cy.get('[name="first_name"]').type("Joe");
      cy.get('[name="last_name"]').type("blogs");
      cy.get('[name="email"]').type("joe_blogs123@gmail.com")
      cy.get('textarea.feedback-input').type("How can I learn Cypress?")
      cy.get('[type="submit"]').click();
      cy.get('h1').should('have.text', 'Thank You for your Message!')
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
      //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
      cy.visit("http://www.webdriveruniversity.com")
      cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
      cy.get('[name="first_name"]').type("Tom");
      cy.get('[name="last_name"]').type("blogs");
      cy.get('textarea.feedback-input').type("How can I learn Cypress?")
      cy.get('[type="submit"]').click();
      cy.get('body').contains('Error: all fields are required');
  });
})


