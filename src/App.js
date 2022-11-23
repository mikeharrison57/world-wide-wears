// Functions and Hooks
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import AboutUs from './components/AboutUs/AboutUs';
import Cart from './components/Cart/Cart';
import ProductContainer from './components/ProductContainer/ProductContainer';
import SearchResults from './components/SearchResults/SearchResults';

const App = () => {
	const [cartProducts, setCartProducts] = useState([]);

	const getCartProducts = (selectedProduct) => {
		setCartProducts([...cartProducts, { ...selectedProduct }]);
	};

	return (
		<main>
			<Navbar cartItemNum={cartProducts.length} />
			<Switch>
				<Route exact path='/'>
					<Banner />
					<ProductContainer getCartProducts={getCartProducts} />
				</Route>
				<Route exact path='/about-us'>
					<AboutUs />
				</Route>
				<Route exact path='/cart'>
					<Cart cartProducts={cartProducts} />
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
