import { createRouter, createWebHistory } from 'vue-router'


const Home = () => import('./components/Home.vue');
const Type = () => import('./components/Type.vue');

const ShowTpe = () => import('./components/type/Show.vue');
const CreateType = () => import('./components/type/Create.vue');
const EditType = () => import('./components/type/Edit.vue');

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'type',
        path: '/type',
        component: Type
    },
    {
        name: 'typeShow',
        path: '/types',
        component: ShowTpe
    },
    {
        name: 'typeCreate',
        path: '/types/create',
        component: CreateType
    },
    {
        name: 'typeEdit',
        path: '/types/:id',
        component: EditType
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;