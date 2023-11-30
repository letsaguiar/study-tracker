<template>
	<div class="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" :id="id">
		<div class="relative w-auto my-6 mx-auto max-w-6xl min-w-[500px]">
			<div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
				<div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
					<h3 class="text-base text-gray-700 font-semibold uppercase">
						{{ title }}
					</h3>
					<CloseButton @click="toggleModal" />
				</div>
				<div class="relative p-6 flex-auto">
					<slot name="body"></slot>
				</div>
				<div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</div>
	<div class="hidden opacity-25 fixed inset-0 z-40 bg-black" :id="this.id + '-backdrop'"></div>
</template>

<script>
import CloseButton from '../button/CloseButton.vue';

export default {

	components: { CloseButton, CloseButton },

    props: ["title", "active", "id"],

    methods: {
 
		toggleModal() {
            document.getElementById(this.id).classList.toggle("hidden");
            document.getElementById(this.id).classList.toggle("flex");
            document.getElementById(this.id + "-backdrop").classList.toggle("hidden");
            document.getElementById(this.id + "-backdrop").classList.toggle("flex");
		},

    },

    watch: {

        active() {
            this.toggleModal();
        },

    },

}
</script>