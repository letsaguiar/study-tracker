<template>
	<form @submit.prevent="submit">
		<Input type="text" placeholder="Português" :required="true" label="nome" @change="(data) => name = data" />
		<Select label="área do conhecimento" :options="subjectOptions" @change="(data) => parent_id = data" />
		<Button type="submit" color="green" class="w-full">salvar</Button>
	</form>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { SubjectCreateDto, useSubjectStore } from '../../stores/subject.store';
import { defineComponent } from 'vue';
import Input from '../base/form/Input.vue';
import Select from '../base/form/Select.vue';
import Button from '../base/button/Button.vue';

export default defineComponent({

	components: { Input, Select, Button },
	
	emits: [ 'submit' ],

	data() {
		return {
			name: '',
			parent_id: '',
		};
	},

	computed: {
		
		...mapState(useSubjectStore, {
			subjects:  'subjectFlatTree',
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
		
		submit()
		{
			const subject: SubjectCreateDto = { name: this.name };
			if (this.parent_id)
				subject.parent.id = this.parent_id;

			this.$emit('submit', subject);
		},

	},

	mounted() {
		if (this.subjects.length === 0)
			this.updateSubjects();
	},

});

</script>
