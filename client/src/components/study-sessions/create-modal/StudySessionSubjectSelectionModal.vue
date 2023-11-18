<template>
	<Transition>
		<form @sumit.prevent="next()">
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
				<div class="col-9">
					<button type="submit" class="btn bg-success text-white">Next</button>
				</div>
				<div class="col-3">
					<button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</form>
	</Transition>
</template>

<script setup>

const emit = defineEmits(['next']);

const selectedSubject = ref(null);

function next() {
	emit('next', { id: selectedSubject.value });
}
</script>