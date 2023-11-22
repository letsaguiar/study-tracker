import { defineStore } from "pinia";
import { HttpService } from './http.service';

export const useExamStore = defineStore('exam', {
	
	state: () => ({
		entries: [],
	}),


	actions: {

		async updateEntries()
		{
			this.entries = await new HttpService().get('/exam');
		},

		async createEntry(data)
		{
			await new HttpService().post('/exam', data);
			this.updateEntries();
		},

		async updateEntry(id, data)
		{
			await new HttpService().patch(`/exam/${id}`, data);
			this.updateEntries();
		},

		async deleteEntry(id)
		{
			await new HttpService().delete(`/exam/${id}`);
			this.updateEntries();
		}
	},	
});
