export default {
  props: {
    url: {
      type: String,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    link: {
      type: String,
    },
    list: {
      type: Array,
    },
  },
  computed: {
    getStyle() {
      return `url(${this.url})`
    }
  },
  methods: {
    go () {
      window.open(this.link, '_blank');
    }
  }
}
