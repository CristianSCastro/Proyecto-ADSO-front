import { createRouter, createWebHistory } from 'vue-router';
import AgeList from '../views/AgeList.vue'; // Ensure the correct path to the component
import AddAge from '../views/AddAge.vue';
import EditAge from '../views/EditAge.vue';

const routes = [
  {
    path: '/',
    name: 'AgeList',
    component: AgeList,
  },
  {
    path: '/add',
    name: 'AddAge',
    component: AddAge,
  },
  {
    path: '/edit/:id',
    name: 'EditAge',
    component: EditAge,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
