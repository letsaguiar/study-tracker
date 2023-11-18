<template>
	<form role="form text-left" @submit.prevent="submitForm()">
		<div class="row">
			<div class="col-12">
				<div class="input-group input-group-outline my-3">
					<input v-model="selectedName" type="text" class="form-control" placeholder="Name">
				</div>
			</div>

			<div class="col-12">
				<button type="submit" class="btn bg-success text-white w-100">Save</button>
			</div>
		</div>		
	</form>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['form-submitted']);
const props = defineProps(['name']);

const selectedName = ref('');
watch(() => props.name, () => {
	selectedName.value = props.name;
});

function submitForm()
{
	emit('form-submitted', {
		name: selectedName.value,
	});
	selectedName.value = '';
}

</script>