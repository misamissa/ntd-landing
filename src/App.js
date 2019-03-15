import * as components from './components'
import * as partials from './partials'

export default {
  components: {
    ...components,
    ...partials,
  },
  head: {
    titleTemplate (title) {
      return title != null
        ? `${title} | NTD`
        : 'NTD'
    },
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
}
