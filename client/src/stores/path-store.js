import { defineStore } from "pinia";

export const usePathStore = defineStore('path', {
	state: () => ({ href: location.href }),
	getters: {
		path: (state) => new URL(state.href).pathname,
	},
	actions: {
		update()
		{
			this.href = location.href;
		},
	},
});