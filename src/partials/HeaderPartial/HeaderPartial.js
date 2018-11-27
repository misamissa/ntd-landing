export default {
  methods: {
    goTo(name) {
      let a = this.$parent.$children
      for (let i=0; i < a.length; i++) {
        if (Object.keys(a[i].$refs).length !== 0) {
          if (Object.keys(a[i].$refs)[0] === name) {
            window.scrollTo(0, a[i].$el.offsetTop)
          }
        }
      }
    }
  }
}
