import './Banner.css';

// Assets
import BannerImg from '../../assets/banner-image.png';

const Banner = () => {
	return (
		<section className='banner-container'>
			<img alt='banner-img' src={BannerImg} className='banner-image' />
			<h2>Check Out Our Black Friday Deals Below!</h2>
		</section>
	);
};

export default Banner;
