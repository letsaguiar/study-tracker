import { HttpService } from "../assets/ts/http.service";
import { defineStore } from "pinia";
import type { SubjectDto } from "./subject.store";

export interface StudySessionDto {
	id: string;
	subject: SubjectDto;
	init: string;
	end: string;
}

export interface StudySessionCreateDto extends Pick<StudySessionDto, 'init' | 'end'>
{
	subject: Pick<SubjectDto, 'id'>;
}

export interface StudySessionUpdateDto extends Partial<StudySessionCreateDto> {}

export const useStudySessionStore = defineStore('study-session', {

	state: () => ({
		studySessions: [] as StudySessionDto[],
		_service: new HttpService('/study-session'),
	}),

	actions: {

		async get() {
			this.studySessions = await this._service.get('');
		},

		async create(data: StudySessionCreateDto) {
			await this._service.post('', data);
			await this.get();
		},

		async update(id: string, data: StudySessionUpdateDto) {
			await this._service.patch(id, data);
			await this.get();
		},

		async delete(id: string) {
			await this._service.delete(id);
			await this.get();
		}

	}

});

