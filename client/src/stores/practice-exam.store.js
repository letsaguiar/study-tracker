import { defineStore } from 'pinia';
import { HttpService } from './http.service';

export const usePracticeExamStore = defineStore('practice-exam', {
	  state: () => ({
		entries: [],
	  }),

	actions: {

		async updateEntries()
		{
			this.entries = await new HttpService().get('/practice-exam');
		},

		async createEntry(data)
		{
			await new HttpService().post('/practice-exam', data);
			this.updateEntries();
		},

		async updateEntry(id, data)
		{
			await new HttpService().patch(`/practice-exam/${id}`, data);
			this.updateEntries();
		},

		async deleteEntry(id)
		{
			await new HttpService().delete(`/practice-exam/${id}`);
			this.updateEntries();
		}
	}, 
});