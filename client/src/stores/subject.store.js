import { defineStore } from "pinia";
import { HttpService } from "../assets/js/http.service";

export const useSubjectStore = defineStore('subject', {

	state: () => ({
		_service: new HttpService('/subject'),

		subjects: [],
	}),

	getters: {

		subjectTree(state)
		{
			const tree = [];

			for (const subject of state.subjects)
			{
				if (!subject.parent)
					tree.push({ ...subject, children: [] });
				else
				{
					const parent = tree.find(item => item.id === subject.parent.id);
					parent?.children?.push(subject);
				}
			}

			return (tree);
		},

		subjectFlatTree(state)
		{
			const tree = this.subjectTree;
			const flatTree = [];

			for (const subject of tree)
			{
				flatTree.push(subject);
				flatTree.push(...subject.children);
			}

			return (flatTree);
		}

	},

	actions: {

		async get()
		{
			this.subjects = await this._service.get('');
		},

		async create(subject)
		{
			await this._service.post('', subject);
			this.get();
		},

		async update(id, subject)
		{
			await this._service.patch(id, subject);
			this.get();
		},

		async delete(id)
		{
			await this._service.delete(id);
			this.get();
		},

	}

});