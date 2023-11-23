import { TestApplication } from '../../test';
import { SubjectController } from './subject.controller';

describe('SubjectController', () => 
{
	let app: TestApplication;
	let controller: SubjectController;

	beforeAll(async () => 
	{
		app = await TestApplication.create();
		controller = app.get<SubjectController>(SubjectController);
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
