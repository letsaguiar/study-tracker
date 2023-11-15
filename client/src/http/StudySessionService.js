import { HttpService } from './HttpService'

export class StudySessionService extends HttpService
{
	constructor()
	{
		super(import.meta.env.VITE_SERVER_HOST + '/study-session');
	}

	getSummary()
	{
		return this._get('/summary');
	}
}