import PhoneContext from '../../context/phone-context/phoneContext';
import { useContext, useEffect } from 'react';
import PhoneItems from './PhoneItems';
import Spinner from '../layout/Spinner';

const Phone = () => {
	const phoneContext = useContext(PhoneContext);
	const { loading, filtered } = phoneContext;
	useEffect(() => {
		phoneContext.getPhones();
		// eslint-disable-next-line
	}, []);

	// if (phones.length === 0) {
	// 	return <h4>Please type a phone name</h4>;
	// }

	console.log('hhhhhh--> ', filtered);
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={phoneStyle}>
				{filtered.map((phone) => (
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
