import type { AxiosInstance } from "axios";
import axios from 'axios';
import type { Store } from "pinia";

export class HttpService
{
	private axios: AxiosInstance;
	
	public constructor(path: string)
	{
		this.axios = axios.create({
			baseURL: import.meta.env.VITE_SERVER_HOST + path,
		});
	}

	public async get(path: string)
	{
		const res = await this.axios.get(path);
		return (res.data);
	}

	public async post(path: string, data: any)
	{
		const res = await this.axios.post(path, data);
		return res.data;
	}

	public async patch(path: string, data: any)
	{
		const res = await this.axios.patch(path, data);
		return res.data;
	}

	public async delete(path: string)
	{
		const res = await this.axios.delete(path);
		return res.data;
	}

}
