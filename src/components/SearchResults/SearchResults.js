import { useState, useEffect } from 'react';
import { fetchSearchedItems } from '../../utils/api-calls';
import Product from '../Product/Product';
import Error from '../Error/Error';
import './SearchResults.css';

const SearchResults = ({ searchTerm }) => {
	const [searchedProducts, setSearchedProducts] = useState([]);
	const [pagination, setPagination] = useState({});
	let [pageNumber, setPageNumber] = useState(1);
	const [error, setError] = useState(false);

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

	const productCards = searchedProducts.map((product) => {
		return <Product key={Math.random()} product={product} />;
	});

	const goToNextPage = () => {
		setPageNumber((pageNumber += 1));
	};

	const goToPreviousPage = () => {
		setPageNumber((pageNumber -= 1));
	};

	if (searchedProducts.length) {
		return (
			<>
				{error ? (
					<Error />
				) : (
					<section>
						{!searchedProducts.length ? (
							<h1>No Results For {searchTerm}. Please try another!</h1>
						) : (
							<>
								{console.log({ pageNumber })}
								<h2 className='results-message'>
									Search results for "{searchTerm}"
								</h2>
								<article className='pagination-navigation'>
									{pageNumber > 1 && (
										<button className='nav-button' onClick={goToPreviousPage}>
											Previous Page
										</button>
									)}
									{pageNumber < pagination.totalPages && (
										<button className='nav-button' onClick={goToNextPage}>
											Next Page
										</button>
									)}
								</article>
								<section className='result-container'>{productCards}</section>
								<article className='pagination-navigation'>
									{pageNumber > 1 && (
										<button className='nav-button' onClick={goToPreviousPage}>
											Previous Page
										</button>
									)}
									{pageNumber < pagination.totalPages && (
										<button className='nav-button' onClick={goToNextPage}>
											Next Page
										</button>
									)}
								</article>
							</>
						)}
					</section>
				)}
			</>
		);
	}
};

export default SearchResults;
