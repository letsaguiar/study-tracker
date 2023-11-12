<template>
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-3">
                <StudySessionTotalDurationCard />
            </div>
        </div>
    </div>
</template>

<script setup>
import StudySessionTotalDurationCard from '../components/home/StudySessionTotalDurationCard.vue';

import { usePathStore } from '../stores/path-store';

const pathStore = usePathStore();
pathStore.update();
</script>