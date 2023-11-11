<template>
	<div class="container-flud py-4">
		<div class="row">
			<div class="col">
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="card my-4">
					<div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
						<div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
							<h6 class="text-white text-capitalize ps-3">Study Sessions</h6>
						</div>
					</div>
					<div class="card-body px-0 pb-2">
						<div class="table-responsive p-0">
							<StudySessionTable />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import StudySessionTable from '../components/study-sessions/StudySessionTable.vue'

import { usePathStore } from '../stores/path-store';

const pathStore = usePathStore();
pathStore.update();
</script>