import BlackFriday from '../../assets/black-friday.jpg';
import Clothes from '../../assets/clothes.jpg';
import './Banner.css'

const Banner = () => {
	return (
		<section>
			<img alt='black-friday' src={BlackFriday} className='banner-image' />
			<img alt='clothes' src={Clothes} className='banner-image' />
			<img alt='black-friday' src={BlackFriday} className='banner-image' />
		</section>
	);
};

export default Banner;
