export default {
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'location', type: 'string', title: 'Location' },
    { name: 'department', type: 'string', title: 'Department' },
    { name: 'type', type: 'string', title: 'Job Type' },
    { name: 'applyUrl', type: 'url', title: 'Apply URL' },
  ],
} 