import './AboutUs.css';

const AboutUs = () => {
	return (
		<section className='about-page'>
			<h1 className='title'>About Us</h1>
			<article className='body'>
				<p>
					Welcome to World Wide Wears (WWW)! At WWW we are dedicated to
					providing the latest and greatest trendy clothing items the world wide
					web has to offer. Please check out our Black Friday Deals available
					right now, and dare to explore our inventory of thousands of products.
				</p>
				<p>
					This application makes extensive use of Searchspring’s Search API. The
					data organization, pagination features, and search term parameters
					make the experience of searching for clothing items on WWW fast,
					efficient, and easy to use. Our founder Michael Harrison is very
					thankful for the eCommerce optimization tools provided by
					Searchspring, without which WWW would not be possible.
				</p>
				<p>Check out our amazing collection of "wears" today!</p>
				<p>- Michael J. Harrison</p>
			</article>
		</section>
	);
};

export default AboutUs;