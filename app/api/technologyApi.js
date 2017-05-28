import { request } from '../utils/request';

class TechnologyApi {
	static getTechnology() {
		return new Promise((resolve, reject) => {
			request('/publicApi/getTechnology')
				.then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign({}, err)));
		});
	}
}

export default TechnologyApi;
