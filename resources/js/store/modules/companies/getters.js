export default {
  focusedCompany(state){
    return state.focusedCompanyID
      ? state.companies.find((c) => c.id === state.focusedCompanyID)
      : {};
  }
}
