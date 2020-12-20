export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fdfddfaf81855389f9e760c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5drq7f8e',
                  apiId: '549f536e-fd30-46aa-bbcf-55df2dd53eed'
                },
                {
                  buildHookId: '5fdfddfa714daf1da82c5a8b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1e8p3pfo',
                  apiId: 'dc80b3b9-da3e-4fbd-b61d-d544127393ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benwhit/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1e8p3pfo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
