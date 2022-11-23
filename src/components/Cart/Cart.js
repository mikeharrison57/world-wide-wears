import Product from '../Product/Product';
import './Cart.css';

const Cart = ({ cartProducts, setCartProducts }) => {
	const cartCards = cartProducts.map((product) => {
		return <Product key={Math.random()} product={product} />;
	});

	const totalCost = cartProducts.reduce((zero, product) => {
		return (zero += Number(product.price));
	}, 0);

	const confirmPurchase = () => {
		alert('Purchase Confirmed!');
		setCartProducts([]);
	};

	return (
		<>
			{cartCards.length ? (
				<section className='cart-items'>
					<h2>Total: ${totalCost}.00</h2>
					<button onClick={confirmPurchase}>Confirm Purchase</button>
					{cartCards}
				</section>
			) : (
				<div className='cart-items'>
					<h1>Cart Empty</h1>
				</div>
			)}
		</>
	);
};

export default Cart;
