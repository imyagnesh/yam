import { fromJS } from 'immutable';
import { SKILL_SAVE_REQUEST, SKILL_SAVE_SUCCESS, SKILL_SAVE_FAIL } from './../constants';

const initialState = fromJS({
	loading: false,
	error: false,
	skill: false,
});

function skillReducer(state = initialState, action) {
	switch (action.type) {
		case SKILL_SAVE_REQUEST:
			return state
				.set('loading', true)
				.set('error', false);
		case SKILL_SAVE_SUCCESS:
			return state
				.set('loading', false)
				.set('skill', action.skill);
		case SKILL_SAVE_FAIL:
			return state
				.set('error', action.error)
				.set('loading', false);
		default:
			return state;
	}
}

export default skillReducer;