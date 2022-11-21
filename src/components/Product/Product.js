const Product = ({ product }) => {
  return (
  <article>
		{console.log(product)}
		<img alt={product.name} src={product.thumbnailImageUrl} />
		<h3>{product.name}</h3>
		<p>{product.msrp}</p>
		<p>{product.price}</p>
	</article>
  )
}

export default Product;