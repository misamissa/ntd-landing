import Vuex from 'vuex'
import { BACKEND } from 'src/remotes'
export default () => {
  return new Vuex.Store({
    state: {
      slogan: [],
      reasons: [],
      vacancies: [],
      areas: [],
      areaStatistics: [],
      projects: [],
      reviews: [],
      employees: [],
      contacts: [],
    },
    mutations: {
      setSlogan: (state, slogan) => {
        state.slogan = slogan
      },
      setReasons: (state, reasons) => {
        state.reasons = reasons
      },
      setVacancies: (state, vacancies) => {
        state.vacancies = vacancies
      },
      setAreas: (state, areas) => {
        state.areas = areas
      },
      setAreaStatistics: (state, areaStatistics) => {
        state.areaStatistics = areaStatistics
      },
      setProjects: (state, projects) => {
        state.projects = projects
      },
      setReviews: (state, reviews) => {
        state.reviews = reviews
      },
      setEmployees: (state, employees) => {
        state.employees = employees
      },
      setContacts: (state, contacts) => {
        state.contacts = contacts
      },
    },
    actions: {
      loadSlogan: async ({ commit }) => {
        let response = await BACKEND.get('/slogans')
        commit('setSlogan', response.data)
      },
      loadReasons: async ({ commit }) => {
        let response = await BACKEND.get('/reasons')
        commit('setReasons', response.data)
      },
      loadVacancies: async ({ commit }) => {
        let response = await BACKEND.get('/vacancies')
        commit('setVacancies', response.data)
      },
      loadAreas: async ({ commit }) => {
        let response = await BACKEND.get('/areas')
        commit('setAreas', response.data)
      },
      loadAreaStatistics: async ({ commit }) => {
        let response = await BACKEND.get('/areastatistics')
        commit('setAreaStatistics', response.data)
      },
      loadProjects: async ({ commit }) => {
        let response = await BACKEND.get('/projects')
        commit('setProjects', response.data)
      },
      loadReviews: async ({ commit }) => {
        let response = await BACKEND.get('/reviews')
        commit('setReviews', response.data)
      },
      loadEmployees: async ({ commit }) => {
        let response = await BACKEND.get('/employees')
        commit('setEmployees', response.data)
      },
      loadContacts: async ({ commit }) => {
        let response = await BACKEND.get('/contacts')
        commit('setContacts', response.data)
      },
    },
  })
}
