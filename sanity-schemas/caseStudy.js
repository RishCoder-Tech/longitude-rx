export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'organization', type: 'string', title: 'Organization' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'metrics', type: 'array', title: 'Metrics', of: [
      {
        type: 'object',
        fields: [
          { name: 'label', type: 'string', title: 'Label' },
          { name: 'value', type: 'string', title: 'Value' },
        ]
      }
    ] },
    { name: 'image', type: 'image', title: 'Image' },
    { name: 'tag', type: 'string', title: 'Tag' },
  ],
} 