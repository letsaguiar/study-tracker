import { defineStore } from "pinia";
import { HttpService } from "./http.service";

export const useSubjectStore = defineStore('subject', {
	state: () => ({
		entries: [],
		summary: null,
	}),

	actions: {

		async updateEntries()
		{
			this.entries = await new HttpService().get('/subject');
		},

		async updateSummary()
		{
			this.summary = await new HttpService().get('/subject/summary');
		},

	},
});
