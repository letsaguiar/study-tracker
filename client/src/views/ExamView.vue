<template>
	<div class="container-fluid py-4">
		<div class="row">
			<div class="col-12">
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'pinia';
import { usePathStore } from '../stores/path-store.js';

export default {
	methods: {
		...mapActions(usePathStore, {
			updatePath: 'update',
		}),
	},

	mounted() {
		this.updatePath();
	},
}
</script>
