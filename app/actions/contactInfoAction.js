import ContactInfoApi from './../api/contactInfoApi';
import {
  CONTACTINFO_SAVE_REQUEST,
  CONTACTINFO_SAVE_SUCCESS,
  CONTACTINFO_SAVE_FAIL,
  CONTACTINFO_LOAD_REQUEST,
  CONTACTINFO_LOAD_SUCCESS,
  CONTACTINFO_LOAD_FAIL
} from './../constants';

export function contactInfoSaveRequest() {
  return { type: CONTACTINFO_SAVE_REQUEST };
}

export function contactInfoSaveSuccess(contactInfo) {
  return { type: CONTACTINFO_SAVE_SUCCESS, contactInfo };
}

export function contactInfoSaveFail(error) {
  return { type: CONTACTINFO_SAVE_FAIL, error };
}

export function contactInfoLoadRequest() {
  return { type: CONTACTINFO_LOAD_REQUEST };
}

export function contactInfoLoadSuccess(contactInfo) {
  return { type: CONTACTINFO_LOAD_SUCCESS, contactInfo };
}

export function contactInfoLoadFail(error) {
  return { type: CONTACTINFO_LOAD_FAIL, error };
}

export function contactInfoSave(data) {
  return (dispatch) => {
    dispatch(contactInfoSaveRequest());
    return ContactInfoApi.save(data).then((contactInfo) => {
      if (contactInfo.success) {
        dispatch(contactInfoSaveSuccess(contactInfo));
      }
    }).catch((error) => {
      dispatch(contactInfoSaveFail(error));
    });
  };
}

export function contactInfoLoad() {
  return (dispatch) => {
    dispatch(contactInfoLoadRequest());
    return ContactInfoApi.getContactInfo().then((contactInfo) => {
      if (contactInfo.success) {
        dispatch(contactInfoLoadSuccess(contactInfo.data));
      }
    }).catch((error) => {
      dispatch(contactInfoLoadFail(error));
    });
  };
}
