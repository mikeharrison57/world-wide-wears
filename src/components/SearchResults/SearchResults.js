import { useState, useEffect } from 'react';
import { fetchSearchedItems } from '../../utils/api-calls';
import Product from '../Product/Product';
import Error from '../Error/Error';
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

	// const waitForResults = () => {
	// 	const timer = setTimeout(() => {
	// 		return <h1>No Results For That Search. Please try another!</h1>;
	// 	}, 1000);
	// 	return () => clearTimeout(timer);
	// };

	return (
		<>
			{error ? (
				<Error />
			) : (
				<section>
					{!searchedProducts.length ? (
						<h1>No Results For That Search. Please try another!</h1>
					) : (
						<>
							<h2 className='results-message'>
								{searchedProducts.length} RESULTS FOR "{searchTerm}"
							</h2>
							<section className='result-container'>{resultCards}</section>
						</>
					)}
				</section>
			)}
		</>
	);
};

export default SearchResults;
