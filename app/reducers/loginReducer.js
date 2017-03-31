import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './../constants';

const initialState = {
  loading: false,
  error: false,
  currentUser: false,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
    return Object.assign({}, state, {
					loading: true,
					error: false,
					currentUser: false,
				});
    case LOGIN_SUCCESS:
    return Object.assign({}, state, {
					loading: false,
					error: false,
					currentUser: action.username,
				});			
      
    case LOGIN_FAIL:
    return Object.assign({}, state, {
					loading: false,
					error: action.error,
					currentUser: false,
				});	
    default:
      return state;
  }
}

export default loginReducer;