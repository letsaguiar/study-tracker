<template>
	<form @submit.prevent="submit">
		<Select label="matéria" :value="subject_id" :options="subjectOptions" @change="(value) => subject_id = value" />
		<Date label="Data" :value="date" @change="(value) => date = value" />
		<div class="container">
			<div class="grid grid-cols-2 gap-4">
				<Time label="início" :value="init" @change="(value) => init = value" />
				<Time label="fim" :value="end" @change="(value) => end = value" />
			</div>
		</div>
		<Button type="submit" color="green" class="w-full">salvar</Button>
	</form>
</template>

<script lang="ts">
import dayjs from 'dayjs';
import { defineComponent, type PropType } from 'vue';
import { mapState, mapActions } from 'pinia';
import { useSubjectStore } from '@/stores/subject.store';
import Select from '../base/form/Select.vue';
import Date from '../base/form/Date.vue';
import Time from '../base/form/Time.vue';
import Button from '../base/button/Button.vue';
import type { StudySessionCreateDto, StudySessionDto } from '@/stores/study-session.store';

export default defineComponent({

	components: { Select, Date, Time, Button },

	emits: [ 'submit' ],

	props: {
		studySession: Object as PropType<StudySessionDto>
	},

	data()
	{
		return {
			subject_id: '',
			date: dayjs().toISOString(),
			init: dayjs().toISOString(),
			end: dayjs().toISOString()
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

		buildDateTime(date: string, time: string)
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

	watch: {

		studySession()
		{
			if (this.studySession)
			{
				this.subject_id = this.studySession.subject.id;
				this.date = dayjs(this.studySession.init).toISOString();
				this.init = dayjs(this.studySession.init).toISOString();
				this.end = dayjs(this.studySession.end).toISOString();
			}
			else
			{
				this.subject_id = '';
				this.date = dayjs().toISOString();
				this.init = dayjs().toISOString();
				this.end = dayjs().toISOString();
			}
		}

	},

	mounted() {
		if (this.subjects.length === 0)
			this.updateSubjects();
	},

});
</script>
