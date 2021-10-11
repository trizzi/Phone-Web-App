import {
	GET_PHONES,
	PHONE_DETAILS,
	SET_LOADING,
	FILTER_PHONES,
	CLEAR_FILTER,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_PHONES:
			return {
				...state,
				phones: action.payload,
				filtered: action.payload,
				loading: false,
			};
		case PHONE_DETAILS:
			return {
				...state,
				phoneDetails: action.payload,
				loading: false,
			};
		case FILTER_PHONES:
			return {
				...state,
				filtered: state.phones.filter((phone) => {
					const regex = new RegExp(
						`${action.payload},  '^[0-9,]*$gi'`
					);
					return phone.name
						.toLowerCase()
						.includes(action.payload);
				}),
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: state.phones,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
