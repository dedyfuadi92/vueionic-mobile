export const routes = [
  { path: '/', component: () => import('@/views/Home.vue'), meta: { title: 'Home', auth: true } },
  { path: '/login', component: () => import('@/views/Login.vue'), meta: { title: 'Login', auth: true } },
]