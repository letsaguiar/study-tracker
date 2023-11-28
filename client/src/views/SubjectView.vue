<template>
	<Main>
		<Button color="amber" custom-class="mt-5" @click="console.log('foo')">
			Nova Matéria
		</Button>
	</Main>
</template>

<script>
import Button from '../components/base/button/Button.vue';
import Main from '../components/base/main/Main.vue';

export default {

	components: { Main, Button },

}

</script>