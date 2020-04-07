import { axiosInstance as axios } from '../../../plugins/axios'

export default {
  login ({ commit }, data) {
    commit('setLoading', true);
    return axios.post('login', data)
      .then((result) => {
        commit('setLoading', false);
        commit('setToken', result.data.token);
        commit('setUser', result.data.user);
        return result;
      })
      .catch((error) => {
        commit('setLoading', false);
        // commit('setErrors', result.errors);
      })
  },

  async register ({ commit }, data) {
    return axios.post('register', data)
  },

  emailLink({ commit }, data) {
    return axios.post('password/email', data)
  },

  resetPassword({ commit }, data) {
    return axios.post('password/reset', data)
  },
}
