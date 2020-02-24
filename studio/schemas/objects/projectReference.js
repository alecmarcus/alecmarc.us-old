export default {
  name: 'projectReference',
  type: 'object',
  title: 'Project reference',
  fields: [
    {
      type: 'reference',
      name: 'project',
      to: [
        {
          type: 'project'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'project.name',
      media: 'project.image.asset'
    }
  }
}
