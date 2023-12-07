<template>
	<form @submit.prevent="submit">
		<Select label="matéria" :options="subjectOptions" :required="true" v-model="subject_id" />
		<Date label="Data" v-model="date" />
		<div class="container">
			<div class="grid grid-cols-2 gap-4">
				<Input label="número de questões" :type="'number'" :required="true" v-model="number_of_questions" />
				<Input label="número de acertos" :type="'number'" :required="true" v-model="number_of_hits" />
			</div>
		</div>
		<Button type="submit" color="green" class="w-full">salvar</Button>
	</form>
</template>

<script lang="ts">
import dayjs from 'dayjs';

import { useSubjectStore } from '@/stores/subject.store';
import { mapActions, mapState } from 'pinia';
import { defineComponent, type PropType } from 'vue';

import type { PracticeTestCreateDto, PracticeTestDto } from '../../stores/practice-test.store';
import Button from '../base/button/Button.vue';
import Date from '../base/form/Date.vue';
import Input from '../base/form/Input.vue';
import Select from '../base/form/Select.vue';

export default defineComponent({

	components: { Button, Select, Date, Input },

	emits: ['submit'],

	props: {
		practiceTest: Object as PropType<PracticeTestDto>
	},

	data()
	{
		return {
			subject_id: null as unknown as string,
			date: null as unknown as string,
			number_of_questions: null as unknown as number,
			number_of_hits: null as unknown as number,
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

		load(practice_test?: PracticeTestDto)
		{
			this.subject_id = practice_test?.subject?.id  || '';
			this.date = practice_test?.date || dayjs().toISOString();
			this.number_of_questions = practice_test?.number_of_questions || 0;
			this.number_of_hits = practice_test?.number_of_hits || 0;
		},

		submit()
		{
			const practice_test: PracticeTestCreateDto = {
				subject: { id: this.subject_id },
				date: this.date,
				number_of_questions: this.number_of_questions,
				number_of_hits: this.number_of_hits,
			};

			this.$emit('submit', practice_test);
			this.load();
		}

	},

	watch: {

		practiceTest()
		{
			this.load(this.practiceTest);	
		},

	},

	mounted()
	{
		this.load(this.practiceTest);

		if (!this.subjects.length)
			this.updateSubjects();
	}

});

</script>