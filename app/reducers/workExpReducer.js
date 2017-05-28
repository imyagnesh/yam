import {
	WORKEXP_SAVE_REQUEST,
	WORKEXP_SAVE_SUCCESS,
	WORKEXP_SAVE_FAIL,
	WORKEXP_LOAD_REQUEST,
	WORKEXP_LOAD_SUCCESS,
	WORKEXP_LOAD_FAIL
} from './../constants';

const initialState = {
	loading: false,
	error: false,
	workExp: false,
};

function workExpReducer(state = initialState, action) {
	switch (action.type) {
		case WORKEXP_LOAD_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false,
				workExp: false,
			});
		case WORKEXP_LOAD_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				workExp: action.workExp,
			});
		case WORKEXP_LOAD_FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: action.error,
				workExp: false,
			});
		case WORKEXP_SAVE_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false,
				workExp: false,
			});
		case WORKEXP_SAVE_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				workExp: action.workExp,
			});
		case WORKEXP_SAVE_FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: action.error,
				workExp: false,
			});
		default:
			return state;
	}
}

export default workExpReducer;