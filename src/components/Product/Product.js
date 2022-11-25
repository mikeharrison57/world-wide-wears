import './Product.css';

const Product = ({ product, getCartProducts }) => {
	const addToCart = () => {
		alert(`${product.name} added to cart!`);
		getCartProducts(product);
	};

	return (
		<article className='product-card'>
			{product.thumbnailImageUrl && (
				<img
					className='product-image'
					alt={product.name}
					src={product.thumbnailImageUrl}
				/>
			)}
			<div className='prices'>
				<p className='current-price'>${product.price}</p>
				{product.msrp && <del className='previous-price'>${product.msrp}</del>}
			</div>
			<h3 className='product-name'>{product.name}</h3>
			<button className='add-to-cart' onClick={addToCart}>Add To Cart</button>
		</article>
	);
};

export default Product;