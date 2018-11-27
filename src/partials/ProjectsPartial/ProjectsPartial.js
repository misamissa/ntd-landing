import * as components from '../../components'
export default {
  components: {
    ...components,
  },
  data () {
    return {
      projects: [
        {
          url: '../../../public/static/img/analytics.jpg',
          title: 'TimeX',
          text: 'TimeX is the decentralised digital tokens and cryptocurrencies exchanger',
          link: 'https://exchange.tp.ntr1x.com/',
          // list: [
          //   'Secure cross-chain exchange',
          //   'Unified adaptive interface',
          //   'Advanced security options: Mutual SSL, Encrypted keystore and 2FA',
          //   'Customisable dashboard'
          // ]
        },
        {
          url: '../../../public/static/img/analytics.jpg',
          title: 'Ople',
          text: 'Application development, supervisory control systems, accounting and enterprise management systems',
          link: 'https://ople.ai/about-ople/',
          // list: [
          //   'Uses AI to accelerate data science',
          //   'Helps to create more production quality AI models',
          //   'The fastest formulation and creation of AI models',
          //   'More accurate forecasting, earlier decision making and reduced risk-taking'
          // ]
        },
        {
          url: '../../../public/static/img/analytics.jpg',
          title: 'Access Management Console',
          text: 'Analysis of project budgets estimation and technical documentation, informational and technical audit',
          link: '',
          // list: [
          //   'single FA, 2FA and multi FA',
          //   'Public API',
          //   'Easy integration with any information systems'
          // ]
        },
      ]
    }
  }
}
