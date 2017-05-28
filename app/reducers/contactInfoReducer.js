import {
	CONTACTINFO_SAVE_REQUEST,
	CONTACTINFO_SAVE_SUCCESS,
	CONTACTINFO_SAVE_FAIL,
	CONTACTINFO_LOAD_REQUEST,
	CONTACTINFO_LOAD_SUCCESS,
	CONTACTINFO_LOAD_FAIL
} from './../constants';

const initialState = {
	loading: false,
	error: false,
	contactInfo: false,
};

function contactInfoReducer(state = initialState, action) {
	switch (action.type) {
		case CONTACTINFO_LOAD_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false,
				contactInfo: false,
			});
		case CONTACTINFO_LOAD_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				contactInfo: action.contactInfo,
			});
		case CONTACTINFO_LOAD_FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: action.error,
				contactInfo: false,
			});
		case CONTACTINFO_SAVE_REQUEST:
			return Object.assign({}, state, {
				loading: true,
				error: false,
				contactInfo: false,
			});
		case CONTACTINFO_SAVE_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				error: false,
				contactInfo: action.contactInfo,
			});
		case CONTACTINFO_SAVE_FAIL:
			return Object.assign({}, state, {
				loading: false,
				error: action.error,
				contactInfo: false,
			});
		default:
			return state;
	}
}

export default contactInfoReducer;