import Product from '../Product/Product';

const Cart = ({ cartProducts }) => {
	const cartCards = cartProducts.map((product) => {
		return <Product key={Math.random()} product={product} />;
	});

	return (
		<>
			{console.log(cartProducts)}
			{cartCards.length ? <section>{cartCards}</section> : <h1>Cart Empty</h1>}
		</>
	);
};

export default Cart;
