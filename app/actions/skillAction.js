import SkillApi from './../api/skillApi';
import {
  SKILL_SAVE_REQUEST,
  SKILL_SAVE_SUCCESS,
  SKILL_SAVE_FAIL,
  SKILL_LOAD_REQUEST,
  SKILL_LOAD_SUCCESS,
  SKILL_LOAD_FAIL
} from './../constants';

export function skillLoadRequest() {
  return { type: SKILL_LOAD_REQUEST };
}

export function skillLoadSuccess(skill) {
  return { type: SKILL_LOAD_SUCCESS, skill };
}

export function skillLoadFail(error) {
  return { type: SKILL_LOAD_FAIL, error };
}

export function skillLoad() {
  return (dispatch) => {
    dispatch(skillLoadRequest());
    return SkillApi.getSkills().then((skill) => {
      if (skill.success) {
        dispatch(skillLoadSuccess(skill.data));
      }
    }).catch((error) => {
      dispatch(skillLoadFail(error));
    });
  };
}


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
