// Functions and Hooks
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import AboutUs from './components/AboutUs/AboutUs';
import ProductContainer from './components/ProductContainer/ProductContainer';
import SearchResults from './components/SearchResults/SearchResults';

const App = () => {
	const [cartProducts, setCartProducts] = useState([]);

	const getCartProducts = (product) => {
		setCartProducts([...cartProducts, { ...product }]);
	};

	return (
		<main>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Banner />
					<ProductContainer getCartProducts={getCartProducts} />
				</Route>
				<Route exact path='/about-us'>
					<AboutUs />
				</Route>
				<Route
					exact
					path='/:searchTerm'
					render={({ match }) => {
						return (
							<SearchResults
								getCartProducts={getCartProducts}
								searchTerm={match.params.searchTerm}
							/>
						);
					}}
				/>
			</Switch>
		</main>
	);
};

export default App;
