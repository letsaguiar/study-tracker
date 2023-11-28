import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'dashboard', component: DashboardView },
		{ path: '/subjects', name: 'subjects', component: import('../views/SubjectView.vue') }
	]
});

export default router;