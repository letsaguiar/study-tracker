<template>
	<form @submit.prevent="formSubmit()">
		<div class="row">
			<div class="col-12">
				<div class="input-group input-group-outline my-3">
					<input v-model="selectedName" type="text" class="form-control" placeholder="Nome">
				</div>
			</div>

			<div class="col-6">
				<div class="input-group input-group-static mb-4">
					<label>Data da Primeira Aplicação</label>
      				<input type="date" class="form-control" v-model="selectedFirstDate">
				</div>	
			</div>

			<div class="col-6">
				<div class="input-group input-group-static mb-4">
					<label>Data da Segunda Aplicação</label>
      				<input type="date" class="form-control" v-model="selectedSecondDate">
				</div>	
			</div>

			<div class="col-12">
				<button type="submit" class="btn btn-success w-100">Salvar</button>
			</div>
		</div>
	</form>
</template>

<script>
import dayjs from 'dayjs';

export default {

	emits: ['form-submitted'],
		
	props: [ 'exam' ],

	data()
	{
		return {
			_selectedName: null,
			_selectedFirstDate: null,
			_selectedSecondDate: null,
		}
	},
	
	computed: {

		selectedName: {
			get () { return this._selectedName || this.exam?.name },
			set (value) { this._selectedName = value },
		},

		selectedFirstDate: {
			get () {
				if (this._selectedFirstDate)
					return this._selectedFirstDate;
				if (this.exam?.first_application_date)
					return dayjs(this.exam.first_application_date).format("YYYY-MM-DD");
			},

			set (value) { this._selectedFirstDate = value },
		},

		selectedSecondDate: {
			get () {
				if (this._selectedSecondDate)
					return this._selectedSecondDate;
				if (this.exam?.second_application_date)
					return dayjs(this.exam.second_application_date).format("YYYY-MM-DD");
			},

			set (value) { this._selectedSecondDate = value },
		},

	},
	
	methods: {

		formSubmit()
		{
			this.$emit('form-submitted', {
				name: this.selectedName,
				first_application_date: this.selectedFirstDate,
				second_application_date: this.selectedSecondDate,
			});

			this.selectedName = null;
			this.selectedFirstDate = null;
			this.selectedSecondDate = null;
		}

	}

}
</script>
