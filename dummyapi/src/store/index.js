// src/store/index.js
/* no-useless-catch*/
import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    formData: [],
    getEmployeeData:[]
  },
  getters: {
    addFormData(state) {
      return state.formData;
    }
  },
  mutations: {
    addFormData(state, data) {
      state.formData.push(data);
    },
    deleteFormData(state, index) {
      state.formData.splice(index, 1);
    },
    EMPLOYEE_DATA(state, context) {
      state.getEmployeeData = context;
    },
  },
  actions: {
    addFormData({ commit }, data) {
      commit('addFormData', data);
    },
    deleteFormData({ commit }, index) {
      commit('deleteFormData', index);
    },
    async getEmployeeData({commit},){
        return axios.get('http://localhost:3000/employees/v1/employees').then((res)=>{
            commit('EMPLOYEE_DATA',res.data)
            console.log(res)
            return res;
        }).catch(error => {
            return error.response
        })
    },
    async saveEmployeeData({commit},formData){
        return axios.post('http://localhost:3000/employees/',formData).then((res)=>{
            commit('')
            console.log(res)
            return res;
        }).catch(error => {
            return error.response
        })
    },
    async deleteEmployeeData({ commit }, id) {
      return await axios.delete(`http://localhost:3000/employees/${id}`).then((res) => {
        commit('', res.data); 
        return res;
      }).catch((error) => {
        throw error
      })
    },
    async editEmployeeData({commit},id){
      return axios.get(`http://localhost:3000/employees/${id}`).then((res)=>{
          commit('')
          console.log(res)
          return res;
      }).catch(error => {
          return error.response
      })
    },
    async updateEmployeeData({commit},data){
      console.log(data)
      return axios.put(`http://localhost:3000/employees/${data.id}`, data).then((res)=>{
        commit('')
          return res;
      }).catch(error => {
          return error.response
      })
  }
  },
  modules: {},
});


