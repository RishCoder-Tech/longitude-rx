import { createClient } from 'contentful';

// Use environment variables with fallbacks to prevent build errors
const spaceId = process.env.CONTENTFUL_SPACE_ID || 'lw7encv6ilgz';
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || 'tdOouTA_FZNydGxt_s1ADAyix3bHJle8uyn2dSSYV9g';

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});

// Helper function to safely fetch entries with error handling
export async function getContentfulEntries(contentType: string) {
  try {
    const res = await contentfulClient.getEntries({ content_type: contentType });
    return res.items;
  } catch (error) {
    console.error(`Error fetching ${contentType} from Contentful:`, error);
    return [];
  }
} 