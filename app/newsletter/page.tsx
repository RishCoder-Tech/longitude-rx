import NewsletterClient from './newsletter-client';
import { getContentfulEntries } from '@/lib/contentful';

async function getBlogPosts() {
  const space = process.env.CONTENTFUL_SPACE_ID || 'lw7encv6ilgz';
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || 'tdOouTA_FZNydGxt_s1ADAyix3bHJle8uyn2dSSYV9g';
  const url = `https://cdn.contentful.com/spaces/${space}/environments/master/entries?content_type=blogPost&access_token=${accessToken}`;
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.items || [];
  } catch (e) {
    console.error('Contentful fetch error:', e);
    return [];
  }
}

async function getWebinars() {
  try {
    return await getContentfulEntries('webinars');
  } catch (error) {
    console.error('Error fetching webinars:', error);
    return [];
  }
}

export default async function NewsletterPage() {
  const blogPosts = await getBlogPosts();
  const webinars = await getWebinars();
  return <NewsletterClient blogPosts={blogPosts} webinars={webinars} />;
}
