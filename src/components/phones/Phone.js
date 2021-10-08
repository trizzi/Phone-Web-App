import PropTypes from 'prop-types';
import PhoneItems from './PhoneItems';

const Phone = ({ phones }) => {
	return (
		<div style={phoneStyle}>
			{phones.map((phone) => (
				<PhoneItems key={phone.id} phone={phone} />
			))}
		</div>
	);
};

const phoneStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(5, 1fr)',
	gridGap: '1rem',
};

Phone.propTypes = {
	phone: PropTypes.array.isRequired,
};

export default Phone;
