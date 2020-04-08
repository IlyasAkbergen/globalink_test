export default {
    setUser (state, user) {
        state.user = user
    },

    setLoading (state, value) {
        state.loading = value
    },

    setToken (state, token) {
        state.token = token;
        localStorage.setItem('token', token)
    },

    delToken (state) {
        localStorage.removeItem('token');
        state.token = null
    },

    setErrors (state, errors) {
        state.authErrors = errors
    },

    clearErrors (state) {
        state.errors = [];
    }
};