import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/subjects',
			name: 'subjects',
			component: () => import('../views/SubjectView.vue'),
		},
		{
			path: '/study-sessions',
			name: 'study-sessions',
			component: () => import('../views/StudySessionView.vue'),
		},
		{
			path: '/practice-tests',
			name: 'practice-tests',
			component: () => import('../views/PracticeTestView.vue'),
		},
		{
			path: '/exams',
			name: 'exams',
			component: () => import('../views/ExamView.vue'),
		}
	]
});

export default router
