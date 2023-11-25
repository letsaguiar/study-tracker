import { TestApplication } from '../../test';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';

const serviceMock = {};

describe('SubjectController', () => 
{
	let app: TestApplication;
	let controller: SubjectController;

	beforeAll(async () => 
	{
		app = await new TestApplication({
			controllers: [SubjectController],
			providers: [
				{ provide: SubjectService, useValue: serviceMock }
			],
		}).compile();

		controller = app.getResource(SubjectController);

		await app.init();
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