import { request } from '../utils/request';

class ContactInfoApi {
	static save(data) {
		return new Promise((resolve, reject) => {
			const token = sessionStorage.getItem('token');
			request('/api/saveContactInfo', {
				method: 'post',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					authorization: `bearer ${token}`
				},
				body: JSON.stringify(data),
			}).then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign([], err)));
		});
	}
	static getContactInfo() {
		return new Promise((resolve, reject) => {
			const token = sessionStorage.getItem('token');
			request('/api/getContactInfo', {
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

export default ContactInfoApi;
