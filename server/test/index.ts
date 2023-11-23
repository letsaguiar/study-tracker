import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { TestModule } from './test.module';
import { unlink } from 'fs';
import * as request from 'supertest';

export class TestApplication
{

	private static instance: TestApplication;
	
	public server: INestApplication;
	
	public static async create(): Promise<TestApplication>
	{
		if (!TestApplication.instance)
		{
			const app = new TestApplication();

			app.server = await NestFactory.create(TestModule, {
				logger: false
			});

			app.server.useGlobalPipes(new ValidationPipe({
				transform: true,
				whitelist: true,
				forbidNonWhitelisted: true,
			}));

			TestApplication.instance = app;
		}

		return (TestApplication.instance);
	}

	public async listen(): Promise<void>
	{
		await this.server.listen(3001);
	}

	public async close(): Promise<void>
	{
		await this.server.close();
		unlink('database/study-tracker-test.db', () => true);
	}

	public getResource<TInput = any>(resource: any): TInput
	{
		return this.server.get<TInput>(resource);
	}

	public get(path: string): request.Test
	{
		return request(this.server.getHttpServer()).get(path);
	}

	public post(path: string): request.Test
	{
		return request(this.server.getHttpServer()).post(path);
	}

	public patch(path: string): request.Test
	{
		return request(this.server.getHttpServer()).patch(path);
	}
	
	public delete(path: string): request.Test
	{
		return request(this.server.getHttpServer()).delete(path);
	}
}
