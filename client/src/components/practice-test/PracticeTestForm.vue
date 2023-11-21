<template>
	<form @submit.prevent="submitForm()">
		<div class="row">
			<div class="col-12">
				<div class="input-group input-group-static mb-4">
					<label class="ms-0">Subject</label>
					<select class="form-control" v-model="selectedSubject">
						<option v-for="subject in subjects" :value="subject.id">
							{{ subject.name }}
						</option>
					</select>
				</div>
			</div>
			<div class="col-12">
				<div class="input-group input-group-static mb-4">
					<label>Date</label>
      				<input type="date" class="form-control" v-model="selectedDate">
				</div>
			</div>
			<div class="col-6">
				<label>Number of Questions</label>
				<input type="number" class="form-control" v-model="selectedNoQ">
			</div>
			<div class="col-6">
				<label>Number of Hits</label>
				<input type="number" class="form-control" v-model="selectedNoH">
			</div>
			<div class="col-12">
				<button type="submit" class="btn btn-success mt-4 w-100">Create</button>
			</div>
		</div>
	</form>
</template>

<script>
import dayjs from 'dayjs';
import { mapState, mapActions } from 'pinia';
import { useSubjectStore } from '../../stores/subject.store';

export default {

	emits: [ 'form-submitted' ],

	props: [ 'practicTest' ],

	data()
	{
		return {
			_selectedSubject: null,
			_selectedDate: null,
			_selectedNoQ: null,
			_selectedNoH: null,
		};
	},

	computed: {

		...mapState(useSubjectStore, {
			subjects: 'orderByRelationship',
		}),

		selectedSubject: {
			get () { return this._selectedSubject || this.practicTest?.subject?.id },
			set (value) { this._selectedSubject = value },
		},
		
		selectedDate: {
			get () { return this._selectedDate || dayjs(this.practicTest?.date) },
			set (value) { this._selectedDate = value },
		},

		selectedNoQ: {
			get () { return this._selectedNoQ|| this.practicTest?.number_of_questions },
			set (value) { this._selectedNoQ = value },
		},

		selectedNoH: {
			get () { return this._selectedNoH || this.practicTest?.number_of_hits },
			set (value) { this._selectedNoH = value },
		},
	},

	methods: {

		...mapActions(useSubjectStore, {
			updateSubjects: 'updateEntries',
		}),

		submitForm()
		{
			this.$emit('form-submitted', {
				subject: {
					id: this.selectedSubject,
				},
				date: this.selectedDate,
				number_of_questions: this.selectedNoQ,
				number_of_hits: this.selectedNoH,
			});

			this.selectedSubject = null;
			this.selectedDate = null;
			this.selectedNoQ = null;
			this.selectedNoH = null;
		}

	},

	beforeMount()
	{
		if (this.subjects.length === 0)
			this.updateSubjects();
	}

}

</script>
