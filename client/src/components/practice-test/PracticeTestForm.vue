<template>
	<form>
		<Select label="matéria" :value="subject_id" :options="subjectOptions" />
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { useSubjectStore } from '@/stores/subject.store';
import Select from '../base/form/Select.vue';

export default defineComponent({

	components: { Select },

	data()
	{
		return {
			subject_id: '',
		};
	},

	computed: {

		...mapState(useSubjectStore, {
			subjects: 'subjectFlatTree',
		}),

		subjectOptions()
		{
			return this.subjects.map((subject) => ({ name: subject.name, value: subject.id }));
		},

	},

	methods: {

		...mapActions(useSubjectStore, {
			updateSubjects: 'get',
		}),

	},

	mounted()
	{
		if (!this.subjects.length)
			this.updateSubjects();
	}

});

</script>