<template>
	<div class="block max-w-full p-3 bg-white rounded-lg border-2 border-gray-100" :class="customClass">
		<h5 v-if="title" class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ title }}</h5>
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({

	props: [ 'title', 'class' ],

	computed: {

		customClass()
		{
			return this.class;
		}

	}

});

</script>
