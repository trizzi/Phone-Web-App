import { useReducer } from 'react';
import axios from 'axios';
import PhoneContext from './phoneContext';
import PhoneReducer from './phoneReducer';

import {
	GET_PHONES,
	PHONE_DETAILS,
	SET_LOADING,
	FILTER_PHONES,
	CLEAR_FILTER,
} from '../types';

const PhoneState = (props) => {
	const initialState = {
		phones: [],
		phoneDetails: {},
		loading: false,
		filtered: null,
	};

	const [state, dispatch] = useReducer(
		PhoneReducer,
		initialState
	);

	// Search Phones

	// Get phone
	const getPhones = async () => {
		setLoading();

		const res = await axios.get(
			'https://ezeapi-prod-copy.herokuapp.com/api/v1/sell-request/in-stock?sort=new&limit=20&page=1&minPrice=0&maxPrice=2500&storageSizeString=&conditionString=&category=Smartphones&brand=Apple,Samsung,Google,Huawei,LG,Motorola,OnePlus'
		);
		dispatch({
			type: GET_PHONES,
			payload: res.data.data.data,
		});
	};

	// Get phone details
	const getPhonesPrice = async () => {
		setLoading();

		const res = await axios.get(
			'https://ezeapi-prod-copy.herokuapp.com/api/v1/sell-request/in-stock?sort=new&limit=20&page=1&minPrice=0&maxPrice=2500&storageSizeString=&conditionString=&category=Smartphones&brand=Apple,Samsung,Google,Huawei,LG,Motorola,OnePlus'
		);
		dispatch({
			type: PHONE_DETAILS,
			payload: res.data.data.data.lowestAsk,
		});
	};

	// Filter Phones

	const filterPhones = (text) => {
		dispatch({
			type: FILTER_PHONES,
			payload: text,
		});
	};

	// clear filter
	const clearFilter = () => {
		dispatch({
			type: CLEAR_FILTER,
		});
	};

	// Set loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<PhoneContext.Provider
			value={{
				phones: state.phones,
				phoneDetails: state.phoneDetails,
				loading: state.loading,
				filtered: state.filtered,
				getPhones,
				getPhonesPrice,
				filterPhones,
				clearFilter,
			}}>
			{props.children}
		</PhoneContext.Provider>
	);
};

export default PhoneState;
