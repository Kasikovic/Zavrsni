class DeleteBoard {
    get deleteSideBar () {
        return cy.get(".vs-l-project__menu")
    }

    get boardConfiguration () {
        return this.deleteSideBar.find("li").last();
    }

    get deleteButtonWrapper () {
        return cy.get(".vs-c-settings-section-attention-wrapper")
    }

    get deleteButton () {
        return this.deleteButtonWrapper.find("button").last();
    }
    
    get atentionField() {
        return cy.get(".vs-c-settings-section-attention")
    }
    get deleteAtention () {
        return this.atentionField.find("p");
    }

    get submitButton () {
        return cy.get("button").last();
    }

    deleteBoardFunction () {
        deleteBoard.boardConfiguration.click();
        this.deleteAtention.should("have.text", "Attention").and("have.css", "color", "rgb(254, 126, 86)")
        deleteBoard.deleteButton.click().should("exist").and("be.visible").and("have.css", "background-color", "rgb(254, 126, 86)")
        deleteBoard.submitButton.click();
        cy.wait(3000);
    }
}

export const deleteBoard = new DeleteBoard();