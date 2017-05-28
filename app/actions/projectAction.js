import ProjectApi from './../api/projectApi';
import {
  PROJECT_SAVE_REQUEST,
  PROJECT_SAVE_SUCCESS,
  PROJECT_SAVE_FAIL,
  PROJECT_LOAD_REQUEST,
  PROJECT_LOAD_SUCCESS,
  PROJECT_LOAD_FAIL
} from './../constants';

export function projectLoadRequest() {
  return { type: PROJECT_LOAD_REQUEST };
}

export function projectLoadSuccess(project) {
  return { type: PROJECT_LOAD_SUCCESS, project };
}

export function projectLoadFail(error) {
  return { type: PROJECT_LOAD_FAIL, error };
}

export function projectLoad() {
  return (dispatch) => {
    dispatch(projectLoadRequest());
    return ProjectApi.getProjects().then((project) => {
      if (project.success) {
        dispatch(projectLoadSuccess(project.data));
      }
    }).catch((error) => {
      dispatch(projectLoadFail(error));
    });
  };
}


export function projectSaveRequest() {
  return { type: PROJECT_SAVE_REQUEST };
}

export function projectSaveSuccess(project) {
  return { type: PROJECT_SAVE_SUCCESS, project };
}

export function projectSaveFail(error) {
  return { type: PROJECT_SAVE_FAIL, error };
}

export function projectSave(data) {
  return (dispatch) => {
    dispatch(projectSaveRequest());
    return ProjectApi.save(data).then((project) => {
      if (project.success) {
        dispatch(projectSaveSuccess(project));
      }
    }).catch((error) => {
      dispatch(projectSaveFail(error));
    });
  };
}
