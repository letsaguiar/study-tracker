import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'home', component: DashboardView },
	]
});

export default router;