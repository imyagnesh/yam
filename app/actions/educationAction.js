import EducationApi from './../api/educationApi';
import {
  EDUCATION_SAVE_REQUEST,
  EDUCATION_SAVE_SUCCESS,
  EDUCATION_SAVE_FAIL,
  EDUCATION_LOAD_REQUEST,
  EDUCATION_LOAD_SUCCESS,
  EDUCATION_LOAD_FAIL
} from './../constants';

export function educationSaveRequest() {
  return { type: EDUCATION_SAVE_REQUEST };
}

export function educationSaveSuccess(education) {
  return { type: EDUCATION_SAVE_SUCCESS, education };
}

export function educationSaveFail(error) {
  return { type: EDUCATION_SAVE_FAIL, error };
}

export function educationSave(data) {
  return (dispatch) => {
    dispatch(educationSaveRequest());
    return EducationApi.save(data).then((education) => {
      if (education.success) {
        dispatch(educationSaveSuccess(education));
      }
    }).catch((error) => {
      dispatch(educationSaveFail(error));
    });
  };
}

export function educationLoadRequest() {
  return { type: EDUCATION_LOAD_REQUEST };
}

export function educationLoadSuccess(education) {
  return { type: EDUCATION_LOAD_SUCCESS, education };
}

export function educationLoadFail(error) {
  return { type: EDUCATION_LOAD_FAIL, error };
}

export function educationLoad() {
  return (dispatch) => {
    dispatch(educationLoadRequest());
    return EducationApi.getEducation().then((education) => {
      if (education.success) {
        dispatch(educationLoadSuccess(education.data));
      }
    }).catch((error) => {
      dispatch(educationLoadFail(error));
    });
  };
}

