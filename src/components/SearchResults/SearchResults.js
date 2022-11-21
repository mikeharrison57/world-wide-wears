import { useState, useEffect } from 'react';
import { fetchSearchedItems } from '../../utils/api-calls';
import Product from '../Product/Product';
import Error from '../Error/Error';
import './SearchResults.css';

const SearchResults = ({ searchTerm }) => {
	const [searchedProducts, setSearchedProducts] = useState([]);
	const [pagination, setPagination] = useState({});
	const [error, setError] = useState(false);

	const getSearchedItems = async () => {
		fetchSearchedItems(searchTerm, goToNextPage())
			.then((data) => {
				setSearchedProducts([...searchedProducts, ...data.results]);
				setPagination({ ...pagination, ...data.pagination });
			})
			.catch((error) => {
				console.log(error);
				setError(true);
			});
	};

	useEffect(() => {
		getSearchedItems();
		setSearchedProducts([]);
	}, [searchTerm, pagination.currentPage]);

	const resultCards = searchedProducts.map((product) => {
		return <Product key={Math.random()} product={product} />;
	});

	const goToNextPage = () => {
		let pageNum = pagination.currentPage;
		return pageNum++;
	};

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
							{/* {console.log(pagination)} */}
							<h2 className='results-message'>
								{searchedProducts.length} of {pagination.totalResults} Results
								For "{searchTerm}"
							</h2>
							<article className='pagination-navigation'>
								<button className='nav-button'>Previous Page</button>
								<button className='nav-button' onClick={goToNextPage}>
									Next Page
								</button>
							</article>
							<section className='result-container'>{resultCards}</section>
							<article className='pagination-navigation'>
								<button className='nav-button'>Previous Page</button>
								<button className='nav-button'>Next Page</button>
							</article>
						</>
					)}
				</section>
			)}
		</>
	);
};

export default SearchResults;
