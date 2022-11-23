// Functions and Hooks
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchSaleItems } from './utils/api-calls';

// Components
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import AboutUs from './components/AboutUs/AboutUs';
import Error from './components/Error/Error';
import ProductContainer from './components/ProductContainer/ProductContainer';
import SearchResults from './components/SearchResults/SearchResults';

const App = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);

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

	useEffect(() => {
		getSaleItems();
	}, []);

	return (
		<>
			{error ? (
				<Error />
			) : (
				<main>
					<Navbar />
					<Switch>
						<Route exact path='/'>
							<Banner />
							<ProductContainer products={products} />
						</Route>
						<Route exact path='/about-us'>
							<AboutUs />
						</Route>
						<Route
							exact
							path='/:searchTerm'
							render={({ match }) => {
								return <SearchResults searchTerm={match.params.searchTerm} />;
							}}
						/>
					</Switch>
				</main>
			)}
		</>
	);
};

export default App;
