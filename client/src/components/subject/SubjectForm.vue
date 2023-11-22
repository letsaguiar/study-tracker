<template>
	<form role="form" @submit.prevent="submitForm()">
		<div class="row g-0">
			<div class="col-12">
				<div class="input-group input-group-static mb-4">
					<label class="ms-0">Área do Conhecimento</label>
					<select class="form-control" v-model="selectedParent">
						<option v-for="subject in subjects" :value="subject.id">
							{{ subject.name }}
						</option>
					</select>
				</div>
			</div>

			<div class="col-12">
				<div class="input-group input-group-outline my-3">
					<input v-model="selectedName" type="text" class="form-control" placeholder="Nome">
				</div>
			</div>

			<div class="col-12">
				<button type="submit" class="btn bg-success text-white w-100">Salvar</button>
			</div>
		</div>		
	</form>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useSubjectStore, useSubjectBuilder } from '../../stores/subject.store';

export default {

	emits: [ 'form-submited' ],

	props: [ 'subject' ],

	data()
	{
		return {
			_selectedParent: null,
			_selectedName: null,
		}
	},
	
	computed: {

		...mapState(useSubjectStore, {
			subjectEntries: 'entries',
			subjects: 'onlyParents'
		}),

		selectedName: {
			get () { return this._selectedName || this.subject?.name },
			set (value) { this._selectedName = value },
		},

		selectedParent: {
			get () { return this._selectedParent || this.subject?.parent?.id },
			set (value) { this._selectedParent = value },
		},

	},

	methods: {

		...mapActions(useSubjectStore, {
			updateSubjectEntries: 'updateEntries',
		}),

		submitForm()
		{
			const data = useSubjectBuilder()
				.addName(this.selectedName)
				.addParent(this.selectedParent)
				.build();

			this.$emit('form-submited', data);

			this.selectedName = null;
			this.selectedParent = null;
		}

	},

	beforeMount() {
		if (this.subjectEntries.length === 0)
			this.updateSubjectEntries();
	},

}
</script>
