import './Product.css';

const Product = ({ product }) => {
	return (
		<article className='product-card'>
			{!product.thumbnailImageUrl ? <p></p> : <img alt={product.name} src={product.thumbnailImageUrl} />}
			<h3 className='product-name'>{product.name}</h3>
			<div className='prices'>
				<p className='current-price'>${product.price}</p>
				<del className='previous-price'>${product.msrp}</del>
			</div>
		</article>
	);
};

export default Product;
