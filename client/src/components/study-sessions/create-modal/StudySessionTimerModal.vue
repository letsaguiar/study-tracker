<template>
	<Transition>
		<div class="d-flex align-items-center justify-content-center p-5">
			<div class="text-center">
				<p class="fw-bold mb-0" id="timer-display">{{ timer.duration }}</p>
				<div class="d-flex align-items-center justify-content-center">
					<button class="btn p-1 m-0" @click="timer.pause()">
						<span class="fa-stack medium" style="vertical-align: top;">
							<i class="fa-solid fa-circle fa-stack-2x"></i>
							<i class="fa-solid fa-pause fa-stack-1x fa-inverse"></i>
						</span>
					</button>
					<button class="btn p-1 m-0" v-if="!timer._id" @click="timer.start()">
						<span class="fa-stack large text-success" style="vertical-align: top;">
							<i class="fa-solid fa-circle fa-stack-2x"></i>
							<i class="fa-solid fa-play fa-stack-1x fa-inverse"></i>
						</span>
					</button>
					<button class="btn p-1 m-0" v-else @click="timer.stop()">
						<span class="fa-stack large text-danger" style="vertical-align: top;">
							<i class="fa-solid fa-circle fa-stack-2x"></i>
							<i class="fa-solid fa-stop fa-stack-1x fa-inverse"></i>
						</span>
					</button>
					<button class="btn p-1 m-0" @click="timer.reset()">
						<span class="fa-stack medium" style="vertical-align: top;">
							<i class="fa-solid fa-circle fa-stack-2x"></i>
							<i class="fa-solid fa-rotate-right fa-stack-1x fa-inverse"></i>
						</span>
					</button>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script setup>
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { ref } from 'vue';

dayjs.extend(duration);

const emit = defineEmits(['timer-finished']);

const timer = ref({
	_id: null,

	_init: null,

	_end: null,

	_duration: dayjs.duration(0),

	get duration()
	{
		return this._duration.format('HH:mm:ss');
	},

	start()
	{
		if (!this._init)
			this._init = dayjs();

		this._id = setInterval(() => {
			this._duration = this._duration.add(1, 's');
		}, 1000);
	},

	pause()
	{
		clearInterval(this._id);
		this._id = null;
	},

	stop()
	{
		clearInterval(this._id);
		this._end = this._init.add(this._duration);
		emit('timer-finished', { init: this._init, end: this._end });
	},

	reset()
	{
		clearInterval(this._id);
		this._id = null;
		this._init = null;
		this._end = null;
		this._duration = dayjs.duration(0);
	}

});

</script>

<style scoped>

#timer-display
{
	font-size: 3.5rem;
}

.fa-stack.medium
{
	font-size: 1.3rem;
}

.fa-stack.large
{
	font-size: 1.7rem;
}

</style>