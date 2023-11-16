<template>
	<div class="modal fade" :id="id" tabindex="-1">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<span class="modal-title fs-5 fw-bold">{{ title }}</span>
				</div>
				<div class="modal-body">
					<slot name="body"></slot>
				</div>
				<div v-if="!hide_footer" class="modal-footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

const props = defineProps(['id', 'title', 'hide_footer']);

</script>