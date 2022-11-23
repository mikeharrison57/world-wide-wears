import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/app-logo.png';
import Search from '../../assets/search-icon.png';
import Cart from '../../assets/cart-icon.png';
import './Navbar.css';

const Navbar = ({ cartItemNum }) => {
	const [searchInput, setSearchInput] = useState('');

	let history = useHistory();

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			history.push('/' + searchInput);
			setSearchInput('');
		}
	};

	return (
		<header className='navbar'>
			<article className='heading-container'>
				<Link to='/'>
					<div className='app-title'>
						<img alt='app-logo' src={Logo} className='logo' />
						<label className='full-title'>World Wide Wears</label>
					</div>
				</Link>
			</article>
			<Link to='/about-us'>
				<p className='about-us'>ABOUT US</p>
			</Link>
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
						<img alt='search-icon' src={Search} className='search-icon' />
					</Link>
				</div>
				<div className='cart'>
					<p>{cartItemNum}</p>
					<img alt='cart-icon' src={Cart} className='cart-icon' />
				</div>
			</article>
		</header>
	);
};

export default Navbar;
