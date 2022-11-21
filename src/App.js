// Components
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Error from './components/Error/Error';

// Functions and Hooks
import { useState, useEffect } from 'react';
import { fetchSaleItems } from './utils/api-calls';

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
					<Banner />
				</main>
			)}
		</>
	);
};

export default App;
