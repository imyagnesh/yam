import { fromJS } from 'immutable';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './../constants';

const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('currentUser', action.username);
    case LOGIN_FAIL:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default loginReducer;