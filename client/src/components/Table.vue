<template>
	<table class="table align-items-center justify-content-center mb-0">
		<thead>
			<tr>
				<th v-for="header in headers" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{{ header }}</th>
			</tr>
		</thead>
		<tbody>
			<slot></slot>
		</tbody>
	</table>
</template>

<script setup>

const props = defineProps(['headers'])

</script>