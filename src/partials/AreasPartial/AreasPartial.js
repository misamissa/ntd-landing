import * as components from '../../components'
export default {
  components: {
    ...components,
  },
  data () {
    return {
      areas: [
        {
          title: 'Web Design and Web Development',
          text: 'Web applications, e-services development, online advertising, SEO',
          statistics: [
            {
              numeric: 10,
              text: 'engineers'
            },
            {
              numeric: 35,
              text: 'successful projects'
            },
          ],
          tags: ['seo', 'development', 'web', 'design']
        },
        {
          title: 'Software Development',
          text: 'Application development, supervisory control systems (transportation, telemetry, infrastructure, the environment), accounting and enterprise management systems',
          statistics: [
            {
              numeric: 5,
              text: 'engineers'
            },
            {
              numeric: 20,
              text: 'successful projects'
            },
          ],
          tags: ['development', 'management']
        },
        {
          title: 'Expert Analysis',
          text: 'Analysis of project budgets estimation and technical documentation, informational and technical audit',
          statistics: [
            {
              numeric: 3,
              text: 'engineers'
            },
            {
              numeric: 15,
              text: 'successful projects'
            },
          ],
          tags: ['analytics', 'audit']
        },
      ]
    }
  }
}
