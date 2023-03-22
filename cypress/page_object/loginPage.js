class LoginPage {
    get emailInput() {
        return cy.get("input").first();
    }

    get passwordInput() {
        return cy.get("input").eq(1);
    }

    get logInButton() {
        return cy.get("button").first();
    }

    get errorMessage() {
        return cy.get(".el-form-item__error")
    }
    login(email, password) {
        this.emailInput.type(email).should("exist").and("be.visible").and("have.attr", "placeholder", "Your Email Address");
        this.passwordInput.type(password).should("exist").and("be.visible").and("have.attr", "placeholder", "Your Password");
        this.logInButton.click().should("exist").and("be.visible");
        cy.wait(2000);
      } 
}

export const loginPage = new LoginPage();