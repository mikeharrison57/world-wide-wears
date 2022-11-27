// Hooks and React Router
import { useState, useEffect } from 'react';
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

	useEffect(() => {
		const storedCartData = window.localStorage.getItem('StoredCartItems');
		setCartProducts(JSON.parse(storedCartData));
	}, []);

	useEffect(() => {
		window.localStorage.setItem(
			'StoredCartItems',
			JSON.stringify(cartProducts)
		);
	}, [cartProducts]);

	const getCartProducts = (selectedProduct) => {
		setCartProducts([...cartProducts, { ...selectedProduct }]);
	};

	const removeCartProduct = (id) => {
		const remainingCartItems = cartProducts.filter((product) => {
			return product.uniqueId !== id;
		});
		setCartProducts([...remainingCartItems]);
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
					<Cart
						cartProducts={cartProducts}
						setCartProducts={setCartProducts}
						removeCartProduct={removeCartProduct}
					/>
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
