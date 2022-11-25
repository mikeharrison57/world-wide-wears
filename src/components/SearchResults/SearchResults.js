import './SearchResults.css';

// Hooks and Functions
import { useState, useEffect } from 'react';
import { fetchSearchedItems } from '../../utils/api-calls';

// Components
import Product from '../Product/Product';
import Error from '../Error/Error';

const SearchResults = ({ searchTerm, getCartProducts }) => {
	const [searchedProducts, setSearchedProducts] = useState([]);
	const [pagination, setPagination] = useState({});
	const [error, setError] = useState(false);
	let [pageNumber, setPageNumber] = useState(1);

	const getSearchedItems = async () => {
		fetchSearchedItems(searchTerm, pageNumber)
			.then((data) => {
				setSearchedProducts([...data.results]);
				setPagination({ ...data.pagination });
			})
			.catch((error) => {
				console.log(error);
				setError(true);
			});
	};

	useEffect(() => {
		getSearchedItems();
		setSearchedProducts([]);
	}, [searchTerm, pageNumber]);

	const goToNextPage = () => {
		setPageNumber((pageNumber += 1));
	};

	const goToPreviousPage = () => {
		setPageNumber((pageNumber -= 1));
	};

	const productCards = searchedProducts.map((product) => {
		return (
			<Product
				key={Math.random()}
				getCartProducts={getCartProducts}
				product={product}
			/>
		);
	});

	if (error) {
		return <Error />;
	} else {
		return (
			<>
				{!searchedProducts.length ? (
					pagination.totalResults === 0 ? (
						<div className='no-results'>
							<h1 style={{ textAlign: 'center' }}>
								Sorry, no results for "{searchTerm}". Please try another search.
							</h1>
						</div>
					) : (
						<h1 style={{ textAlign: 'center' }}>LOADING...</h1>
					)
				) : (
					<section className='search-result-page'>
						<h2 className='results-message'>
							{pagination.totalResults} Search results for "{searchTerm}"
						</h2>
						<article className='pagination-navigation'>
							{pageNumber > 1 && (
								<button className='previous-button' onClick={goToPreviousPage}>
									{pagination.previousPage}
								</button>
							)}
							{pageNumber < pagination.totalPages && (
								<button className='next-button' onClick={goToNextPage}>
									{pagination.nextPage}
								</button>
							)}
						</article>
						<h2 className='results-message'>
							{pagination.begin} - {pagination.end}
						</h2>
						<article className='result-container'>{productCards}</article>
						<article className='pagination-navigation'>
							{pageNumber > 1 && (
								<button className='previous-button' onClick={goToPreviousPage}>
									{pagination.previousPage}
								</button>
							)}
							{pageNumber < pagination.totalPages && (
								<button className='next-button' onClick={goToNextPage}>
									{pagination.nextPage}
								</button>
							)}
						</article>
					</section>
				)}
			</>
		);
	}
};

export default SearchResults;
