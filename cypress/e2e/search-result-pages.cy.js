import { primaryUrl } from '../../src/utils/api-calls';

describe('Search results pages.', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/blue');
	});

	it('Should have a navigation bar with an application logo, about us link, cart link, and search bar', () => {
		cy.get('.app-title').contains('World Wide Wears');
		cy.get('.logo').should('have.attr', 'alt', 'app-logo');
		cy.get('.about-us').should('have.text', 'ABOUT US');
		cy.get('.search-input').should('exist').should('have.attr', 'type', 'text');
		cy.get('.cart-icon').should('have.attr', 'alt', 'cart-icon');
	});

	it('Should display how many total results there are for the search term, and how many per page.', () => {
		cy.get('.results-message')
			.first()
			.should('have.text', '925 Search results for "blue"');
		cy.get('.search-result-page > :nth-child(3)').should('have.text', '1 - 24');
	});

	it('Should have 24 product cards containing the search term.', () => {
		cy.get('.result-container').find('.product-card').should('have.length', 23);
		cy.get('.product-card').first().contains('Blue');
		cy.get('.product-card').last().contains('Blue');
	});

	it('Should have two next buttons on first results page, and two previous and two next buttons on second page', () => {
		cy.get('.next-button').should('have.length', 2);
		cy.get('.previous-button').should('have.length', 0);
		cy.get('.next-button').first().click();
		cy.get('.previous-button').should('have.length', 2);
	});

	it('Should have two previous buttons on last results page, and two previous and two next buttons on second to last page', () => {
    cy.visit('http://localhost:3000/ball');
		cy.get('.next-button').last().dblclick();
		cy.get('.previous-button').should('have.length', 2);
    cy.get('.next-button').should('have.length', 0);
    cy.get('.previous-button').last().click()
    cy.get('.next-button').should('have.length', 2);
	});

  it('Should display different product cards based on page number.', () => {
    cy.get('.next-button').first().should('have.text', '2')
    cy.get('.product-name')
			.first()
			.should('have.text', 'Ideal Spring Denim Blue Wedges');
    cy.get('.next-button').last().click();
    cy.get('.product-card')
			.first()
			.should('not.contain', 'Ideal Spring Denim Blue Wedges');
  })

  it('Should allow the user to add search result products to their cart.', () => {
			cy.get('.add-to-cart').first().click();
			cy.get('.add-to-cart').last().click();
			cy.get('.cart').click();
			cy.get('.product-name')
				.first()
				.should('have.text', 'Ideal Spring Denim Blue Wedges');
			cy.get('.cart-product-card').first().contains('$30');
			cy.get('.product-name')
				.last()
				.should('have.text', 'Ready Or Not Blue Print Jumpsuit');
			cy.get('.cart-product-card').last().contains('$49');
		});
});
