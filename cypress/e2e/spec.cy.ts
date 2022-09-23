
describe('Testing main page and navigation', () => {
  it('should load the page', () => {
    cy.visit('localhost:3000');

    cy.contains('Main page');
  })

  it('should go to the Page one', () => {
    cy.contains('Page one').click();
    cy.url().should('include', 'page_one');
  })

  it('should go back', () => {
    cy.contains('Back').click();
    cy.url().should('equal', 'http://localhost:3000/');
  })

  it('should go to the Page two', () => {
    cy.contains('Page two').click();
    cy.url().should('include', 'page_two');
  })

  it('should go back', () => {
    cy.contains('Back').click();
    cy.url().should('equal', 'http://localhost:3000/');
  })

})
