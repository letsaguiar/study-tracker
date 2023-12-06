import { defineStore } from "pinia";
import { HttpService } from "../assets/ts/http.service";

export interface ExamDto {
	id: string;
	name: string;
	first_application_date?: string;
	second_application_date?: string;
}

export interface ExamCreateDto extends Omit<ExamDto, 'id'> {}

export interface ExamUpdateDto extends Partial<ExamCreateDto> {}

export const useExamStore = defineStore('exam', {

	state: () => ({
	  exams: [] as ExamDto[],
	  _service: new HttpService('/exam'),
	}),
  
	actions: {
  
	  async get() {
		this.exams = await this._service.get('');
	  },
  
	  async create(data: ExamCreateDto) {
		await this._service.post('', data);
		await this.get();
	  },
  
	  async update(id: string, data: ExamUpdateDto) {
		await this._service.patch(id, data);
		await this.get();
	  },
  
	  async delete(id: string) {
		await this._service.delete(id);
		await this.get();
	  }
  
	}
  
});