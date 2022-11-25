import { MagnifyingGlass } from 'react-loader-spinner';

const Loading = () => {
  return (
		<div className='loading' style={{textAlign: 'center'}}>
			<MagnifyingGlass
				visible={true}
				height='300'
				width='300'
				textAlign='center'
				ariaLabel='MagnifyingGlass-loading'
				wrapperStyle={{}}
				wrapperClass='MagnifyingGlass-wrapper'
				glassColor='#c0efff'
				color='#e15b64'
			/>
		</div>
	);
}

export default Loading;