import WorkExpApi from './../api/workExpApi';
import { WORKEXP_SAVE_REQUEST, WORKEXP_SAVE_SUCCESS, WORKEXP_SAVE_FAIL } from './../constants';

export function workExpSaveRequest() {
  return { type: WORKEXP_SAVE_REQUEST };
}

export function workExpSaveSuccess(workExp) {
  return { type: WORKEXP_SAVE_SUCCESS, workExp };
}

export function workExpSaveFail(error) {
  return { type: WORKEXP_SAVE_FAIL, error };
}

export function workExpSave(data) {
  return (dispatch) => {
    dispatch(workExpSaveRequest());
    return WorkExpApi.save(data).then((workExp) => {
      if (workExp.success) {
        dispatch(workExpSaveSuccess(workExp));
      }
    }).catch((error) => {
      dispatch(workExpSaveFail(error));
    });
  };
}
