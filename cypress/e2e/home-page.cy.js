import { primaryUrl } from '../../src/utils/api-calls';

describe('Home Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('Should have a navigation bar with an application logo, about us link, cart link, and search bar', () => {
		cy.get('.app-title').contains('World Wide Wears');
		cy.get('.logo').should('have.attr', 'alt', 'app-logo');
		cy.get('.about-us').should('have.text', 'ABOUT US');
		cy.get('.search-input').should('exist').should('have.attr', 'type', 'text');
		cy.get('.cart-icon').should('have.attr', 'alt', 'cart-icon');
	});

	it('Should have a banner image with a heading below that says Check Out Our Black Friday Deals Below', () => {
		cy.get('.banner-container')
			.find('.banner-image')
			.should('have.attr', 'alt', 'banner-img');
		cy.get('.banner-container').contains(
			'Check Out Our Black Friday Deals Below'
		);
	});

	it('Should have 24 Black Friday sale products with an image, prices, cart button, and name.', () => {
		cy.get('.product-container')
			.find('.product-card')
			.should('have.length', 24);
		cy.get('.product-image').should('have.length', 24);
		cy.get('.prices').should('have.length', 24);
		cy.get('.add-to-cart').should('have.length', 24);
		cy.get('.product-name').should('have.length', 24);
	});

	it('Should have different Black Friday sale products displayed.', () => {
		cy.get('.product-card')
			.first()
			.contains('Bonus Points Pink Pendant Earrings');
		cy.get('.product-card').first().contains('$30');
		cy.get('.product-card')
			.last()
			.contains('Addicted To Love Blush Pink Maxi Dress');
		cy.get('.product-card').last().contains('$62');
	});

	it('Should allow the user to add Black Friday sale products to their cart.', () => {
		cy.get('.add-to-cart').first().click();
		cy.get('.add-to-cart').last().click();
		cy.get('.cart').click();
		cy.get('.cart-product-card')
			.first()
			.contains('Bonus Points Pink Pendant Earrings');
		cy.get('.cart-product-card').first().contains('$30');
		cy.get('.cart-product-card')
			.last()
			.contains('Addicted To Love Blush Pink Maxi Dress');
		cy.get('.cart-product-card').last().contains('$62');
	});

	it('Should allow the user to navigate to the About Us page, to a search result page, and back to the home page.', () => {
		cy.get('.about-us').click();
		cy.url().should('eq', 'http://localhost:3000/about-us');
		cy.go('back');
		cy.url().should('eq', 'http://localhost:3000/');
		cy.get('.cart').click();
		cy.url().should('eq', 'http://localhost:3000/cart');
		cy.go('back');
		cy.get('.search-input').type('blue').type('{enter}');
		cy.url().should('eq', 'http://localhost:3000/blue');
	});

	it('Should display an Error component if the API call fails with a 404 error.', () => {
		cy.intercept('GET', `${primaryUrl}sale&resultsFormat=native&page=2`, {
			statusCode: 404,
			body: {
				error: 'Cannot GET /sale&resultsFormat=native&page=2',
			},
		});
		cy.visit('http://localhost:3000')
			.get('.error')
			.should(
				'have.text',
				"We're sorry, we're having some technical difficulties right now please come back later. Thank you!"
			);
		cy.get('.error-img').should('have.attr', 'alt', 'error-img');
	});

	it('Should display an Error component if the API call fails with a 500 error.', () => {
		cy.intercept('GET', `${primaryUrl}sale&resultsFormat=native&page=2`, {
			statusCode: 500,
			body: {
				error: 'Cypress forced 500',
			},
		});
		cy.visit('http://localhost:3000')
			.get('.error')
			.should(
				'have.text',
				"We're sorry, we're having some technical difficulties right now please come back later. Thank you!"
			);
		cy.get('.error-img').should('have.attr', 'alt', 'error-img');
	});
});