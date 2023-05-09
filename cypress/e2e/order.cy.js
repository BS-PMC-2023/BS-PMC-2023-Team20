require('cypress-xpath')

describe('Order component', () => {
  before(() => {
    cy.visit('http://localhost:3000/Sing-in');
  });

  it('should allow users to sign in with valid credentials', () => {
    cy.get('input[type="text"]').type('admin@gmail.com');
    cy.get('input[type="password"]').type('123456');
    cy.xpath('/html/body/div/div/section/div[2]/form/div[3]/span').click();
    cy.wait(4000); // Wait for one second
  });
    it('clicking the Order button should navigate to the Order page,set dates should display number of rent days,test that user have to check box before submit,test that user reservation is submitted', () => {
      cy.visit('http://localhost:3000/');
      cy.xpath('/html/body/div/div/section[2]/div[2]/div/div[2]/button').click();
      cy.url().should('include', '/Order');
      cy.get('.DepartInput input').click();
      cy.get('.DepartInput input').type('2023-09-06');
      cy.get('.ReturnInput input').click();
      cy.get('.ReturnInput input').type('2023-09-13');
      cy.wait(1000); // Wait for the element to appear
      cy.xpath('/html/body/div/div/section/div[2]/div[2]/div[3]/div/form/div[3]/p').should('contain', '7');
      cy.contains('Submit').click();
      cy.on('window:alert', (str) => {
      expect(str).to.equal('Please accept the terms and conditions');
      // cy.get('label > span').click();
      // cy.contains('Submit').click();
      // cy.url().should('include', '/Myorders');
      });
    });
  
    // it('set dates should display number of rent days', () => {
    //   cy.get('.DepartInput input').click();
    //   cy.get('.DepartInput input').type('06-09-2023');
    //   cy.get('.ReturnInput input').click();
    //   cy.get('.ReturnInput input').type('13-09-2023');
    //   cy.get('div[data-testid="rent-days"]').should('contain', '7');
    // });
  
    // it('test that user have to check box before submit', () => {
    //   cy.contains('Submit').click();
    //   cy.on('window:alert', (str) => {
    //     expect(str).to.equal('Please accept the terms and conditions');
    //   });
    // });
  
    // it('test that user reservation is submitted', () => {
    //   cy.get('label > span').click();
    //   cy.contains('Submit').click();
    //   cy.url().should('include', '/Myorders');
    // });
});