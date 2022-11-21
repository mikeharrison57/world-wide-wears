import { useState } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import Search from '../../assets/search-icon.png';
import Cart from '../../assets/cart-icon.png';
import './Navbar.css';
import SearchResults from '../SearchResults/SearchResults';

const Navbar = ({ getSearchTerm }) => {
	let history = useHistory();

	const [searchInput, setSearchInput] = useState('');

	const submitSearchInput = (e) => {
		getSearchTerm(searchInput);
		clearInput();
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			submitSearchInput();
			history.push('/' + searchInput);
		}
	};

	const clearInput = () => {
		setSearchInput('');
	};

	return (
		<header className='navbar'>
			<h1 className='title'>World Wide Wears</h1>
			<button>About Us</button>
			<article className='search-and-cart'>
				<div className='search' tabIndex='0'>
					<Link to={`/${searchInput}`}>
						<input
							type='text'
							value={searchInput}
							placeholder='Search'
							onChange={(e) => setSearchInput(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
					</Link>
					<Link to={`/${searchInput}`}>
						<img
							alt='search-icon'
							src={Search}
							className='search-icon icon'
							onClick={submitSearchInput}
						/>
					</Link>
				</div>
				<div className='cart'>
					<p>0</p>
					<img alt='cart-icon' src={Cart} className='icon' />
				</div>
			</article>
		</header>
	);
};

export default Navbar;
