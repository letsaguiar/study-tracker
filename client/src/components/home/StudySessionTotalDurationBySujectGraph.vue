<template>
	<Card title="Study Time By Subject">
		<div class="d-flex align-items-center justify-content-center">
			<div class="w-80 mb-3">
				<canvas id="study-session-time-by-subject"></canvas>
			</div>
        </div>
	</Card>
</template>

<script setup>
import Card from '../Card.vue';

import { computed, onMounted, ref } from 'vue';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

import { StudySessionService } from '../../http/StudySessionService';

import { useColorStore } from '../../stores/color-store';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const colorStore = useColorStore();

const summary = ref({ data: {} })
const chartData = computed(() => {
    return {
        labels: summary.value.by_subject?.map((item) => item.subject.name),
        datasets: [
            {
                data: summary.value.by_subject?.map((item) => item.duration),
                backgroundColor: colorStore.getColorArray(summary.value.by_subject?.length),
                hoverOffset: 4
            }
        ]
    }
});
const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top'
        },
    }
};

onMounted(async () => {
    summary.value = await new StudySessionService().getSummary();
    
    const ctx = document.getElementById('study-session-time-by-subject');
    new Chart(ctx, {
        type: 'doughnut',
        data: chartData.value,
        options: chartOptions,
    });    
});

</script>