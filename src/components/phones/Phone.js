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

export default Phone;
