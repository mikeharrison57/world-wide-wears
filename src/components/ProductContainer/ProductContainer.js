import { useState, useEffect } from 'react';
import { fetchSaleItems } from '../../utils/api-calls';
import Product from '../Product/Product';
import Error from '../Error/Error';
import './ProductContainer.css';

const ProductContainer = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);

	const getSaleItems = async () => {
		fetchSaleItems()
			.then((data) => {
				setProducts([...products, ...data.results]);
			})
			.catch((error) => {
				console.log(error);
				setError(true);
			});
	};

	useEffect(() => {
		getSaleItems();
	}, []);

	const productCards = products.map((product) => {
		return <Product key={product.id} product={product} />;
	});

	return (
		<>
			{error ? (
				<Error />
			) : (
				<section className='product-container'>{productCards}</section>
			)}
		</>
	);
};

export default ProductContainer;
