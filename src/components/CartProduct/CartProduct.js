import './CartProduct.css';

const CartProduct = ({ product }) => {
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
			</div>
			{/* <button onClick={addToCart}>Add To Cart</button> */}
		</article>
	);
};

export default CartProduct;
