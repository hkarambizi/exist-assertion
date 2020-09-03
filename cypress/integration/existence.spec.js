
const showOptions = () => {
    cy.get('#dropdown-trigger').trigger('mouseenter');
}
const chooseOption = (num) => {
    return cy.contains(`Option ${num}`).click();
}
const baseUrl = "http://localhost:3000";

describe("Existence", function(){
    beforeEach(function(){
        cy.visit(baseUrl)
    })

    it("should not find removed dropdown option", ()=> {
        showOptions();
        chooseOption('1');
        cy.contains('Option 1').should('not.exist');
        chooseOption('2');
        cy.get('.dropdown-opts').contains('Option 2').should('not.exist');

        // arbitrary test to complete after above
        cy.get('#first')
        .click()
        .type("Matt");
        cy.typeTab();
        cy.get('#last')
        .click()
        .type("Jones");
        cy.get("#name")
        .submit();

    })

})
