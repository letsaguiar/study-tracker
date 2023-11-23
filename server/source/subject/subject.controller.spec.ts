import { TestApplication } from '../../test';
import { SubjectController } from './subject.controller';

describe('SubjectController', () => 
{
	let app: TestApplication;
	let controller: SubjectController;

	beforeAll(async () => 
	{
		app = await TestApplication.create();
		controller = app.getResource<SubjectController>(SubjectController);
	});

	afterAll(async () => 
	{
		await app.close();
	});


	test('should be defined', () => 
	{
		expect(controller).toBeDefined();
	});


	describe('create', () => 
	{
		test('should create a new subject', () => 
		{
			app.post('/subject')
				.send({ name: 'Português' })
				.expect(201);
		});
	});

});
