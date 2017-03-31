import { request } from '../utils/request';

class EducationApi {
	static save(data) {
		return new Promise((resolve, reject) => {
			const token = sessionStorage.getItem('token');
			request('/api/saveEducation', {
				method: 'post',
				headers: {
					authorization: `bearer ${token}`
				},
				body: data,
			}).then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign([], err)));

		});
	}
	static getEducation() {
		return new Promise((resolve, reject) => {
			const token = sessionStorage.getItem('token');
			request('/api/getEducation', {
				method: 'get',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					authorization: `bearer ${token}`
				},
			}).then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign([], err)));
		});
	}
}

export default EducationApi;
