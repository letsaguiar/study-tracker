<template>
	<form @submit.prevent="submit">
		<Select label="matéria" :value="studySession?.subject?.id" :options="subjectOptions" @change="(value) => subject_id = value" />
		<Date label="Data" @change="(value) => date = value" />
		<div class="container">
			<div class="grid grid-cols-2 gap-4">
				<Time label="início" @change="(value) => init = value" />
				<Time label="fim" @change="(value) => end = value" />
			</div>
		</div>
		<Button type="submit" color="green" class="w-full">salvar</Button>
	</form>
</template>

<script lang="ts">
import dayjs from 'dayjs';
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { useSubjectStore } from '@/stores/subject.store';
import Select from '../base/form/Select.vue';
import Date from '../base/form/Date.vue';
import Time from '../base/form/Time.vue';
import Button from '../base/button/Button.vue';
import type { StudySessionCreateDto } from '@/stores/study-session.store';

export default defineComponent({

	components: { Select, Date, Time, Button },

	emits: [ 'submit' ],

	props: [ 'studySession' ],

	data()
	{
		return {
			subject_id: '',
			date: dayjs().toDate(),
			init: dayjs().toDate(),
			end: dayjs().toDate(),
		};
	},

	computed: {
		
		...mapState(useSubjectStore, {
			subjects: 'subjectFlatTree',
		}),

		subjectOptions()
		{
			return this.subjects.map((subject) => ({ name: subject.name, value: subject.id }));
		}
	},

	methods: {
		
		...mapActions(useSubjectStore, {
			updateSubjects: 'get',
		}),

		buildDateTime(date: Date, time: Date)
		{
			const dTime = dayjs(time);
	
			return dayjs(date)
				.set('hour', dTime.hour())
				.set('minute', dTime.minute())
				.toISOString();
		},

		submit()
		{
			const study_session: StudySessionCreateDto = {
				subject: { id: this.subject_id },
				init: this.buildDateTime(this.date, this.init),
				end: this.buildDateTime(this.date, this.end),
			};

			this.$emit('submit', study_session);
		}

	},

	mounted() {
		if (this.subjects.length === 0)
			this.updateSubjects();
	},

});
</script>
