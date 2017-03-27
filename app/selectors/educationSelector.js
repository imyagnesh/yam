import { createSelector } from 'reselect';

const selectEducationState = () => state => state.get('education');


const getEducation = () => createSelector(
  selectEducationState(),
  educationState => educationState.get('education')
);

const makeEducationLoading = () => createSelector(
  selectEducationState(),
  educationState => educationState.get('loading')
);

const makeEducationError = () => createSelector(
  selectEducationState(),
  educationState => educationState.get('error')
);

export {
  getEducation,
  makeEducationLoading,
  makeEducationError,
};
