import { useState, useEffect } from 'react';
import { fetchSearchedItems } from '../../utils/api-calls';
import Product from '../Product/Product';
import './SearchResults.css';

const SearchResults = ({ searchTerm }) => {
	const [searchedProducts, setSearchedProducts] = useState([]);
	const [error, setError] = useState(false);

	const getSearchedItems = async () => {
		fetchSearchedItems(searchTerm)
			.then((data) => {
				setSearchedProducts([...searchedProducts, ...data.results]);
			})
			.catch((error) => {
				console.log(error);
				setError(true);
			});
	};

	useEffect(() => {
		getSearchedItems();
	}, [searchTerm]);

	const resultCards = searchedProducts.map((product) => {
		return <Product key={Math.random()} product={product} />;
	});

	return <section className='result-container'>{resultCards}</section>;
};

export default SearchResults;
