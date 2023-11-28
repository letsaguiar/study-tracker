<template>
	<Main>
		<Button color="amber" custom-class="my-5 mx-4" @click="console.log('foo')">
			Nova Matéria
		</Button>

		<Card title="Matérias"></Card>
	</Main>
</template>

<script>
import Button from '../components/base/button/Button.vue';
import Card from '../components/base/card/Card.vue';
import Main from '../components/base/main/Main.vue';

export default {

	components: { Main, Button, Card },

}

</script>