import ProjectApi from './../api/projectApi';
import { PROJECT_SAVE_REQUEST, PROJECT_SAVE_SUCCESS, PROJECT_SAVE_FAIL } from './../constants';

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
