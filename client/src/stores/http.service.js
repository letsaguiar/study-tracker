import axios from 'axios'

export class HttpService
{

	constructor()
	{
		if (HttpService.instance)
			return (HttpService.instance);

		this.requester = axios.create({ baseURL: import.meta.env.VITE_SERVER_HOST });
		HttpService.instance = this;
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


	async patch(endpoint, data)
	{
		try
		{
			const response = await this.requester.patch(endpoint, data);
			return (response.data);
		}
		catch (err)
		{
			console.error(err);
		}
	}

}
