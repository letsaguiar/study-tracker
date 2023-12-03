import { HttpService } from "../assets/ts/http.service";
import { defineStore } from "pinia";

export interface SubjectDto
{
	id: string;
	name: string;
	parent: SubjectDto;
	created_at: Date;
	updated_at: Date;
}

export interface SubjectCreateDto
{
	name: string;
	parent?: Pick<SubjectDto, 'id'>
}

export interface SubjectUpdateDto extends Partial<SubjectCreateDto> { }

export interface SubjectTreeNode extends SubjectDto
{
	children: SubjectDto[];
}

export const useSubjectStore = defineStore('subject', {

	state: () => ({
		subjects: [] as SubjectDto[],
		
		_service: new HttpService('/subject'),
	}),

	getters: {

		subjectTree(state): SubjectTreeNode[]
		{
			const tree = [] as SubjectTreeNode[];

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

		subjectFlatTree() : SubjectTreeNode[]
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

		async create(data: SubjectCreateDto)
		{
			await this._service.post('', data);
			await this.get();
		},

		async update(id: string, data: SubjectUpdateDto)
		{
			await this._service.patch(id, data);
			await this.get();
		},

		async delete(id: string)
		{
			await this._service.delete(id);
			await this.get();
		}

	}

})
