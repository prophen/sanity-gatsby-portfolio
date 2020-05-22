export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec863e80a7a080193c79ad2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4bxrh8ee',
                  apiId: '287935b7-c7de-44de-97d5-3bb7024f3f55'
                },
                {
                  buildHookId: '5ec863e895f1ff01a48778cf',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-kx57jq8y',
                  apiId: 'c635de85-778f-4826-bcd0-60939031ba1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prophen/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-kx57jq8y.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
