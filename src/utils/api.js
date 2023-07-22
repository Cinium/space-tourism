class Api {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	async getPlanetsInfo() {
		return this.#fetch('planets');
	}

	async getCrewInfo() {
		return this.#fetch('members');
	}

	async getTechInfo() {
		return this.#fetch('techs');
	}

	async #fetch(section) {
		const res = await fetch(`${this.baseUrl}${section}`);
		const data = await res.json();
		return data;
	}
}

const url =
	process.env.NODE_ENV === 'production'
		? 'https://space-tourism-api.onrender.com/'
		: 'http://localhost:3001/';
		
export const api = new Api(url);
