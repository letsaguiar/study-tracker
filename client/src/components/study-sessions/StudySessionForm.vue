<template>
	<form role="form" @submit.prevent="submitForm()">
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
			<div class="col-6">
				<div class="input-group input-group-static my-3">
					<label>Init</label>
					<input type="datetime-local" class="form-control" v-model="selectedInit">
				</div>
			</div>
			<div class="col-6">
				<div class="input-group input-group-static my-3">
					<label>End</label>
					<input type="datetime-local" class="form-control" v-model="selectedEnd">
				</div>
			</div>
			<div class="col-12">
				<button type="submit" class="btn bg-success text-white w-100">Save</button>
			</div>
		</div>
	</form>
</template>

<script> 
import { mapState, mapActions } from 'pinia';
import { useSubjectStore } from '../../stores/subject.store';
import dayjs from 'dayjs';

export default {

	emits: [ 'form-submitted' ],

	props: [ 'studySession' ],

	data()
	{
		return {
			_selectedSubject: null,
			_selectedInit: null,
			_selectedEnd: null,
		};
	},

	computed: {
		
		...mapState(useSubjectStore, {
			subjectEntries: 'entries',
			subjects: 'orderByRelationship',
		}),

		selectedSubject: {
			get () { return this._selectedSubject || this.studySession?.subject.id },
			set (value) { this._selectedSubject = value },
		},

		selectedInit: {
			get () { return this._selectedInit|| dayjs(this.studySession?.init).format("YYYY-MM-DDTHH:mm") },
			set (value) { this._selectedInit = value },
		},

		selectedEnd: {
			get () { return this._selectedEnd || dayjs(this.studySession?.end).format("YYYY-MM-DDTHH:mm") },
			set (value) { this._selectedEnd = value },
		},
		
	},

	methods: {

		...mapActions(useSubjectStore, {
			updateSubjectEntries: 'updateEntries',
		}),

		submitForm()
		{
			this.$emit('form-submitted', {
				subject: { id: this.selectedSubject },
				init: this.selectedInit,
				end: this.selectedEnd,
			});

			this._selectedSubject = null;
			this._selectedInit = null;
			this._selectedEnd = null;
		}

	},

	beforeMount() {
		if (this.subjectEntries.length === 0)
			this.updateSubjectEntries();
	},

}
</script>
