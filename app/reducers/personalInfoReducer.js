import { fromJS } from 'immutable';
import { PERSONALINFO_SAVE_REQUEST, PERSONALINFO_SAVE_SUCCESS, PERSONALINFO_SAVE_FAIL } from './../constants';

const initialState = fromJS({
	loading: false,
	error: false,
	personalInfo: false,
});

function personalInfoReducer(state = initialState, action) {
	switch (action.type) {
		case PERSONALINFO_SAVE_REQUEST:
			return state
				.set('loading', true)
				.set('error', false);
		case PERSONALINFO_SAVE_SUCCESS:
			return state
				.set('loading', false)
				.set('personalInfo', action.personalInfo);
		case PERSONALINFO_SAVE_FAIL:
			return state
				.set('error', action.error)
				.set('loading', false);
		default:
			return state;
	}
}

export default personalInfoReducer;