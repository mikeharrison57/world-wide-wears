import Product from "../Product/Product";

const ProductContainer = ({ products }) => {
  const productCards = products.map((product) => {
    return <Product key={Math.random()} product={product} />
  })

  return (
    <section>
      {productCards}
    </section>
  )
}

export default ProductContainer;