<template>
	<div class="container-fluid py-4">
		<div class="row">
			<div class="col-12">
				<div class="card my-4">
					<div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
						<div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
							<h6 class="text-white text-capitalize ps-3">Practice Tests</h6>
						</div>
					</div>
					<div class="card-body px-0 pb-2">
						<div class="table-responsive p-0">
							<PracticeTestTable />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import PracticeTestTable from '../components/practice-test/PracticeTestTable.vue';

import { usePathStore } from '../stores/path-store';

const pathStore = usePathStore();
pathStore.update();
</script>