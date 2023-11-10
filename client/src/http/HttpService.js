import axios from 'axios'

export class HttpService
{

	constructor(baseURL)
	{
		this.requester = axios.create({ baseURL });
	}

	async get(endpoint)
	{
		try
		{
			const response = await this.requester.get(endpoint);
			return (response.data);
		}
		catch (err)
		{
			console.error(err);
		}
	}
	
	async delete(endpoint)
	{
		try
		{
			const response = await this.requester.delete(endpoint);
			return (response.status);
		}
		catch (err)
		{
			console.error(err);
		}
	}

	async post(endpoint, data)
	{
		try
		{
			const response = await this.requester.post(endpoint, data);
			return (response.data);
		}
		catch (err)
		{
			console.error(err);
		}
	}

}