import AboutMeApi from './../api/aboutMeApi';
import { ABOUTME_SAVE_REQUEST, ABOUTME_SAVE_SUCCESS, ABOUTME_SAVE_FAIL } from './../constants';

export function aboutMeSaveRequest() {
  return { type: ABOUTME_SAVE_REQUEST };
}

export function aboutMeSaveSuccess(aboutMe) {
  return { type: ABOUTME_SAVE_SUCCESS, aboutMe };
}

export function aboutMeSaveFail(error) {
  return { type: ABOUTME_SAVE_FAIL, error };
}

export function aboutMeSave(data) {
  return (dispatch) => {
    dispatch(aboutMeSaveRequest());
    return AboutMeApi.save(data).then((aboutMe) => {
      if (aboutMe.success) {
        dispatch(aboutMeSaveSuccess(aboutMe));
      }
    }).catch((error) => {
      dispatch(aboutMeSaveFail(error));
    });
  };
}
