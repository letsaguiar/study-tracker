<template>
    <IconCard title="Total Study Time" :content="total_study_time" icon="fas fa-clock"></IconCard>
</template>

<script setup>
import IconCard from '../IconCard.vue';
import { computed, ref } from 'vue';
import { StudySessionService } from '../../http/StudySessionService';

const summary = ref({});
async function getSummary()
{
    summary.value = await new StudySessionService().getSummary();
}
getSummary();

const total_study_time = computed(() => {
	const hours = Math.floor(summary.value.duration / 60);
	const minutes = Math.floor((summary.value.duration - (hours * 60)) / 60);

	return (`${hours} hours and ${minutes} minutes`);
});
</script>