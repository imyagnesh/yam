import { SKILL_SAVE_REQUEST, SKILL_SAVE_SUCCESS, SKILL_SAVE_FAIL } from './../constants';

const initialState = {
	loading: false,
	error: false,
	skill: false,
};

function skillReducer(state = initialState, action) {
	switch (action.type) {
		case SKILL_SAVE_REQUEST:
			return Object.assign({}, state, {
					loading: true,
					error: false,
					skill: false,
				});
		case SKILL_SAVE_SUCCESS:
			return Object.assign({}, state, {
					loading: false,
					error: false,
					skill: action.skill,
				});		
		case SKILL_SAVE_FAIL:
			return Object.assign({}, state, {
					loading: false,
					error: action.error,
					skill: false,
				});	
		default:
			return state;
	}
}

export default skillReducer;