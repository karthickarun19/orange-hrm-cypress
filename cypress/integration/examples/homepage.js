/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login");
  });

  it("Submit a login form with valid username and password", () => {
    cy.login("admin");
    cy.password("admin123");
    cy.Submit();
    cy.get("#account-job > .material-icons").click();
    cy.get("#logoutLink").click();
    cy.on("uncaught:exception", (err) => {
      return !err.message.includes(`Cannot read property 'to' of null`);
    });
    cy.get("#btnLogin").should("have.id", "btnLogin");
  });

  it("Submit a login form with valid username and invalid password", () => {
    cy.login("admin");
    cy.password("admin123u");
    cy.Submit();
    cy.get(".toast-message").should("contain", " Invalid Credentials");
  });

  it("Submit a login form with invalid username and valid password", () => {
    cy.login("adminu");
    cy.password("admin123");
    cy.Submit();
    cy.get(".toast-message").should("contain", " Invalid Credentials");
  });

  it("Check Job title", () => {
    cy.login("admin");
    cy.password("admin123");
    cy.Submit();
    cy.get(
      "#menu_admin_viewAdminModule > :nth-child(1) > .collapsible-indicator"
    ).click();
    cy.get(
      "#menu_admin_Job > .collapsible-header > .collapsible-indicator"
    ).click();
    cy.get("#menu_admin_viewJobTitleList").click();
    cy.wait(10000);
    cy.get(
      ':nth-child(1) > [ng-if="listData.selectable && list.hasPermissions(listData.listActions)"] > label'
    ).click();
  });
});
