<template>
	<form @submit.prevent="submit">
		<Select label="área do conhecimento" :options="subjectOptions" :value="subject?.parent?.id" @change="(value) => parent = value"></Select>
		<Input label="nome" placeholder="Português" :value="subject?.name" @change="(value) => name = value" />
		<div>
			<Button color="green" custom-class="w-full" @click="submit">salvar</Button>
		</div>
	</form>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useSubjectStore } from '../../stores/subject.store';
import Button from '../base/button/Button.vue';
import Input from '../base/form/Input.vue';
import Select from '../base/form/Select.vue';

export default {

	components: { Input, Select, Button },

	emits: [ 'submit' ],
	
	props: [ 'subject' ],

	data()
	{
		return {
			name: '',
			parent: '',
		}
	},

	computed: {

		...mapState(useSubjectStore, {
			subjects: 'subjectTree',
		}),

		subjectOptions()
		{
			const options = [ {} ];
			for (const subject of this.subjects)
				options.push({ name: subject.name, value: subject.id });

			return (options);
		}

	},

	methods: {

		...mapActions(useSubjectStore, {
			updateSubjects: 'get',
		}),

		submit()
		{
			const subject = { name: this.name };
			if (this.parent)
				subject.parent = { id: this.parent };

			this.$emit('submit', subject);
		}
		
	},

	mounted()
	{
		if (this.subjects.length === 0)
			this.updateSubjects();
	}

}
</script>
