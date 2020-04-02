import {TAB_DATA } from '../../../modules/Dashboard/actions';

const initialState = {
	tabData: ''
};

export const dashBoard= (state = initialState, action) => {
	switch (action.type) {
		case TAB_DATA:
			return {
				...state,
				tabData: action.payload
			};
		default:
			return state;
	}
};
