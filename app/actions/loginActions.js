import AuthApi from './../api/authApi';
import { push } from 'react-router-redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './../constants';

export function loginRequest() {
  return { type: LOGIN_REQUEST };
}

export function loginSuccess(username) {
  return { type: LOGIN_SUCCESS, username };
}

export function loginFail(error) {
  return { type: LOGIN_FAIL, error };
}

export function login(data) {
  return (dispatch) => {
    dispatch(loginRequest());
    return AuthApi.login(data).then((result) => {
      if (result.success) {
        sessionStorage.setItem('token', result.token);
        dispatch(loginSuccess(result.username));
        dispatch(push('/dashboard'));
      }
    }).catch((error) => {
      dispatch(loginFail(error));
    });
  };
}
