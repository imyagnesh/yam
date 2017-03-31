import { ABOUTME_SAVE_REQUEST, ABOUTME_SAVE_SUCCESS, ABOUTME_SAVE_FAIL } from './../constants';

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
		default:
			return state;
	}
}

export default aboutMeReducer;