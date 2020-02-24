export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alecmarcus/sanity-nuxt-events',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-nuxt-events-web-xtb5z6b8.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {
      name: 'netlify',
      options: {
        description:
          'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
        sites: [
          {
            buildHookId: '',
            title: 'Sanity Studio',
            name: 'sanity-nuxt-events-studio-yi4o35dz',
            apiId: '13e9cd89-5340-4f80-b9dc-20989c24ff9b'
          },
          {
            buildHookId: '5e4f4eff1a7711b855b494a2',
            title: 'Events Website',
            name: 'sanity-nuxt-events-web-xtb5z6b8',
            apiId: '1ae11082-9534-4f59-bdd5-a7f2a716f69f'
          }
        ]
      }
    }
    // {
    //   name: 'project-users',
    //   layout: { height: 'auto' }
    // },
    // {
    //   name: 'document-list',
    //   options: { title: 'Recently created sessions', order: '_createdAt desc', types: ['session'] },
    //   layout: { width: 'medium' }
    // }
  ]
}
