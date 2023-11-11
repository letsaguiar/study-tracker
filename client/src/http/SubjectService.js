import { HttpService } from "./HttpService";

export class SubjectService extends HttpService
{

	constructor()
	{
		super('http://localhost/api/subject');
	}
	
}