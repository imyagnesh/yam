import EducationApi from './../api/educationApi';
import { EDUCATION_SAVE_REQUEST, EDUCATION_SAVE_SUCCESS, EDUCATION_SAVE_FAIL } from './../constants';

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
      console.log(education);
      if (education.success) {
        dispatch(educationSaveSuccess(education));
      }
    }).catch((error) => {
      console.log(error);
      dispatch(educationSaveFail(error));
    });
  };
}
