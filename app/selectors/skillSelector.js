import { createSelector } from 'reselect';

const selectSkillState = () => state => state.get('skill');


const getSkill = () => createSelector(
  selectSkillState(),
  skillState => skillState.get('skill')
);

const makeSkillLoading = () => createSelector(
  selectSkillState(),
  skillState => skillState.get('loading')
);

const makeSkillError = () => createSelector(
  selectSkillState(),
  skillState => skillState.get('error')
);

export {
  getSkill,
  makeSkillLoading,
  makeSkillError,
};
