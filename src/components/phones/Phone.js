import PhoneContext from '../../context/phone-context/phoneContext';
import { useContext, useEffect } from 'react';
import PhoneItems from './PhoneItems';
import Spinner from '../layout/Spinner';

const Phone = () => {
	const phoneContext = useContext(PhoneContext);

	useEffect(() => {
		phoneContext.getPhones();
		// eslint-disable-next-line
	}, []);

	const { loading, phones } = phoneContext;

	console.log('hhhhhh--> ', phones);
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={phoneStyle}>
				{phones.map((phone) => (
					<PhoneItems key={phone._id} phone={phone} />
				))}
			</div>
		);
	}
};

const phoneStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(5, 1fr)',
	gridGap: '1rem',
};

export default Phone;
