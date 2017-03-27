import { createSelector } from 'reselect';

const selectLoginState = () => state => state.get('login');


const makeSelectCurrentUser = () => createSelector(
  selectLoginState(),
  loginState => loginState.get('currentUser')
);

const makeSelectLoading = () => createSelector(
  selectLoginState(),
  loginState => loginState.get('loading')
);

const makeSelectError = () => createSelector(
  selectLoginState(),
  loginState => loginState.get('error')
);

export {
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
};
