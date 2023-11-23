// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Form from '../components/Form.vue';
import Table from '../components/Table.vue';
import EmployeeData from '../components/EmployeeData.vue'

const routes = [
  {
    path: '/form',
    name: 'Form',
    component: Form,
  },
  {
    path: '/table',
    name: 'Table',
    component: Table,
  },
  {
    path: '/',
    name: 'Employee',
    component: EmployeeData,
  },
  {
    path: '/employee/edit/:id',
    name: 'editEmployee',
    component: Form,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
