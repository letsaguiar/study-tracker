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

		async createEntry(data)
		{
			await new HttpService().post('/subject', data);
			this.updateEntries();
		},

		async updateEntry(id, data)
		{
			await new HttpService().patch(`/subject/${id}`, data);
			this.updateEntries();
		},

	},

	getters: {

		orderByRelationship()
		{

			const result = [];

			for (const subject of this.entries)
			{
				if (!subject.parent)
					result.push(subject);
				else
				{
					const parentIndex = result.findIndex((parent) => parent.id === subject.parent.id);
					result.splice(parentIndex + 1, 0, subject);
				}
			}

			return result;

		},

		onlyParents()
		{
			return this.entries.filter((entry) => !entry.parent);
		}

	}
});
