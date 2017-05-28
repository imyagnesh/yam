import { request } from '../utils/request';

class AboutMeApi {
	static save(data) {
		return new Promise((resolve, reject) => {
			const token = sessionStorage.getItem('token');
			request('/api/saveAboutMe', {
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
	static getAboutMe(language) {
		return new Promise((resolve, reject) => {
			request(`/publicApi/getAboutMe/${language}`)
				.then(json => resolve(Object.assign({}, json)))
				.catch(err => reject(Object.assign({}, err)));
		});
	}
}

export default AboutMeApi;
