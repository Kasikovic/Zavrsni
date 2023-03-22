class AddBoardPage {
    get addNewBoardWrapper () {
     return cy.get(".vs-c-organization-boards__item--add-new")
    }
 
    get addNewBoard () {
     return this.addNewBoardWrapper.find("div").last();
    }
 
    get boardTitle () {
     return cy.get("input").last();
    }
 
    get nextButton () {
     return cy.get("button").last();
    }
 
    get boardType () {
     return cy.get("label").first();
    }
 
     
 
     newBoard(name) {
         this.addNewBoard.click().should("exist").and("be.visible");
         this.boardTitle.type(name).should("exist").and("be.visible").and("have.attr", "placeholder", "Enter title...");
         this.nextButton.click().should("exist").and("be.visible");
         this.boardType.click().should("exist").and("be.visible");
         this.nextButton.click();
         this.nextButton.click();
         this.nextButton.click();
         this.nextButton.click();
         cy.wait(3000);   
     }
 }
 
 
 export const addBoardPage = new AddBoardPage();
 