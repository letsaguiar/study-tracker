import { HttpService } from "./HttpService";

export class SubjectService extends HttpService
{

	constructor()
	{
		super('http://localhost/api/subject');
	}

	getAll()
	{
		return this.get('');
	}

	deleteById(id)
	{
		return this.delete(id);
	}

	create(data)
	{
		return this.post('', data);
	}

	update(id, data)
	{
		return this.patch(id, data);
	}
}