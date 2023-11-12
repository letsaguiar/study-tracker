<template>
	<div class="modal fade" id="create-modal" tabindex="-1" data-bs-autohide="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Create Study Session</h5>
				</div>
				<div class="modal-body">
                    oi
                </div>
				<div class="modal-footer">
					<button type="button" class="btn bg-gradient-danger text-white">Yes</button>
					<button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Modal } from 'bootstrap';
import { onMounted, watch } from 'vue';

const props = defineProps(['active']);

let modal;

onMounted(() => {
    modal = new Modal("#create-modal");
})

watch(() => props.active, () => {
    modal.show();
});
</script>