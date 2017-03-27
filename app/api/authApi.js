import { request } from '../utils/request';

class AuthenticationApi {
	static register(data) {
		return new Promise((resolve, reject) => {
			request('/publicApi/register', {
				method: 'post',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}).then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign([], err)));
		});
	}

	static login(data) {
		return new Promise((resolve, reject) => {
			request('/publicApi/login', {
				method: 'post',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}).then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign([], err)));
		});
	}

	static isUserUnique(email) {
		return new Promise((resolve, reject) => {
			if (!email) {
				reject({
					"success": false,
					"message": "Please enter email",
				});
				return;
			}

			request(`/publicApi/isUserUnique/${email}`)
				.then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign([], err)));

		});
	}
}

export default AuthenticationApi;
