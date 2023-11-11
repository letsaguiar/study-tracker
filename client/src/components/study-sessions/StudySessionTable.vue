<template>
	<button class="btn btn-success ms-3">New Study Session</button>
	<table class="table align-items-center justify-content-center mb-0">
		<thead>
			<tr>
				<th id="subject-name" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 w-80">Subject</th>
				<th id="subject-name" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 w-80">Date</th>
				<th id="subject-name" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 w-80">Duration</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="study_session in study_sessions">
				<td class="px-3">
					<span class="text-sm fw-bold">{{ study_session.subject.name }}</span>
				</td>
				<td class="px-3">
					<span class="text-sm fw-bold">{{ getStudySessionDate(study_session) }}</span>
				</td>
				<td class="px-3">
					<span class="text-sm fw-bold">{{ getStudySessionDuration(study_session) }}</span>
				</td>
				<td class="px-3">
					<div class="d-flex justify-content-end">
						<button class="btn btn-primary me-3">edit</button>
						<button class="btn btn-danger">delete</button>	
					</div>
				</td>
			</tr>
		</tbody>
	</table>>
</template>

<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';

import { StudySessionService } from '../../http/StudySessionService';

function getStudySessionDate(study_session)
{
	return (dayjs(study_session.init).format('DD-MM-YYYY'));
}

function getStudySessionDuration(study_session)
{
	const d1 = dayjs(study_session.init);
	const d2 = dayjs(study_session.end);
	
	return (d2.diff(d1, 'minutes') + ' minutes');
}

// Get Study Sessions
const study_sessions = ref([]);
async function getStudySessions()
{
	study_sessions.value = await new StudySessionService().getMany();
}
getStudySessions();
</script>