import { axiosInstance as axios } from '../../../plugins/axios'

export default {
  login ({ commit }, data) {
    return axios.post('login', data)
  },

  register ({ commit }, data) {
    return axios.post('register', data)
  },

  emailLink({ commit }, data) {
    return axios.post('password/email', data)
  },

  resetPassword({ commit }, data) {
    return axios.post('password/reset', data)
  },
}
