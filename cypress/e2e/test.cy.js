describe('Swiper Gallery Test', function () {
    it('Checks if next and previous buttons works', function () {
      cy.visit('http://localhost:3000');
      cy.get('.swiper-button-next').click();
      cy.wait(2000);
      cy.get('.swiper-button-next').click({ force: true });
      cy.wait(2000);
      cy.get('.swiper-button-prev').click();
      cy.wait(2000);
      cy.get('.swiper-button-prev').click();
      cy.wait(2000);
    });
  });