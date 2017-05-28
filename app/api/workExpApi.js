import { request } from '../utils/request';

class WorkExpApi {
	static save(data) {
		return new Promise((resolve, reject) => {
			const token = sessionStorage.getItem('token');
			request('/api/saveWorkExp', {
				method: 'post',
				headers: {
					authorization: `bearer ${token}`
				},
				body: data,
			}).then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign([], err)));

		});
	}
	static getWorkExp() {
		return new Promise((resolve, reject) => {
			request('/publicApi/getWorkExp')
				.then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign({}, err)));
		});
	}
}

export default WorkExpApi;
