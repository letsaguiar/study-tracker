<template>
	<li>
		<RouterLink :to="to" class="flex items-center p-2 text-gray-900 rounded-lg group">
			<span class="ms-3">{{ name }}</span>
		</RouterLink>
	</li>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';

export default {

	components: { RouterLink },

	props: [ 'to', 'name' ],

}
</script>
