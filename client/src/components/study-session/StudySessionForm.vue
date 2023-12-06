<template>
	<form @submit.prevent="submit">
		<Select label="matéria" :value="subject_id" :options="subjectOptions" v-model="subject_id" />
		<Date label="Data" :value="date" v-model="date" />
		<div class="container">
			<div class="grid grid-cols-2 gap-4">
				<Time label="início" v-model="init" />
				<Time label="fim" v-model="end" />
			</div>
		</div>
		<Button type="submit" color="green" class="w-full">salvar</Button>
	</form>
</template>

<script lang="ts">
import type { StudySessionCreateDto, StudySessionDto } from '@/stores/study-session.store';
import { useSubjectStore } from '@/stores/subject.store';
import { mapActions, mapState } from 'pinia';
import { defineComponent, type PropType } from 'vue';

import dayjs from 'dayjs';

import Button from '../base/button/Button.vue';
import Date from '../base/form/Date.vue';
import Select from '../base/form/Select.vue';
import Time from '../base/form/Time.vue';

export default defineComponent({

	components: { Select, Date, Time, Button },

	emits: [ 'submit' ],

	props: {
		studySession: Object as PropType<StudySessionDto>
	},

	data()
	{
		return {
			subject_id: null as unknown as string, 
			date: null as unknown as string,
			init: null as unknown as string,
			end: null as unknown as string,
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

		load(session?: StudySessionDto)
		{
			this.subject_id = session?.subject.id || '';
			this.date = session?.init || dayjs().toISOString();
			this.init = session?.init || dayjs().toISOString();
			this.end = session?.end || dayjs().toISOString();
		},

		submit()
		{
			const study_session: StudySessionCreateDto = {
				subject: { id: this.subject_id },
				init: this.buildDateTime(this.date, this.init),
				end: this.buildDateTime(this.date, this.end),
			};

			this.$emit('submit', study_session);
			this.load();
		}

	},

	watch: {

		studySession()
		{
			this.load(this.studySession);
		}

	},

	mounted() {
		this.load();

		if (this.subjects.length === 0)
			this.updateSubjects();
	},

});
</script>
