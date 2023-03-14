import { routes } from './routes/index'
import { createRouter, createWebHistory } from 'vue-router'
import { Preferences } from "@capacitor/preferences"
const router = createRouter({
  history: createWebHistory(),
  routes,
})

//   import {Storage} from "@capacitor/storage"
router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    const { value } = await Preferences.get({ key: "token" })
    if (value === null) {
      console.log('Logout Success');
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router
