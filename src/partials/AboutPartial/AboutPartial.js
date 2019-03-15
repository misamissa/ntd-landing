import * as components from '../../components'
export default {
  components: {
    ...components,
  },
  props: {
    reasons: {
      type: Array
    },
    vacancies: {
      type: Array
    },
  },
  computed: {},
  methods: {
    getStyle (vacancy) {
      return `url(${vacancy.avatar.url})`
    }
  }
}
