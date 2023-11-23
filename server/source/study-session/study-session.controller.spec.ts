import { TestApplication } from '../../test';
import { StudySessionController } from './study-session.controller';

describe('StudySessionController', () => 
{
	let app: TestApplication;
	let controller: StudySessionController;

	beforeAll(async () => 
	{
		app = await TestApplication.create();
		controller = app.get<StudySessionController>(StudySessionController);
	});

	afterAll(async () => 
	{
		await app.close();
	});


	test('should be defined', () => 
	{
		expect(controller).toBeDefined();
	});

});
