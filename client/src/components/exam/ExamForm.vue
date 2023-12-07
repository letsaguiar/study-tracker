<template>
	<form @submit.prevent="submit">
		<Input type="text" label="nome" placeholder="ENEM" :required="true" v-model="name" />
		<div class="container">
			<div class="grid grid-cols-2 gap-4">
				<Date label="primeiro dia de prova" v-model="first_application_date" />
				<Date label="segundo dia de prova" v-model="second_application_date" />
			</div>
		</div>
		<Button type="submit" color="green" class="w-full">salvar</Button>
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { ExamCreateDto, ExamDto } from '../../stores/exam.store';

import dayjs from 'dayjs';

import Button from '../base/button/Button.vue';
import Date from '../base/form/Date.vue';
import Input from '../base/form/Input.vue';

export default defineComponent({

	components: { Input, Date, Button },

	emits: [ 'submit' ],

	props: [ 'exam' ],

	data() {
		return {
			name: null as unknown as string,
			first_application_date: null as unknown as string,
			second_application_date: null as unknown as string,
		};
	},

	methods: {

		load(exam?: ExamDto)
		{
			this.name = exam?.name || '';
			this.first_application_date = exam?.first_application_date || dayjs().toISOString();
			this.second_application_date = exam?.second_application_date || dayjs().toISOString();
		},

		submit()
		{
			const exam: ExamCreateDto = { name: this.name }
			if (this.first_application_date) exam.first_application_date = this.first_application_date;
			if (this.second_application_date) exam.second_application_date = this.second_application_date;

			this.$emit('submit', exam);
			this.load();
		}
	},

	watch: {

		exam()
		{
			this.load(this.exam);
		}

	},

	mounted()
	{
		this.load(this.exam);
	}
	
});

</script>