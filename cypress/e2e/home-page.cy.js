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
});
