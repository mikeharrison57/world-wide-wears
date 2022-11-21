// Functions and Hooks
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchSaleItems } from './utils/api-calls';

// Components
import Navbar from './components/Navbar/Navbar';
// import Banner from './components/Banner/Banner';
import Error from './components/Error/Error';
import ProductContainer from './components/ProductContainer/ProductContainer';
import SearchResults from './components/SearchResults/SearchResults';

const App = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

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

	const getSearchTerm = (searchTerm) => {
		setSearchTerm(searchTerm);
	};

	useEffect(() => {
		getSaleItems();
	}, []);

	return (
		<>
			{error ? (
				<Error />
			) : (
				<main>
					{console.log(searchTerm)}
					<Navbar getSearchTerm={getSearchTerm} searchTerm={searchTerm} />
					{/* <Banner /> */}
					<Switch>
						<Route exact path='/'>
							<ProductContainer products={products} />
						</Route>
						<Route exact path=':searchTerm'>
							<SearchResults searchTerm={searchTerm} />
						</Route>
					</Switch>
				</main>
			)}
		</>
	);
};

export default App;
