import { fromJS } from 'immutable';
import { ABOUTME_SAVE_REQUEST, ABOUTME_SAVE_SUCCESS, ABOUTME_SAVE_FAIL } from './../constants';

const initialState = fromJS({
	loading: false,
	error: false,
	aboutMe: false,
});

function aboutMeReducer(state = initialState, action) {
	switch (action.type) {
		case ABOUTME_SAVE_REQUEST:
			return state
				.set('loading', true)
				.set('error', false);
		case ABOUTME_SAVE_SUCCESS:
			return state
				.set('loading', false)
				.set('aboutMe', action.aboutMe);
		case ABOUTME_SAVE_FAIL:
			return state
				.set('error', action.error)
				.set('loading', false);
		default:
			return state;
	}
}

export default aboutMeReducer;