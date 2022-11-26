describe('Cart Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/cart');
	});

	it('Should have a navigation bar with an application logo, about us link, cart link, and search bar', () => {
		cy.get('.app-title').contains('World Wide Wears');
		cy.get('.logo').should('have.attr', 'alt', 'app-logo');
		cy.get('.about-us').should('have.text', 'ABOUT US');
		cy.get('.search-input').should('exist').should('have.attr', 'type', 'text');
		cy.get('.cart-icon').should('have.attr', 'alt', 'cart-icon');
	});

	it('Should display Cart Empty before items are added to the cart', () => {
		cy.get('.cart-items').find('h1').should('have.text', 'Cart Empty');
	});

	it('Should be able to navigate to the home and search pages, and allow the user to add items from both.', () => {
		cy.get('.app-title').click();
		cy.url().should('eq', 'http://localhost:3000/');
		cy.get('.add-to-cart').first().click();
		cy.get('.search-input').type('jeans').type('{enter}');
		cy.url().should('eq', 'http://localhost:3000/jeans');
		cy.get('.add-to-cart').last().click();
		cy.get('.cart').click();
		cy.get('.cart-product-card').should('have.length', 2);
		cy.get('.product-name')
			.first()
			.should('have.text', 'Bonus Points Pink Pendant Earrings');
		cy.get('.product-name')
			.last()
			.should('have.text', 'Cutting Edge Medium Wash Distressed Skinny Jeans');
	});

  it('Should allow the user to delete items from the cart individually', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.add-to-cart').last().click();
    cy.get('.cart').click();
    cy.get('.cart-product-card').should('have.length', 1);
    cy.get('.remove-from-cart').click();
    cy.get('.cart-product-card').should('have.length', 0);
  })

  it('Should display a total cost for items in the cart, and allow the user to Confirm Purchase which empties the cart', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.add-to-cart').first().click();
		cy.get('.add-to-cart').last().click();
    cy.get('.cart').click();
    cy.get('.cart-product-card').should('have.length', 2);
    cy.get('.cart-product-card').first().contains('$30')
    cy.get('.cart-product-card').last().contains('$62');
    cy.get('.total').should('have.text', 'Total: $92');
    cy.get('.confirm-purchase').click();
    cy.get('.cart-items').contains('Cart Empty');
  })
});
