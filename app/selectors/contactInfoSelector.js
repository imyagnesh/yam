import { createSelector } from 'reselect';

const selectContactInfoState = () => state => state.get('contactInfo');


const getContactInfo = () => createSelector(
  selectContactInfoState(),
  contactInfoState => contactInfoState.get('contactInfo')
);

const makeContactInfoLoading = () => createSelector(
  selectContactInfoState(),
  contactInfoState => contactInfoState.get('loading')
);

const makeContactInfoError = () => createSelector(
  selectContactInfoState(),
  contactInfoState => contactInfoState.get('error')
);

export {
  getContactInfo,
  makeContactInfoLoading,
  makeContactInfoError,
};
