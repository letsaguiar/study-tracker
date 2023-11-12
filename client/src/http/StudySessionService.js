import { HttpService } from './HttpService'

export class StudySessionService extends HttpService
{
	constructor()
	{
		super('http://localhost/api/study-session');
	}

	getSummary()
	{
		return this._get('/summary');
	}
}