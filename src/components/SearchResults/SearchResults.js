import { useState, useEffect } from 'react';
import { fetchSearchedItems } from '../../utils/api-calls';
import Product from '../Product/Product';
import Error from '../Error/Error';
import './SearchResults.css';

const SearchResults = ({ searchTerm }) => {
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
		return <Product key={Math.random()} product={product} />;
	});

	if (error) {
		return <Error />;
	} else {
		return (
			<>
				{!searchedProducts.length ? (
					pagination.totalResults === 0 ? (
						<h1 style={{ textAlign: 'center' }}>
							Sorry, no results for {searchTerm}. Please try another search.
						</h1>
					) : (
						<h1 style={{ textAlign: 'center' }}>LOADING...</h1>
					)
				) : (
					<section>
						<article className='pagination-navigation'>
							{pageNumber > 1 && (
								<button className='previous-button' onClick={goToPreviousPage}>
									Previous
								</button>
							)}
							{pageNumber < pagination.totalPages && (
								<button className='next-button' onClick={goToNextPage}>
									Next
								</button>
							)}
						</article>
						<h2 className='results-message'>
							Search results for "{searchTerm}"
						</h2>
						<article className='result-container'>{productCards}</article>
						<article className='pagination-navigation'>
							{pageNumber > 1 && (
								<button className='previous-button' onClick={goToPreviousPage}>
									Previous
								</button>
							)}
							{pageNumber < pagination.totalPages && (
								<button className='next-button' onClick={goToNextPage}>
									Next
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
