import { createSelector } from 'reselect';

const selectContactMeState = () => state => state.get('contactMe');


const getContactMe = () => createSelector(
  selectContactMeState(),
  contactMeState => contactMeState.get('contactMe')
);

const makeContactMeLoading = () => createSelector(
  selectContactMeState(),
  contactMeState => contactMeState.get('loading')
);

const makeContactMeError = () => createSelector(
  selectContactMeState(),
  contactMeState => contactMeState.get('error')
);

export {
  getContactMe,
  makeContactMeLoading,
  makeContactMeError,
};
