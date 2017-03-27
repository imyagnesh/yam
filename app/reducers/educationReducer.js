import { fromJS } from 'immutable';
import { EDUCATION_SAVE_REQUEST, EDUCATION_SAVE_SUCCESS, EDUCATION_SAVE_FAIL } from './../constants';

const initialState = fromJS({
	loading: false,
	error: false,
	education: false,
});

function educationReducer(state = initialState, action) {
	switch (action.type) {
		case EDUCATION_SAVE_REQUEST:
			return state
				.set('loading', true)
				.set('error', false);
		case EDUCATION_SAVE_SUCCESS:
			return state
				.set('loading', false)
				.set('education', action.education);
		case EDUCATION_SAVE_FAIL:
			return state
				.set('error', action.error)
				.set('loading', false);
		default:
			return state;
	}
}

export default educationReducer;