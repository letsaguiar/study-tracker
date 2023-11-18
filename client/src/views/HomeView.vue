<template>
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-3">
                <StudySessionTotalDurationCard />
            </div>
			<div class="col-3">
				<PracticeTestTotalQuestions />
			</div>
        </div>
        <div class="row mt-5">
            <div class="col-3">
                <StudySessionTotalDurationBySujectGraph />
            </div>
        </div>
    </div>
</template>

<script setup>
import StudySessionTotalDurationCard from '../components/home/StudySessionTotalDurationCard.vue';
import StudySessionTotalDurationBySujectGraph from '../components/home/StudySessionTotalDurationBySujectGraph.vue';
import PracticeTestTotalQuestions from '../components/home/PracticeTestTotalQuestions.vue';

import { usePathStore } from '../stores/path-store';

const pathStore = usePathStore();
pathStore.update();
</script>