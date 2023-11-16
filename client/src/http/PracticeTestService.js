import { HttpService } from './HttpService';

export class PracticeTestService extends HttpService {

	constructor() {
		super(import.meta.env.VITE_SERVER_HOST + '/practice-test');
	}

}