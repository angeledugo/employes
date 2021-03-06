import { createRouter, createWebHistory } from 'vue-router'


const Home = () => import('./components/Home.vue');
const Type = () => import('./components/Type.vue');
const Contracts = () => import('./components/Contracts.vue');
const Employees = () => import('./components/Employees.vue');
const Childrens = () => import('./components/Childrens.vue');

const ShowTpe = () => import('./components/type/Show.vue');
const CreateType = () => import('./components/type/Create.vue');
const EditType = () => import('./components/type/Edit.vue');


const ShowEmployees = () => import('./components/employees/Show.vue');
const CreateEmployee = () => import('./components/employees/Create.vue');
const EditEmployee = () => import('./components/employees/Edit.vue');

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'type',
        path: '/type',
        component: ShowTpe
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
    },
    {
        name: 'contract',
        path: '/contract',
        component: Contracts
    },
    {
        name: 'employee',
        path: '/employee',
        component: ShowEmployees
    },
    {
        name: 'employeeCreate',
        path: '/employee/create',
        component: CreateEmployee
    },
    {
        name: 'children',
        path: '/children',
        component: Childrens
    },
    {
        name: 'employeeEdit',
        path: '/employee/:id',
        component: EditEmployee
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;