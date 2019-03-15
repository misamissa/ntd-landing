import * as components from 'src/components'
import * as partials from 'src/partials'
import { mapState } from 'vuex'


export default {
  components: {
    ...components,
    ...partials,
  },
  asyncData ({ store, route }) {
    store.dispatch('loadSlogan')
    store.dispatch('loadReasons')
    store.dispatch('loadAreas')
    store.dispatch('loadVacancies')
    store.dispatch('loadProjects')
    store.dispatch('loadReviews')
    store.dispatch('loadEmployees')
    store.dispatch('loadContacts')
  },
  data () {
    return {
      scrolled: false,
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  computed: {
    ...mapState({
      slogan: state => state.slogan,
      reasons: state => state.reasons,
      vacancies: state => state.vacancies,
      areas: state => state.areas,
      projects: state => state.projects,
      reviews: state => state.reviews,
      employees: state => state.employees,
      contacts: state => state.contacts,
    })
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 500;
    }
  },
}
