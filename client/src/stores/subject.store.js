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

		async deleteEntry(id)
		{
			await new HttpService().delete(`/subject/${id}`);
			this.updateEntries();
		}
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

export function useSubjectBuilder()
{
	return {
	
		_entry: {},

		addName(name)
		{
			if (name && name.length > 0)
				this._entry.name = name;

			return this;
		},

		addParent(parent_id)
		{
			if (parent_id && parent_id.length > 0)
				this._entry.parent = { id: parent_id };

			return this;
		},

		build()
		{
			return this._entry;
		}

	}
}
