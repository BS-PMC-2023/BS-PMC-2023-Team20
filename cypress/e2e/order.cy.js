require('cypress-xpath')

describe('Order Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/Sign-in');
    cy.get('input[type="text"]').type('admin@gmail.com');
    cy.get('input[type="password"]').type('123456');
    cy.xpath('/html/body/div/div/section/div[2]/form/div[3]/span').click();
    cy.wait(4000); 
    cy.url().should('eq', 'http://localhost:3000/');
  });



  it('should fill out and submit the form', () => {
    cy.wait(4000); 
    cy.get('.singleDestination').first().find('button').click();
    cy.get('.DepartInput input').click();
    cy.get('.DepartInput input').type('2023-09-06');
    cy.get('.ReturnInput input').click();
    cy.get('.ReturnInput input').type('2023-09-13');


    cy.get('#terms-checkbox').check({ force: true });

    
    cy.get('button.btn').contains("Submit").click();

    cy.url().should('include', 'http://localhost:3000/Myorders');
  });

});
