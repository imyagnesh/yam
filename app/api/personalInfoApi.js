import { request } from '../utils/request';

class PersonalInfoApi {
	static save(data) {
		return new Promise((resolve, reject) => {
			const token = sessionStorage.getItem('token');
			request('/api/savePersonalInfo', {
				method: 'post',
				headers: {
					authorization: `bearer ${token}`
				},
				body: data,
			}).then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign([], err)));

		});
	}
	static getPersonalInfo() {
		return new Promise((resolve, reject) => {
			const token = sessionStorage.getItem('token');
			request('/api/getPersonalInfo', {
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

export default PersonalInfoApi;
