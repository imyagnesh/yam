import {
	ABOUTME_SAVE_REQUEST,
	ABOUTME_SAVE_SUCCESS,
	ABOUTME_SAVE_FAIL,
	ABOUTME_LOAD_REQUEST,
	ABOUTME_LOAD_SUCCESS,
	ABOUTME_LOAD_FAIL
} from './../constants';

const initialState = {
	loading: false,
	error: false,
	aboutMe: false,
};

function aboutMeReducer(state = initialState, action) {
	switch (action.type) {
		case ABOUTME_SAVE_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false,
				aboutMe: false,
			});
		case ABOUTME_SAVE_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				aboutMe: action.aboutMe,
			});
		case ABOUTME_SAVE_FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: action.error,
				aboutMe: false,
			});
		case ABOUTME_LOAD_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false,
				aboutMe: false,
			});
		case ABOUTME_LOAD_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				aboutMe: action.aboutMe,
			});
		case ABOUTME_LOAD_FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: action.error,
				aboutMe: false,
			});
		default:
			return state;
	}
}

export default aboutMeReducer;