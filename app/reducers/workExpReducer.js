import { fromJS } from 'immutable';
import { WORKEXP_SAVE_REQUEST, WORKEXP_SAVE_SUCCESS, WORKEXP_SAVE_FAIL } from './../constants';

const initialState = fromJS({
	loading: false,
	error: false,
	workExp: false,
});

function workExpReducer(state = initialState, action) {
	switch (action.type) {
		case WORKEXP_SAVE_REQUEST:
			return state
				.set('loading', true)
				.set('error', false);
		case WORKEXP_SAVE_SUCCESS:
			return state
				.set('loading', false)
				.set('workExp', action.workExp);
		case WORKEXP_SAVE_FAIL:
			return state
				.set('error', action.error)
				.set('loading', false);
		default:
			return state;
	}
}

export default workExpReducer;