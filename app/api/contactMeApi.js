import { request } from '../utils/request';

class ContactMeApi {
	static save(data) {
		return new Promise((resolve, reject) => {
			const token = sessionStorage.getItem('token');
			request('/api/saveContactMe', {
				method: 'post',
				headers: {
					authorization: `bearer ${token}`
				},
				body: data,
			}).then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign([], err)));

		});
	}

}

export default ContactMeApi;
