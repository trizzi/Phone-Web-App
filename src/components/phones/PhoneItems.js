import React from 'react';

const PhoneItems = ({
	phone: {
		img,
		name,
		carrier,
		storage_size,
		price,
		quantity,
	},
}) => {
	return (
		<div className='card text-center'>
			<img src={img} alt='' style={{ width: '60px' }} />
			<h3>{name}</h3>
			<p>
				{carrier}
				{''}
				{storage_size}
			</p>
			<h3>{price}</h3>
			<p>{quantity} Available</p>
			<div>
				<a href='#' className='btn btn-primary btn-sm my-1'>
					Buy
				</a>
			</div>
		</div>
	);
};

export default PhoneItems;
