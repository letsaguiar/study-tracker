<template>
	<div class="relative flex flex-col w-full break-words bg-white rounded shadow-lg mb-6" :class="customClass">
		<h3 v-if="title" class="font-semibold text-lg text-gray-700 py-3 px-4">{{ title }}</h3>
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
