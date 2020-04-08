export default {
    setCompanies (state, companies) {
        state.companies = companies
    },

    setLoading (state, value) {
        state.loading = value
    },

    setCategories (state, categories) {
        state.categories = categories
    },

    pushCompany (state, company) {
        state.companies.push(company)
    },

    setShowCompanyMeetings(state, value) {
        state.showCompanyMeetings = value
    },

    setFocusedCompany(state, id = null) {
        state.focusedCompanyID = id
    },

    setMeetingTypes(state, types) {
        state.meetingTypes  = types
    },

    setMeetingStatuses(state, statuses) {
        state.meetingStatuses  = statuses
    }
};