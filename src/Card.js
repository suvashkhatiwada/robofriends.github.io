import React from 'react';

const Card = () => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow pw2 shadow-5'>
			<img alt='robots' src='https://robohash.org/test' />
			<div>
				<h2>Jane Doe</h2>
				<p>jane.doe@gmail.com</p>
			</div>
		</div>
	);
};

export default Card;