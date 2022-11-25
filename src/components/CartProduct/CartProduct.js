import './CartProduct.css';

const CartProduct = ({ product, removeCartProduct }) => {
	const confirmCartRemoval = () => {
		alert(`${product.name} removed from cart!`)
		removeCartProduct(product.id);
	};

	return (
		<article className='cart-product-card'>
			{product.thumbnailImageUrl && (
				<img
					className='product-image'
					alt={product.name}
					src={product.thumbnailImageUrl}
				/>
			)}
			<div className='prices-and-name'>
				<h3 className='product-name'>{product.name}</h3>
				<div className='prices'>
					<p className='current-price'>${product.price}</p>
					{product.msrp && (
						<del className='previous-price'>${product.msrp}</del>
					)}
				</div>
				<button className='remove-from-cart' onClick={confirmCartRemoval}>Remove From Cart</button>
			</div>
		</article>
	);
};

export default CartProduct;