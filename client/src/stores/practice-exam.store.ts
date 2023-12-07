import { defineStore } from "pinia";
import { HttpService } from "../assets/ts/http.service";
import type { ExamDto } from "./exam.store";

export interface PracticeExamDto {
  id: string;
  exam: ExamDto;
  date: string;
  number_of_questions: number;
  number_of_hits: number;
  hit_rate: number;
}

export interface PracticeExamCreateDto extends Pick<PracticeExamDto, 'date' | 'number_of_questions' | 'number_of_hits'>
{
  exam: Pick<ExamDto, 'id'>;
}

export interface PracticeExamUpdateDto extends Partial<PracticeExamCreateDto> {}

export const usePracticeExamStore = defineStore('practice-exam', {

  state: () => ({
    practiceExams: [] as PracticeExamDto[],
    _service: new HttpService('/practice-exam'),
  }),

  actions: {

    async get() {
      this.practiceExams = await this._service.get('');
    },

    async create(data: PracticeExamCreateDto) {
      await this._service.post('', data);
      await this.get();
    },

    async update(id: string, data: PracticeExamUpdateDto) {
      await this._service.patch(id, data);
      await this.get();
    },

    async delete(id: string) {
      await this._service.delete(id);
      await this.get();
    }

  }

});
