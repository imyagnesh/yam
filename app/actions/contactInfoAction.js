import ContactInfoApi from './../api/contactInfoApi';
import { CONTACTINFO_SAVE_REQUEST, CONTACTINFO_SAVE_SUCCESS, CONTACTINFO_SAVE_FAIL } from './../constants';

export function contactInfoSaveRequest() {
  return { type: CONTACTINFO_SAVE_REQUEST };
}

export function contactInfoSaveSuccess(contactInfo) {
  return { type: CONTACTINFO_SAVE_SUCCESS, contactInfo };
}

export function contactInfoSaveFail(error) {
  return { type: CONTACTINFO_SAVE_FAIL, error };
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
