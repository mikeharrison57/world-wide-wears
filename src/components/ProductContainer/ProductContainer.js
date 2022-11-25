import './ProductContainer.css';

// Hooks and Functions
import { useState, useEffect } from 'react';
import { fetchSaleItems } from '../../utils/api-calls';

// Components
import Product from '../Product/Product';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

const ProductContainer = ({ getCartProducts }) => {
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
		return (
			<Product
				getCartProducts={getCartProducts}
				key={Math.random()}
				product={product}
			/>
		);
	});

	if (error) {
		return <Error />;
	} else {
		return (
			<>
				{!products.length ? (
					<Loading />
				) : (
					<section className='product-container'>{productCards}</section>
				)}
			</>
		);
	}
};

export default ProductContainer;
