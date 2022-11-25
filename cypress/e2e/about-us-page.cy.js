// import { primaryUrl } from '../../src/utils/api-calls';

describe('About Us Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/about-us');
    // cy.intercept('GET', `${primaryUrl}sale&resultsFormat=native&page=2`);
	});

	it('Should have a navigation bar with an application logo, about us link, cart link, and search bar', () => {
		cy.get('.app-title').contains('World Wide Wears');
		cy.get('.logo').should('have.attr', 'alt', 'app-logo');
		cy.get('.about-us').should('have.text', 'ABOUT US');
    cy.get('.search-input').should('exist').should('have.attr', 'type', 'text');
    cy.get('.cart-icon').should('have.attr', 'alt', 'cart-icon');
	});
});
