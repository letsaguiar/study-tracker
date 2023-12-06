<template>
	<form @submit.prevent="submit">
		<Input type="text" placeholder="Português" label="nome" :required="true" v-model="name" />
		<Select label="área do conhecimento" :options="subjectOptions" v-model="parent_id" />
		<Button type="submit" color="green" class="w-full">salvar</Button>
	</form>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { defineComponent } from 'vue';
import { useSubjectStore, type SubjectCreateDto, type SubjectDto } from '../../stores/subject.store';
import Button from '../base/button/Button.vue';
import Input from '../base/form/Input.vue';
import Select from '../base/form/Select.vue';

export default defineComponent({

	components: { Input, Select, Button },
	
	emits: [ 'submit' ],

	props: [ 'subject' ],

	data() {
		return {
			name: null as unknown as string,
			parent_id: null as unknown as string,
		};
	},

	computed: {
		
		...mapState(useSubjectStore, {
			subjects:  'subjectTree',
		}),

		subjectOptions()
		{
			return this.subjects.map((subject) => ({ name: subject.name, value: subject.id }))
		}

	},

	methods: {

		...mapActions(useSubjectStore, {
			updateSubjects: 'get',
		}),

		load(subject?: SubjectDto)
		{
			this.name = subject?.name || '';
			this.parent_id = subject?.parent?.id || '';
		},
		
		submit()
		{
			const subject: SubjectCreateDto = { name: this.name };
			if (this.parent_id)
				subject.parent = { id: this.parent_id };

			this.$emit('submit', subject);
			this.load();
		},

	},

	watch: {

		subject()
		{
			this.load(this.subject);
		}

	},

	mounted() {
		this.load();

		if (this.subjects.length === 0)
			this.updateSubjects();
	},

});

</script>
