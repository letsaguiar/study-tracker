<template>
	<div class="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="modal">
		<div class="relative w-auto my-6 mx-auto max-w-sm">
			<div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
				<div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
					<h3 class="text-base font-semibold uppercase">
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
	<div class="hidden opacity-25 fixed inset-0 z-40 bg-black" id="modal-backdrop"></div>
</template>

<script>
import CloseButton from '../button/CloseButton.vue';

export default {

	components: { CloseButton },

    props: ["title", "active"],

    methods: {
 
		toggleModal() {
            document.getElementById("modal").classList.toggle("hidden");
            document.getElementById("modal").classList.toggle("flex");
            document.getElementById("modal-backdrop").classList.toggle("hidden");
            document.getElementById("modal-backdrop").classList.toggle("flex");
		},

    },

    watch: {

        active() {
            this.toggleModal();
        },

    },

}
</script>