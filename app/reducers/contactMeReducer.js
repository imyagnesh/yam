import { fromJS } from 'immutable';
import { CONTACTME_SAVE_REQUEST, CONTACTME_SAVE_SUCCESS, CONTACTME_SAVE_FAIL } from './../constants';

const initialState = fromJS({
	loading: false,
	error: false,
	contactMe: false,
});

function contactMeReducer(state = initialState, action) {
	switch (action.type) {
		case CONTACTME_SAVE_REQUEST:
			return state
				.set('loading', true)
				.set('error', false);
		case CONTACTME_SAVE_SUCCESS:
			return state
				.set('loading', false)
				.set('contactMe', action.contactMe);
		case CONTACTME_SAVE_FAIL:
			return state
				.set('error', action.error)
				.set('loading', false);
		default:
			return state;
	}
}

export default contactMeReducer;