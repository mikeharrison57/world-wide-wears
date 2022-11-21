import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchedItems, fetchNewPage } from '../../utils/api-calls';
import Product from '../Product/Product';
import Error from '../Error/Error';
import './SearchResults.css';

const SearchResults = ({ searchTerm, pageNum }) => {
	const [searchedProducts, setSearchedProducts] = useState([]);
	const [pagination, setPagination] = useState({});
	const [error, setError] = useState(false);

	const getSearchedItems = async () => {
		fetchSearchedItems(searchTerm)
			.then((data) => {
				setSearchedProducts([...data.results]);
				setPagination({ ...pagination, ...data.pagination });
			})
			.catch((error) => {
				console.log(error);
				setError(true);
			});
	};

	const getNewPage = async () => {
		fetchNewPage(searchTerm, pageNum.toString())
			.then((data) => {
				setSearchedProducts([...data.results]);
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
	}, [searchTerm]);

	useEffect(() => {
		getNewPage();
		setSearchedProducts([]);
	}, [pageNum]);

	const resultCards = searchedProducts.map((product) => {
		return <Product key={Math.random()} product={product} />;
	});

	const goToNextPage = () => {
		return pagination.currentPage++;
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
								<h2 className='results-message'>
									{searchedProducts.length} of {pagination.totalResults} Results
									For "{searchTerm}"
								</h2>
								<article className='pagination-navigation'>
									<button className='nav-button'>Previous Page</button>
									<Link to={`/${searchTerm}/${pagination.currentPage}`}>
										<button className='nav-button' onClick={goToNextPage}>
											Next Page
										</button>
									</Link>
								</article>
								<section className='result-container'>{resultCards}</section>
								<article className='pagination-navigation'>
									<button className='nav-button'>Previous Page</button>
									<Link to={`/${searchTerm}/${pagination.currentPage}`}>
										<button className='nav-button' onClick={goToNextPage}>
											Next Page
										</button>
									</Link>
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
