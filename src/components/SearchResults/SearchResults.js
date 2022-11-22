import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchedItems } from '../../utils/api-calls';
import Product from '../Product/Product';
import Error from '../Error/Error';
import ReactPaginate from 'react-paginate';
import './SearchResults.css';

const SearchResults = ({ searchTerm }) => {
	const [searchedProducts, setSearchedProducts] = useState([]);
	const [pagination, setPagination] = useState({});
	const [pageNumber, setPageNumber] = useState(1);
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
	}, [searchTerm]);

		useEffect(() => {
			getSearchedItems();
			setSearchedProducts([]);
		}, [pageNumber]);

	const productCards = searchedProducts.map((product) => {
		return <Product key={Math.random()} product={product} />;
	});

	const changePage = ({ selected }) => {
		setPageNumber(selected += 1);
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
								{console.log( {pageNumber} )}
								<h2 className='results-message'>
									Search results for "{searchTerm}"
								</h2>
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
								<section className='result-container'>{productCards}</section>
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
							</>
						)}
					</section>
				)}
			</>
		);
	}
};

export default SearchResults;
