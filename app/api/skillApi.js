import { request } from '../utils/request';

class SkillApi {
	static save(data) {
		return new Promise((resolve, reject) => {
			const token = sessionStorage.getItem('token');
			request('/api/saveSkill', {
				method: 'post',
				headers: {
					authorization: `bearer ${token}`
				},
				body: data,
			}).then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign([], err)));

		});
	}
	static getSkills() {
		return new Promise((resolve, reject) => {
			request('/publicApi/getSkills')
				.then(json => resolve(Object.assign([], json)))
				.catch(err => reject(Object.assign({}, err)));
		});
	}
}

export default SkillApi;
