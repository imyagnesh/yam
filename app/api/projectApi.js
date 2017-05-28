import { request } from '../utils/request';

class ProjectApi {
	static save(data) {
		return new Promise((resolve, reject) => {
			const token = sessionStorage.getItem('token');
			request('/api/saveProject', {
				method: 'post',
				headers: {
					authorization: `bearer ${token}`
				},
				body: data,
			}).then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign([], err)));

		});
	}
	static getProjects() {
		return new Promise((resolve, reject) => {
			request('/publicApi/getProjects')
				.then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign({}, err)));
		});
	}
}

export default ProjectApi;
