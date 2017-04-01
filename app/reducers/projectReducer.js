import { PROJECT_SAVE_REQUEST, PROJECT_SAVE_SUCCESS, PROJECT_SAVE_FAIL } from './../constants';

const initialState = {
	loading: false,
	error: false,
	project: false,
};

function projectReducer(state = initialState, action) {
	switch (action.type) {
		case PROJECT_SAVE_REQUEST:
			return Object.assign({}, state, {
					loading: true,
					error: false,
					project: false,
				});
		case PROJECT_SAVE_SUCCESS:
			return Object.assign({}, state, {
					loading: false,
					error: false,
					project: action.project,
				});		
		case PROJECT_SAVE_FAIL:
			return Object.assign({}, state, {
					loading: false,
					error: action.error,
					project: false,
				});	
		default:
			return state;
	}
}

export default projectReducer;