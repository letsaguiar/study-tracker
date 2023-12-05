import { HttpService } from "../assets/ts/http.service";
import { defineStore } from "pinia";
import type { SubjectDto } from "./subject.store";

export interface PracticeTestDto
{
	id: string;
	subject: SubjectDto;
	date: string;
	number_of_questions: number;
	number_of_hits: number;
	hit_rate: number;
}

export interface PracticeTestCreateDto extends Pick<PracticeTestDto, 'date' | 'number_of_questions' | 'number_of_hits'>
{
	subject: Pick<SubjectDto, 'id'>;
}

export interface PracticeTestUpdateDto extends Partial<PracticeTestCreateDto> {}

export const usePracticeTestStore = defineStore('practice-test', {

  state: () => ({
    practiceTests: [] as PracticeTestDto[],
    _service: new HttpService('/practice-test'),
  }),

  actions: {

    async get()
	{
      this.practiceTests = await this._service.get('');
    },

    async create(data: PracticeTestCreateDto)
	{
      await this._service.post('', data);
      await this.get();
    },

    async update(id: string, data: PracticeTestUpdateDto)
	{
      await this._service.patch(id, data);
      await this.get();
    },

    async delete(id: string)
	{
      await this._service.delete(id);
      await this.get();
    }

  }

});
