import {
	EDUCATION_SAVE_REQUEST,
	EDUCATION_SAVE_SUCCESS,
	EDUCATION_SAVE_FAIL,
	EDUCATION_LOAD_REQUEST,
	EDUCATION_LOAD_SUCCESS,
	EDUCATION_LOAD_FAIL
} from './../constants';

const initialState = {
	loading: false,
	error: false,
	education: false,
};

function educationReducer(state = initialState, action) {
	switch (action.type) {
		case EDUCATION_LOAD_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false,
				education: false,
			});
		case EDUCATION_LOAD_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				education: action.education,
			});
		case EDUCATION_LOAD_FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: action.error,
				education: false,
			});
		case EDUCATION_SAVE_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false,
				education: false,
			});
		case EDUCATION_SAVE_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				education: action.education,
			});
		case EDUCATION_SAVE_FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: action.error,
				education: false,
			});
		default:
			return state;
	}
}

export default educationReducer;