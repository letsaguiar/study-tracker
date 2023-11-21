import { defineStore } from "pinia";
import { HttpService } from "./http.service";

export const useStudySessionStore = defineStore('study-session', {
	
	state: () => ({
		entries: [],
		summary: {},
	}),

	actions: {

		async updateEntries()
		{
			this.entries = await new HttpService().get('/study-session');
		},

		async updateSumamry()
		{
			this.summary = await new HttpService().get('/study-session/summary');
		},

		async createEntry(data)
		{
			await new HttpService().post('/study-session', data);
			this.updateEntries();
		},

		async updateEntry(id, data)
		{
			await new HttpService().patch(`/study-session/${id}`, data);
			this.updateEntries();
		},

		async deleteEntry(id)
		{
			await new HttpService().delete(`/study-session/${id}`);
			this.updateEntries();
		}

	}

});
