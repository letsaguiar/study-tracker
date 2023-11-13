<template>
    <div class="card my-4">
		<div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
			<div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
				<h6 class="text-white text-capitalize ps-3">Study Time By Subject</h6>
			</div>
		</div>
		<div class="card-body px-0 pb-2 d-flex align-items-center justify-content-center">
            <div class="w-80 mb-3">
                <canvas id="study-session-time-by-subject"></canvas>
            </div>
		</div>
	</div>
</template>

<script setup>
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
                data: summary.value.by_subject?.map((item) => item.total),
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