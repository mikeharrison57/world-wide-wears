import './Error.css';

// Assets
import ErrorImg from '../../assets/error-image.jpg';

const Error = () => {
	return (
		<article className='error'>
			<h1>
				We're sorry, we're having some technical difficulties right now please
				come back later. Thank you!
			</h1>
			<img className='error-img' alt='error-img' src={ErrorImg} />
		</article>
	);
};

export default Error;
