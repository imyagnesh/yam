import { createSelector } from 'reselect';

const selectAboutMeState = () => state => state.get('aboutMe');


const getAboutMe = () => createSelector(
  selectAboutMeState(),
  aboutMeState => aboutMeState.get('aboutMe')
);

const makeAboutMeLoading = () => createSelector(
  selectAboutMeState(),
  aboutMeState => aboutMeState.get('loading')
);

const makeAboutMeError = () => createSelector(
  selectAboutMeState(),
  aboutMeState => aboutMeState.get('error')
);

export {
  getAboutMe,
  makeAboutMeLoading,
  makeAboutMeError,
};
