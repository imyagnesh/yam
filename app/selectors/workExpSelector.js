import { createSelector } from 'reselect';

const selectWorkExpState = () => state => state.get('workExp');


const getWorkExp = () => createSelector(
  selectWorkExpState(),
  workExpState => workExpState.get('workExp')
);

const makeWorkExpLoading = () => createSelector(
  selectWorkExpState(),
  workExpState => workExpState.get('loading')
);

const makeWorkExpError = () => createSelector(
  selectWorkExpState(),
  workExpState => workExpState.get('error')
);

export {
  getWorkExp,
  makeWorkExpLoading,
  makeWorkExpError,
};
