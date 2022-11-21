import { useState } from 'react';
import Search from '../../assets/search-icon.png';
import Cart from '../../assets/cart-icon.png';
import './Navbar.css';

const Navbar = ({ getSearchTerm }) => {
	const [searchInput, setSearchInput] = useState('');

	const submitSearchInput = () => {
		getSearchTerm(searchInput);
	};

	return (
		<header className='navbar'>
			<h1 className='title'>World Wide Wears</h1>
			<button>About Us</button>
			<article className='search-and-cart'>
				<div className='search'>
					<input
						type='text'
						placeholder='Search'
						onChange={(e) => setSearchInput(e.target.value)}
					/>
					<img
						alt='search-icon'
						src={Search}
						className='icon'
						onClick={submitSearchInput}
					/>
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
