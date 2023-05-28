require('cypress-xpath')


describe('Admin Dashboard', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/Sing-in');
        cy.get('input[type="text"]').type('admin@gmail.com');
        cy.get('input[type="password"]').type('123456');
        cy.xpath('/html/body/div/div/section/div[2]/form/div[3]/span').click();
        cy.wait(4000); 
        cy.url().should('eq', 'http://localhost:3000/');
        cy.visit('http://localhost:3000/admin');
    });
  
    it('Adds an item', () => {
        
      cy.get('#addbtn').click(); 
  
      cy.get('select').select('Camera'); 
      
  
      cy.get('input[placeholder="Enter Serial here..."]').type('12345'); // Types in the serial number
      cy.get('input[placeholder="Enter location here..."]').type('London'); // Types in the location
      cy.get('input[placeholder="Enter description here..."]').type('Camera with high resolution'); // Types in the description
      
      cy.get('.btn > a').click(); 
    });
  
    it('Deletes an item', () => {
        cy.wait(3000);
        
        cy.get('.singleDestination').first().within(() => {
          cy.get('#card_btn').within(() => {
            cy.get('button').eq(1).click(); 
          });
        });
      }); 
      
  });
  