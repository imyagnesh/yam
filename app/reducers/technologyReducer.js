import { TECHNOLOGY_LOAD_REQUEST, TECHNOLOGY_LOAD_SUCCESS, TECHNOLOGY_LOAD_FAIL } from './../constants';

const initialState = {
	loading: false,
	error: false,
	technology: [],
};

function technologyReducer(state = initialState, action) {
	switch (action.type) {
		case TECHNOLOGY_LOAD_REQUEST:
			return Object.assign({}, state, {
					loading: true,
					error: false,
					technology: [],
				});
		case TECHNOLOGY_LOAD_SUCCESS:
			return Object.assign({}, state, {
					loading: false,
					error: false,
					technology: action.technology,
				});		
		case TECHNOLOGY_LOAD_FAIL:
			return Object.assign({}, state, {
					loading: false,
					error: action.error,
					technology: [],
				});	
		default:
			return state;
	}
}

export default technologyReducer;