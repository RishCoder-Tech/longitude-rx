export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
    { name: 'publishedAt', type: 'datetime', title: 'Published At' },
    { name: 'excerpt', type: 'text', title: 'Excerpt' },
    { name: 'body', type: 'array', title: 'Body', of: [{ type: 'block' }] },
    { name: 'coverImage', type: 'image', title: 'Cover Image' },
    { name: 'author', type: 'string', title: 'Author' },
  ],
} 