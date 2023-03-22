class AddOrganization {
    get addNewOrganizationModal () {
        return cy.get(".vs-c-my-organization--add-new")
    }
    get addNewOrganization () {
        return this.addNewOrganizationModal.find("div").last();
    }
    
    get addOrganizationName () {
        return cy.get("input");
    }
    
    get addOrgModal() {
        return cy.get(".vs-c-modal")
    }

    get nextButton() {
        return this.addOrgModal.find("button").last();
    }

    get okOrgModal() {
        return cy.get(".vs-c-modal__body")
    }
    
    get okButton() {
        return this.okOrgModal.find("button").last();
    }

    newOrganization(name) {
        this.addNewOrganization.click()
        this.addOrganizationName.type(name).should("exist").and("be.visible").and("have.attr", "placeholder", "Enter name...");
        this.nextButton.click();
        this.nextButton.click();
        this.okButton.click();
        cy.wait(200);
    }
}

export const addOrganization = new AddOrganization();