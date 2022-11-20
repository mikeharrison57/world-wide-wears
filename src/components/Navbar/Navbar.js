import Search from '../../assets/search-icon.png';
import Cart from '../../assets/cart-icon.png';
import './Navbar.css';

const Navbar = () => {
	return (
		<header className='navbar'>
			<h1 className='title'>World Wide Wears</h1>
			<button>About Us</button>
			<article className='search-and-cart'>
				<div className='search'>
					<input type='text' placeholder='Search' />
					<img alt='search-icon' src={Search} className='icon' />
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
