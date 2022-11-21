import Product from "../Product/Product";
import './ProductContainer.css';

const ProductContainer = ({ products }) => {
  const productCards = products.map((product) => {
    return <Product key={Math.random()} product={product} />
  })

  return (
    <section className='product-container'>
      {productCards}
    </section>
  )
}

export default ProductContainer;