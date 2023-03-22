/// <reference types="Cypress" />
import { loginPage } from "../page_object/loginPage";
import { addOrganization } from "../page_object/addOrganization";
import { addBoardPage } from "../page_object/addBoardPage"
import { faker } from "@faker-js/faker"

describe("add new board tests", () => {
    const boardData = {
        randomTitle: faker.lorem.words(),
        randomName: faker.lorem.word(3)
    }
    let boardId;

    beforeEach("visit login page", () => {
        cy.visit("/")
        loginPage.login(Cypress.env("userEmail"), (Cypress.env("userPassword")));
        cy.url().should("not.include", "/login");
        addOrganization.newOrganization(boardData.randomTitle);
        cy.wait(300);
    })
    it("add new board", () => {
        addBoardPage.newBoard(boardData.randomName);
        cy.url().should("contain", "/boards");    
    })
    it("add new board", () => {
        cy.intercept({
            method: "POST",
            url: Cypress.env("apiUrl") + "/v2/boards"
        }).as("validNewBoard");
        addBoardPage.newBoard(boardData.randomName);
        cy.wait("@validNewBoard").then((interception) => {
            console.log(interception);
            expect(interception.response.statusCode).to.be.equal(201);
            expect(interception.response.statusCode).not.to.be.equal(401);
            expect(interception.response.body.id).to.exist;
            boardId = interception.response.body.id;
            cy.url().should("contain", "/boards");
        })
    })
})