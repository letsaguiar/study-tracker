<template>
	<div class="container-flud py-4">
		<div class="row">
			<div class="col-12">
				<div class="card my-4">
					<div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
						<div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
							<h6 class="text-white text-capitalize ps-3">Subjects</h6>
						</div>
					</div>
					<div class="card-body px-0 pb-2">
						<div class="table-responsive p-0">
							<table class="table align-items-center justify-content-center mb-0">
								<thead>
									<tr>
										<th id="subject-name" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 w-80">Name</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="px-3">
											<span class="text-sm fw-bold">Português</span>
										</td>
										<td class="px-3">
											<div class="d-flex justify-content-end">
												<button class="btn btn-primary me-3">edit</button>
												<button class="btn btn-danger">delete</button>	
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { usePathStore } from '../stores/path-store';

const pathStore = usePathStore();
pathStore.update();
</script>