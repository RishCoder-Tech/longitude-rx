/**
 * Generate a URL-friendly slug from a string (title)
 * Converts to lowercase, removes special characters, replaces spaces with hyphens
 */
export function generateSlug(title: string): string {
  if (!title) return '';
  
  return title
    .toLowerCase()
    .trim()
    // Replace spaces and underscores with hyphens
    .replace(/[\s_]+/g, '-')
    // Remove special characters except hyphens
    .replace(/[^\w\-]+/g, '')
    // Replace multiple consecutive hyphens with a single hyphen
    .replace(/\-+/g, '-')
    // Remove leading and trailing hyphens
    .replace(/^-+|-+$/g, '');
}

/**
 * Get slug from blog post (from Contentful slug field or generate from title)
 */
export function getBlogSlug(blogPost: any): string {
  // First try to get slug from Contentful fields
  const slugField = blogPost.fields?.slug || blogPost.slug;
  
  if (slugField) {
    // Handle Contentful slug object format
    if (typeof slugField === 'string') {
      return slugField;
    }
    if (slugField.fields?.slug || slugField.slug) {
      return slugField.fields?.slug || slugField.slug;
    }
  }
  
  // Fallback: generate from title
  const title = blogPost.fields?.title || blogPost.title || '';
  return generateSlug(title);
}
