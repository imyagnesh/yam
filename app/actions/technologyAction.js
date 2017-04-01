import TechnologyApi from './../api/technologyApi';
import { TECHNOLOGY_LOAD_REQUEST, TECHNOLOGY_LOAD_SUCCESS, TECHNOLOGY_LOAD_FAIL } from './../constants';

export function technologyLoadRequest() {
	return { type: TECHNOLOGY_LOAD_REQUEST };
}

export function technologyLoadSuccess(technology) {
	return { type: TECHNOLOGY_LOAD_SUCCESS, technology };
}

export function technologyLoadFail(error) {
	return { type: TECHNOLOGY_LOAD_FAIL, error };
}


export function loadTechnology() {
	return (dispatch) => {
		dispatch(technologyLoadRequest());
		return TechnologyApi.getTechnology().then((technology) => {
			if (technology.success) {
				dispatch(technologyLoadSuccess(technology.data));
			}
		}).catch((error) => {
			dispatch(technologyLoadFail(error));
		});
	};
}
