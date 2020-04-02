import {TAB_DATA } from '../../../modules/Dashboard/actions';

const initialState = {
	navBarTabData: []
};

export const dashBoard= (state = initialState, action) => {
	switch (action.type) {
		case TAB_DATA:
			return {
				...state,
				navBarTabData: action.payload
			};
		default:
			return state;
	}
};
