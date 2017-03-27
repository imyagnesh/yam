import PersonalInfoApi from './../api/personalInfoApi';
import { PERSONALINFO_SAVE_REQUEST, PERSONALINFO_SAVE_SUCCESS, PERSONALINFO_SAVE_FAIL } from './../constants';

export function personalInfoSaveRequest() {
  return { type: PERSONALINFO_SAVE_REQUEST };
}

export function personalInfoSaveSuccess(personalInfo) {
  return { type: PERSONALINFO_SAVE_SUCCESS, personalInfo };
}

export function personalInfoSaveFail(error) {
  return { type: PERSONALINFO_SAVE_FAIL, error };
}

export function personalInfoSave(data) {
  return (dispatch) => {
    dispatch(personalInfoSaveRequest());
    return PersonalInfoApi.save(data).then((personalInfo) => {
      if (personalInfo.success) {
        dispatch(personalInfoSaveSuccess(personalInfo));
      }
    }).catch((error) => {
      dispatch(personalInfoSaveFail(error));
    });
  };
}
