import { getRepositoryToken } from '@nestjs/typeorm';
import { TestApplication } from '../../test';
import { PracticeTest } from './practice-test.entity';
import { PracticeTestService } from './practice-test.service';

const repositoryMock = {
	create: jest.fn().mockReturnValue({}),
	save: jest.fn().mockReturnValue(null),
	update: jest.fn().mockReturnValue(null),
	findOne: jest.fn().mockReturnValue({}),
	find: jest.fn().mockReturnValue([]),
	delete: jest.fn().mockReturnValue(null),
};

describe('PracticeTestService', () => 
{
	let app: TestApplication;
	let service: PracticeTestService;

	beforeAll(async () => 
	{
		app = await new TestApplication({
			providers: [
				PracticeTestService,
				{ provide: getRepositoryToken(PracticeTest), useValue: repositoryMock }
			]
		}).compile();

		service = app.getResource(PracticeTestService);

		await app.init();
	});

	afterAll(async () => 
	{
		await app.close();
	});

	test('should be defined', () =>
	{
		expect(service).toBeDefined();
	});

	describe('buildPracticeTestDto', () =>
	{
		test('should return a practice test dto', () =>
		{
			const practice_test = { number_of_hits: 1, number_of_questions: 2 } as PracticeTest;
			const dto = service['buildPracticeTestDto'](practice_test);
			expect(dto).toEqual({ ...practice_test, hit_rate: 50 });
		});
	});

	describe('create', () => 
	{
		test('should call create and save methods', async () => 
		{
			await service.create({} as any);
			expect(repositoryMock.create).toHaveBeenCalledWith({});
			expect(repositoryMock.save).toHaveBeenCalled();
		});
	});

	describe('update', () => 
	{
		test('should call update method', async () => 
		{
			await service.update('id', {} as any);
			expect(repositoryMock.update).toHaveBeenCalledWith('id', {});
		});
	});

	describe('getOne', () => 
	{
		test('should call findOne method', async () => 
		{
			await service.getOne('id');
			expect(repositoryMock.findOne).toHaveBeenCalledWith({ where: { id: 'id' }, relations: ['subject'] });
		});
	});

	describe('getMany', () => 
	{
		test('should call find method', async () => 
		{
			await service.getMany();
			expect(repositoryMock.find).toHaveBeenCalledWith({ relations: ['subject'], order: { date: 'DESC' } });
		});
	});

	describe('delete', () => 
	{
		test('should call delete method', async () => 
		{
			await service.delete('id');
			expect(repositoryMock.delete).toHaveBeenCalledWith('id');
		});
	});

});