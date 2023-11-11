<template>
	<div class="modal fade" id="update-modal" tabindex="-1">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Update Study Session</h5>
				</div>
				<div class="modal-body">
					<form role="form text-left">

					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn bg-success text-white">Save</button>
					<button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Modal } from 'bootstrap';
import { onMounted, watch } from 'vue';

const props = defineProps(['active', 'studySessionToUpdate']);

let modal;

onMounted(() => {
	modal = new Modal('#update-modal');
})

watch(() => props.active, () => {
	modal.show();
});

</script>