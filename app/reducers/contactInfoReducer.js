import { fromJS } from 'immutable';
import { CONTACTINFO_SAVE_REQUEST, CONTACTINFO_SAVE_SUCCESS, CONTACTINFO_SAVE_FAIL } from './../constants';

const initialState = fromJS({
	loading: false,
	error: false,
	contactInfo: false,
});

function contactInfoReducer(state = initialState, action) {
	switch (action.type) {
		case CONTACTINFO_SAVE_REQUEST:
			return state
				.set('loading', true)
				.set('error', false);
		case CONTACTINFO_SAVE_SUCCESS:
			return state
				.set('loading', false)
				.set('contactInfo', action.contactInfo);
		case CONTACTINFO_SAVE_FAIL:
			return state
				.set('error', action.error)
				.set('loading', false);
		default:
			return state;
	}
}

export default contactInfoReducer;