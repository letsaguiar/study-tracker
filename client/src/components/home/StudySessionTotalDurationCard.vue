<template>
    <div class="card">
        <div class="card-header p-3 pt-2">
            <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                <i class="fa-solid fa-clock fa-xl"></i>
            </div>
            <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Total Study Time</p>
                <span class="fs-6 fw-bold mb-0">{{ getTotalDuration() }}</span>
            </div>
        </div>
        <div class="card-footer p-3"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { StudySessionService } from '../../http/StudySessionService';

const summary = ref({});
async function getSummary()
{
    summary.value = await new StudySessionService().getSummary();
}
getSummary();

function getTotalDuration()
{
    const hours = Math.floor(summary.value.total / 60);
    const minutes = Math.floor(summary.value.total % 60);

    return (`${hours} hours and ${minutes} minutes`);
}
</script>