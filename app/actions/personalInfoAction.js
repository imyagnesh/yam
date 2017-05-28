import PersonalInfoApi from './../api/personalInfoApi';
import {
  PERSONALINFO_SAVE_REQUEST,
  PERSONALINFO_SAVE_SUCCESS,
  PERSONALINFO_SAVE_FAIL,
  PERSONALINFO_LOAD_REQUEST,
  PERSONALINFO_LOAD_SUCCESS,
  PERSONALINFO_LOAD_FAIL
} from './../constants';

export function personalInfoLoadRequest() {
  return { type: PERSONALINFO_LOAD_REQUEST };
}

export function personalInfoLoadSuccess(personalInfo) {
  return { type: PERSONALINFO_LOAD_SUCCESS, personalInfo };
}

export function personalInfoLoadFail(error) {
  return { type: PERSONALINFO_LOAD_FAIL, error };
}

export function personalInfoLoad() {
  return (dispatch) => {
    dispatch(personalInfoLoadRequest());
    return PersonalInfoApi.getPersonalInfo().then((personalInfo) => {
      if (personalInfo.success) {
        dispatch(personalInfoLoadSuccess(personalInfo.data));
      }
    }).catch((error) => {
      dispatch(personalInfoLoadFail(error));
    });
  };
}


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
