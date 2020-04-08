import { axiosInstance as axios } from '../../../plugins/axios'

export default {
  getCompanies ({ commit }) {
    commit('setLoading', true);
    return axios.get('companies')
      .then((result) => {
        commit('setLoading', false);
        commit('setCompanies', result.data.result);
        return result;
      })
      .catch((error) => {
        commit('setLoading', false);
      })
  },
  getCategories({ commit }) {
    return axios.get('company-categories')
      .then((response) => {
        commit('setCategories', response.data);
      })
  },

  addCompany({ commit }, data) {
    return axios.post('companies', data)
      .then((response) => {
        commit('pushCompany', response.data.result)
      })
  },

  updateCompany({ commit }, data) {
    return axios.put(`companies/${data.id}`, data)
      .then((response) => {
        commit('editCompany', response.data.result)
      })
  }
}
