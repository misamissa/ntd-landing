import * as components from '../../components'
export default {
  components: {
    ...components,
  },
  props: {
    reviews: {
      type: Array
    }
  },
  data () {
    return {}
  },
  methods: {
    getStyle (person) {
      return `url(${person.avatar.url})`
    }
  }
}
