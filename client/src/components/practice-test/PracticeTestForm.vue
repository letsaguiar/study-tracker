<template>
	<form @submit.prevent="submit">
		<Select label="matéria" :value="subject_id" :options="subjectOptions" :required="true" @change="(value) => subject_id = value" />
		<Date label="Data" :value="date" @change="(value) => date = value" />
		<div class="container">
			<div class="grid grid-cols-2 gap-4">
				<Input label="número de questões" :type="'number'" :required="true" :value="number_of_questions" @change="(value) => number_of_questions = value" />
				<Input label="número de acertos" :type="'number'" :required="true" :value="number_of_hits" @change="(value) => number_of_hits = value" />
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
			subject_id: '',
			date: dayjs().toISOString(),
			number_of_questions: 0,
			number_of_hits: 0,
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

		submit()
		{
			const practice_test: PracticeTestCreateDto = {
				subject: { id: this.subject_id },
				date: this.date,
				number_of_questions: this.number_of_questions,
				number_of_hits: this.number_of_hits,
			};

			this.$emit('submit', practice_test);
		}

	},

	watch: {

		practiceTest()
		{
			if (this.practiceTest)
			{
				this.subject_id = this.practiceTest.subject.id;
				this.date = this.practiceTest.date;
				this.number_of_questions = this.practiceTest.number_of_questions;
				this.number_of_hits = this.practiceTest.number_of_hits;
			}
		},

	},

	mounted()
	{
		if (!this.subjects.length)
			this.updateSubjects();
	}

});

</script>