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
  methods: {
    go () {
      window.open(this.link, '_blank');
    }
  }
}
