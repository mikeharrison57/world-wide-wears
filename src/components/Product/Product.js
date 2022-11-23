import './Product.css';

const Product = ({ product }) => {
	return (
		<article className='product-card'>
			{product.thumbnailImageUrl && <img className='product-image' alt={product.name} src={product.thumbnailImageUrl} />}
			<div className='prices'>
				<p className='current-price'>${product.price}</p>
				{product.msrp && <del className='previous-price'>${product.msrp}</del>}
			</div>
			<h3 className='product-name'>{product.name}</h3>
		</article>
	);
};

export default Product;
