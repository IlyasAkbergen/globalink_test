export default {
    isManager (state) {
        return state.user.roles.includes('manager');
    },

    isClient (state) {
        return state.user.roles.includes('client');
    },

    authorized (state) {
        return !!state.token
    },

    token (state) {
        return state.token !== null ? state.token : localStorage.getItem('token')
    }
}