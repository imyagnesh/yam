import ContactMeApi from './../api/contactMeApi';
import { CONTACTME_SAVE_REQUEST, CONTACTME_SAVE_SUCCESS, CONTACTME_SAVE_FAIL } from './../constants';

export function contactMeSaveRequest() {
  return { type: CONTACTME_SAVE_REQUEST };
}

export function contactMeSaveSuccess(contactMe) {
  return { type: CONTACTME_SAVE_SUCCESS, contactMe };
}

export function contactMeSaveFail(error) {
  return { type: CONTACTME_SAVE_FAIL, error };
}

export function contactMeSave(data) {
  return (dispatch) => {
    dispatch(contactMeSaveRequest());
    return ContactMeApi.save(data).then((contactMe) => {
      if (contactMe.success) {
        dispatch(contactMeSaveSuccess(contactMe));
      }
    }).catch((error) => {
      dispatch(contactMeSaveFail(error));
    });
  };
}
