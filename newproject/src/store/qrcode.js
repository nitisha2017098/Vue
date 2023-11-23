import axios from 'axios';
const state = {};

const getters = {};

const mutations = {};

const actions = {
  async getQRCode({ commit },) {
    return await axios.get(`/auth/qrcode?size=150`).then(response => {
        return (response);
      })
      .catch(error => {
        return error.response;
      });
    },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
