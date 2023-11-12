<template>
	<div class="modal fade" id="create-modal" tabindex="-1" data-bs-autohide="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Create Study Session</h5>
				</div>
				<div class="modal-body">
                    <form v-if="subjectSelection" role="form text-left">
                        <div class="row">
                            <div class="col-12">
                                <div class="input-group input-group-static mb-4">
									<label class="ms-0">Subject</label>
									<select class="form-control" v-model="selectedSubject">
										<option
										 v-for="subject in subjects"
										 :value="subject.id"
										>
											{{ subject.name }}
										</option>
									</select>
								</div>
                            </div>
                        </div>
                    </form>
                    <div v-if="studySessionTimerStopped || studySessionTimerStarted" class="d-flex align-items-center justify-content-center">
                        <span class="fs-4 fw-bold">
                            {{ timer._value }}
                            {{ timer.value }}
                        </span>
                    </div>
                </div>
				<div class="modal-footer">
					<button v-if="subjectSelection" type="button" class="btn bg-success text-white" @click="next()">Next</button>
					<button v-if="studySessionTimerStopped" type="button" class="btn bg-primary text-white" @click="start()">Start</button>
					<button v-if="studySessionTimerStarted" type="button" class="btn bg-primary text-white" @click="stop()">Stop</button>
					<button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Modal } from 'bootstrap';

import { onMounted, ref, watch } from 'vue';
import dayjs from 'dayjs';

import { SubjectService } from '../../http/SubjectService';
import { StudySessionService } from '../../http/StudySessionService';

const emit = defineEmits(['create']);
const props = defineProps(['active']);

let modal;

onMounted(() => {
    modal = new Modal("#create-modal");
})

watch(() => props.active, () => {
    modal.show();
});

// Get Subjects
const subjects = ref([]);
async function getSubjects()
{
    subjects.value = await new SubjectService().getMany();
}
getSubjects();

const selectedSubject = ref(null);
const subjectSelection = ref(true);
const studySessionTimerStopped = ref(false);
const studySessionTimerStarted = ref(false);

function next()
{
    subjectSelection.value = false;
    studySessionTimerStopped.value = true;
}

const timer = ref({
    _id: null,

    _init: dayjs(),

    _end: dayjs(),

    _timer: dayjs("2023-11-12T00:00:00"),

    start()
    {
        this._end = dayjs();
        this._id = setInterval(() => {
            this._end = dayjs();
            this._timer = this._timer.add(1, 'second');
        }, 1000);
    },

    stop()
    {
        clearInterval(this._id);
        this._id = null;
    },

    get value()
    {
        return this._timer.format('HH:mm:ss');
    }
});

function start()
{
    timer.value.start();
    studySessionTimerStopped.value = false;
    studySessionTimerStarted.value = true;
}

async function stop()
{
    timer.value.stop();

    await new StudySessionService().create({
        subject: { id: selectedSubject.value },
        init: timer.value._init.format('YYYY-MM-DDTHH:mm'),
        end: timer.value._end.format('YYYY-MM-DDTHH:mm'),
    })

    modal.hide();
    studySessionTimerStarted.value = false;
    subjectSelection.value = true;
    emit('create');
}

</script>