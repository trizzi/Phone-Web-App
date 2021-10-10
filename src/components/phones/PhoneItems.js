import PhoneContext from '../../context/phone-context/phoneContext';
import { useContext } from 'react';

const PhoneItems = ({
	phone: {
		imgUrl,
		name,
		carrier,
		storage_size,
		price,
		quantity,
	},
}) => {
	const phoneContext = useContext(PhoneContext);
	// const { carrier, storage_size, price } = phoneContext;

	// useEffect(() => {
	// 	phoneContext.getPhonesPrice();
	// 	// eslint-disable-next-line
	// }, []);
	// console.log('vvv', price);
	return (
		<div className='card text-center  bg-grey'>
			<img src={imgUrl} alt='' style={{ width: '60px' }} />
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
