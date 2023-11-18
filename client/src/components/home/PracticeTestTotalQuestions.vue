
<template>
	<IconCard title="Total Practice Tests" :content="summary.number_of_questions" icon="fa-solid fa-square-check" color="primary" />
</template>

<script setup>
import IconCard from '../IconCard.vue';
import { ref } from 'vue';
import { PracticeTestService } from '../../http/PracticeTestService';

const summary = ref({});
async function getSummary()
{
	summary.value = await new PracticeTestService().getSummary();
}
getSummary();
</script>