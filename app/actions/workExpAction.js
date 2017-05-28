import WorkExpApi from './../api/workExpApi';
import {
  WORKEXP_SAVE_REQUEST,
  WORKEXP_SAVE_SUCCESS,
  WORKEXP_SAVE_FAIL,
  WORKEXP_LOAD_REQUEST,
  WORKEXP_LOAD_SUCCESS,
  WORKEXP_LOAD_FAIL
} from './../constants';

export function workExpLoadRequest() {
  return { type: WORKEXP_LOAD_REQUEST };
}

export function workExpLoadSuccess(workExp) {
  return { type: WORKEXP_LOAD_SUCCESS, workExp };
}

export function workExpLoadFail(error) {
  return { type: WORKEXP_LOAD_FAIL, error };
}

export function workExpLoad() {
  return (dispatch) => {
    dispatch(workExpLoadRequest());
    return WorkExpApi.getWorkExp().then((workExp) => {
      if (workExp.success) {
        dispatch(workExpLoadSuccess(workExp.data));
      }
    }).catch((error) => {
      dispatch(workExpLoadFail(error));
    });
  };
}


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
