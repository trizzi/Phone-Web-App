import { useContext } from 'react';
import PhoneContext from '../../context/phone-context/phoneContext';
const Search = () => {
	const phoneContext = useContext(PhoneContext);

	const { filterPhones, clearFilter } = phoneContext;

	const onChange = (e) => {
		if (e.target.value) {
			filterPhones(e.target.value.toLowerCase());
		} else {
			clearFilter();
		}
		console.log('typing => ', e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('kkkkk', e);
	};
	return (
		<form onSubmit={onSubmit}>
			<h2>Shop Our Latest Available Stock Here</h2>
			<input
				type='text'
				onChange={onChange}
				placeholder='Enter Search Term (e.g iPhone x, 128GB or A1)'
			/>
			<button className='btn '>
				Search
				<i className='fas fa-arrow-right'></i>
			</button>
		</form>
	);
};

export default Search;
