import { HttpService } from "./HttpService";

export class SubjectService extends HttpService
{

	constructor()
	{
		super(import.meta.env.VITE_SERVER_HOST + '/subject');
	}
	
}