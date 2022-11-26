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
});
