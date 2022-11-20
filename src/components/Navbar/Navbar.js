import Search from '../../assets/search-icon.png'
import Cart from '../../assets/cart-icon.png';

const Navbar = () => {
	return (
		<header>
			<h1>World Wide Wears</h1>
			<button>About Us</button>
			<article>
				<div>
					<input type='text' placeholder='Search' />
					<img alt='search-icon' src={Search} />
				</div>
				<div>
					<p>0</p>
					<img alt='cart-icon' src={Cart} />
				</div>
			</article>
		</header>
	);
};

export default Navbar;
