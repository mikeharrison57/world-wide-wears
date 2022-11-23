import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Search from '../../assets/search-icon.png';
import Cart from '../../assets/cart-icon.png';
import './Navbar.css';

const Navbar = () => {
	const [searchInput, setSearchInput] = useState('');

	let history = useHistory();

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			history.push('/' + searchInput);
		}
	};

	return (
		<header className='navbar'>
			<article className='heading-container'>
				<h1 className='title'>WWW</h1>
				<label>World Wide Wears</label>
				<button className='about-us'>About Us</button>
			</article>
			<article className='search-and-cart'>
				<div className='search-container' tabIndex='0'>
					<Link to={`/${searchInput}`}>
						<input
							type='text'
							value={searchInput}
							placeholder={'Search'}
							className='search-input'
							onChange={(e) => setSearchInput(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
					</Link>
					<Link to={`/${searchInput}`}>
						<img alt='search-icon' src={Search} className='search-icon icon' />
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
