import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../assets/search-icon.png';
import Cart from '../../assets/cart-icon.png';
import './Navbar.css';

const Navbar = ({ getSearchTerm, searchTerm }) => {
	const [searchInput, setSearchInput] = useState('');

	const submitSearchInput = () => {
		getSearchTerm(searchInput);
		clearInput();
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			getSearchTerm(searchInput);
			clearInput();
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
				<div className='search'>
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
