import SkillApi from './../api/skillApi';
import { SKILL_SAVE_REQUEST, SKILL_SAVE_SUCCESS, SKILL_SAVE_FAIL } from './../constants';

export function skillSaveRequest() {
  return { type: SKILL_SAVE_REQUEST };
}

export function skillSaveSuccess(skill) {
  return { type: SKILL_SAVE_SUCCESS, skill };
}

export function skillSaveFail(error) {
  return { type: SKILL_SAVE_FAIL, error };
}

export function skillSave(data) {
  return (dispatch) => {
    dispatch(skillSaveRequest());
    return SkillApi.save(data).then((skill) => {
      if (skill.success) {
        dispatch(skillSaveSuccess(skill));
      }
    }).catch((error) => {
      dispatch(skillSaveFail(error));
    });
  };
}
