// import PhoneContext from '../../context/phone-context/phoneContext';
// import { useContext } from 'react';

const PhoneItems = ({
	phone: { imgUrl, name, quantity, lowestAsk },
}) => {
	// const phoneContext = useContext(PhoneContext);
	// console.log('lowestAsk --> ', lowestAsk);

	return (
		<div className='card text-center  bg-grey'>
			<img src={imgUrl} alt='' style={{ width: '60px' }} />
			<h3>{name}</h3>
			<p>
				{lowestAsk ? lowestAsk.carrier : 'No carrier'}
				{''}
				{lowestAsk
					? lowestAsk.storage_size
					: 'No storage info'}
			</p>
			<h3>
				{lowestAsk ? lowestAsk.price : 'No price info'}
			</h3>
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
