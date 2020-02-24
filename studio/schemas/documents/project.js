export default {
  type: 'document',
  name: 'project',
  title: 'Project',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontends will require a slug to be set to be able to show the project',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string'
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'media',
      title: 'Media',
      type: 'string'
    },
    {
      name: 'services_deliverables',
      title: 'Services / Deliverables',
      type: 'string'
    },
    {
      name: 'brief',
      title: 'Brief',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
