import axios from 'axios'

export class HttpService
{

	constructor(baseURL)
	{
		this.requester = axios.create({ baseURL });
	}
	
	async _post(endpoint, data)
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
	
	async _get(endpoint)
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
	
	async _delete(endpoint)
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


	async _patch(endpoint, data)
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

	async getMany()
	{
		return this._get('');
	}

	async getOne(id)
	{
		return this._get(id);
	}

	async create(data)
	{
		return this._post('', data);
	}

	async update(id, data)
	{
		return this._patch(id, data);
	}

	async delete(id)
	{
		return this._delete(id);
	}
}