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
    }
};