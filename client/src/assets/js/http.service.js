import axios from 'axios';

export class HttpService
{
	constructor(path)
	{
		this._axios = axios.create({
			baseURL: import.meta.env.VITE_SERVER_HOST + path,
			timeout: 1000,
		});
	}

	async get(endpoint)
	{
		try {
			const response = await this._axios.get(endpoint);
			return (response.data);
		}
		catch (error) {
			console.error(error);
		}
	}

	async post(endpoint, data)
	{
		try {
			const response = await this._axios.post(endpoint, data);
			return (response.data);
		}
		catch (error) {
			console.error(error);
		}
	}

	async patch(endpoint, data)
	{
		try {
			const response = await this._axios.patch(endpoint, data);
			return (response.data);
		}
		catch (error) {
			console.error(error);
		}
	}

	async delete(endpoint)
	{
		try {
			const response = await this._axios.delete(endpoint);
			return (response.data);
		}
		catch (error) {
			console.error(error);
		}
	}

}