import {
	PERSONALINFO_SAVE_REQUEST,
	PERSONALINFO_SAVE_SUCCESS,
	PERSONALINFO_SAVE_FAIL,
	PERSONALINFO_LOAD_REQUEST,
	PERSONALINFO_LOAD_SUCCESS,
	PERSONALINFO_LOAD_FAIL
} from './../constants';

const initialState = {
	loading: false,
	error: false,
	personalInfo: false,
};

function personalInfoReducer(state = initialState, action) {
	switch (action.type) {
		case PERSONALINFO_LOAD_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false,
				personalInfo: false,
			});
		case PERSONALINFO_LOAD_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				personalInfo: action.personalInfo,
			});
		case PERSONALINFO_LOAD_FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: action.error,
				personalInfo: false,
			});
		case PERSONALINFO_SAVE_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false,
				personalInfo: false,
			});
		case PERSONALINFO_SAVE_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				personalInfo: action.personalInfo,
			});
		case PERSONALINFO_SAVE_FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: action.error,
				personalInfo: false,
			});
		default:
			return state;
	}
}

export default personalInfoReducer;