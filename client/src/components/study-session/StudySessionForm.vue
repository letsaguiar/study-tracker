<template>
	<form>
		<Select label="matéria" :value="studySession?.subject?.id" :options="subjects" />
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { useSubjectStore } from '@/stores/subject.store';
import Select from '../base/form/Select.vue';

export default defineComponent({

	components: { Select },

	props: [ 'studySession' ],

	data()
	{
		return {
			subject: '',
		};
	},

	computed: {
		
		...mapState(useSubjectStore, {
			subjects: 'subjectFlatTree',
		}),

	},

	methods: {
		
		...mapActions(useSubjectStore, {
			updateSubjects: 'get',
		}),

	},

	mounted() {
		if (this.subjects.length === 0)
			this.updateSubjects();
	},

});
</script>
