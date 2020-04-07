export default {
    setUser (state, user) {
        state.user = user
    },

    setLoading (state, value) {
        state.loading = value
    },

    setToken (state, token) {
        state.token = token
    },

    setErrors (state, errors) {
        state.authErrors = errors
    },

    clearErrors (state) {
        state.errors = [];
    }
};