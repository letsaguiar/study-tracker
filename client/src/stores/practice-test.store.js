import { defineStore } from "pinia";
import { HttpService } from './http.service';

export const usePracticeTestStore = defineStore('practice-test', {
	
	state: () => ({
		entries: [],
		summary: {},
	}),

	actions: {

		async updateEntries()
		{
			this.entries = await new HttpService().get('/practice-test');
		},

		async updateSumamry()
		{
			this.summary = await new HttpService().get('/practice-test/summary');
		},

		async createEntry(data)
		{
			await new HttpService().post('/practice-test', data);
			this.updateEntries();
		},

		async updateEntry(id, data)
		{
			await new HttpService().patch(`/practice-test/${id}`, data);
			this.updateEntries();
		},

		async deleteEntry(id)
		{
			await new HttpService().delete(`/practice-test/${id}`);
			this.updateEntries();
		}

	}

});
