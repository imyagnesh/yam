import { createSelector } from 'reselect';

const selectPersonalInfoState = () => state => state.get('personalInfo');


const getPersonalInfo = () => createSelector(
  selectPersonalInfoState(),
  personalInfoState => personalInfoState.get('personalInfo')
);

const makePersonalInfoLoading = () => createSelector(
  selectPersonalInfoState(),
  personalInfoState => personalInfoState.get('loading')
);

const makePersonalInfoError = () => createSelector(
  selectPersonalInfoState(),
  personalInfoState => personalInfoState.get('error')
);

export {
  getPersonalInfo,
  makePersonalInfoLoading,
  makePersonalInfoError,
};
