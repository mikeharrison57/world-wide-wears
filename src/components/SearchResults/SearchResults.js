import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchedItems, fetchNewPage } from '../../utils/api-calls';
import Product from '../Product/Product';
import Error from '../Error/Error';
import ReactPaginate from 'react-paginate';
import './SearchResults.css';

const SearchResults = ({ searchTerm, pageNum }) => {
	const [searchedProducts, setSearchedProducts] = useState([]);
	const [pagination, setPagination] = useState({});
	const [pageNumber, setPageNumber] = useState(1);
	const [error, setError] = useState(false);

	const productsPerPage = pagination.perPage;
	const pagesVisited = pageNumber * productsPerPage;

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

	// const getNewPage = async () => {
	// 	fetchNewPage(searchTerm, pageNumber)
	// 		.then((data) => {
	// 			setSearchedProducts([...data.results]);
	// 			setPagination({ ...data.pagination });
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 			setError(true);
	// 		});
	// };

	useEffect(() => {
		getSearchedItems();
		setSearchedProducts([]);
	}, [searchTerm, pageNumber]);

	// useEffect(() => {
	// 	getNewPage();
	// 	setSearchedProducts([]);
	// }, [pageNumber]);

	const resultCards = searchedProducts.map((product) => {
		return <Product key={Math.random()} product={product} />;
	});

	// const goToNextPage = () => {
	// 	return pagination.currentPage++;
	// };

	const changePage = ({ selected }) => {
		setPageNumber(selected);
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
								{/* <article className='pagination-navigation'>
									<button className='nav-button'>Previous Page</button>
									<Link to={`/${searchTerm}/${pagination.currentPage}`}>
										<button className='nav-button' onClick={goToNextPage}>
											Next Page
										</button>
									</Link>
								</article> */}
									<ReactPaginate
										previousLabel={'Previous'}
										nextLabel={'Next'}
										pageCount={pagination.totalPages}
										onPageChange={changePage}
										conatainerClassName={'paginationBttns'}
										previousLinkClassName={'previousBttn'}
										nextLinkClassName={'nextBttn'}
										disabledClassName={'paginationDisabled'}
										activeClassName={'paginationActive'}
									/>
								<section className='result-container'>
									{resultCards}
								</section>
									<ReactPaginate
										previousLabel={'Previous'}
										nextLabel={'Next'}
										pageCount={pagination.totalPages}
										onPageChange={changePage}
										conatainerClassName={'paginationBttns'}
										previousLinkClassName={'previousBttn'}
										nextLinkClassName={'nextBttn'}
										disabledClassName={'paginationDisabled'}
										activeClassName={'paginationActive'}
									/>
								{/* <article className='pagination-navigation'>
									<button className='nav-button'>Previous Page</button>
									<Link to={`/${searchTerm}/${pagination.currentPage}`}>
										<button className='nav-button' onClick={goToNextPage}>
											Next Page
										</button>
									</Link>
								</article> */}
							</>
						)}
					</section>
				)}
			</>
		);
	}
};

export default SearchResults;
