/// <reference types="Cypress" />
import { loginPage } from "../page_object/loginPage";
import { addOrganization } from "../page_object/addOrganization";
import { addBoardPage } from "../page_object/addBoardPage";
import { deleteBoard } from "../page_object/deleteBoardPage";
import { faker } from "@faker-js/faker"

describe("delete board tests", () => {
    const userData = {
        randomTitle: faker.lorem.word(),
        randomName: faker.lorem.words(),
    } 

    beforeEach("visit login page", () => {
        cy.visit("/")
        loginPage.login(Cypress.env("userEmail"), (Cypress.env("userPassword")));
        cy.url().should("not.include", "/login");
        addOrganization.newOrganization(userData.randomTitle);
        cy.url().should("contain", "/organizations");
        addBoardPage.newBoard(userData.randomName);
        cy.url().should("contain", "/boards");
    })
    it("delete board", () => {
        deleteBoard.deleteBoardFunction()
        cy.url().should("contain", "/organizations")
    })  
})