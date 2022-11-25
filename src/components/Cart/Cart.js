import './Cart.css';

// Components
import CartProduct from '../CartProduct/CartProduct';

const Cart = ({ cartProducts, setCartProducts, removeCartProduct }) => {
	const cartCards = cartProducts.map((product) => {
		return (
			<CartProduct
				key={Math.random()}
				product={product}
				cartProducts={cartProducts}
				removeCartProduct={removeCartProduct}
			/>
		);
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
					<h2 className='total'>Total: ${totalCost}</h2>
					<button className='confirm-purchase' onClick={confirmPurchase}>
						Confirm Purchase
					</button>
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
