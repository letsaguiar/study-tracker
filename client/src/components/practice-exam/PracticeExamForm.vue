<template>
	<form @submit.prevent="submit">
		<Select label="exame" placeholder="Selecione um exame" :required="true" :options="examOptions" v-model="exam"  />
		<Date label="data" v-model="date" />
		<div class="containerw">
			<div class="grid grid-cols-2 gap-4">
				<Input label="número de questões" :type="'number'" :required="true" v-model="number_of_questions" />
				<Input label="número de acertos" :type="'number'" :required="true" v-model="number_of_hits" />
			</div>
		</div>
		<Button type="submit" color="green" class="w-full">salvar</Button>
	</form>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { defineComponent } from 'vue';
import { useExamStore } from '../../stores/exam.store';

import dayjs from 'dayjs';

import type { PracticeExamCreateDto, PracticeExamDto } from '../../stores/practice-exam.store';
import Button from '../base/button/Button.vue';
import Date from '../base/form/Date.vue';
import Input from '../base/form/Input.vue';
import Select from '../base/form/Select.vue';

export default defineComponent({

	components: { Select, Date, Input, Button },

	emits: ['submit'],

	props: [ 'practiceExam' ],

	data() {
		return {
			exam: null as unknown as string,
			date: null as unknown as string,
			number_of_questions: null as unknown as number,
			number_of_hits: null as unknown as number,
		};
	},

	computed: {

		...mapState(useExamStore, {
			exams: 'exams',
		}),

		examOptions()
		{
			return this.exams.map((exam: any) => ({ name: exam.name, value: exam.id }));
		},

	},

	methods: {

		...mapActions(useExamStore, {
			updateExams: 'get',
		}),

		load(practice_exam?: PracticeExamDto)
		{
			this.exam = practice_exam?.exam.id || '';
			this.date = practice_exam?.date || dayjs().toISOString();
			this.number_of_questions = practice_exam?.number_of_questions || 0;
			this.number_of_hits = practice_exam?.number_of_hits || 0;
		},

		submit() {
			const exam: PracticeExamCreateDto = {
				exam: { id: this.exam },
				date: this.date,
				number_of_questions: this.number_of_questions,
				number_of_hits: this.number_of_hits,
			};

			this.$emit('submit', exam);
			this.load();
		}
		
	},

	watch: {

		practiceExam()
		{
			this.load(this.practiceExam);
		}

	},

	mounted() {
		this.load(this.practiceExam)
		if (!this.exams.length) {
			this.updateExams();
		}
	}

});
</script>