import { notFound } from 'next/navigation';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getBlogSlug } from '@/lib/slug';

async function getBlogPostBySlug(slug: string) {
  const space = process.env.CONTENTFUL_SPACE_ID || 'lw7encv6ilgz';
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || 'tdOouTA_FZNydGxt_s1ADAyix3bHJle8uyn2dSSYV9g';
  
  try {
    // Fetch all blog posts
    const url = `https://cdn.contentful.com/spaces/${space}/environments/master/entries?content_type=blogPost&access_token=${accessToken}`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    
    if (!res.ok) return null;
    
    const data = await res.json();
    const posts = data.items || [];
    
    // Find post by slug (check both slug field and generated slug from title)
    const post = posts.find((post: any) => {
      const postSlug = getBlogSlug(post);
      return postSlug === slug;
    });
    
    return post || null;
  } catch (e) {
    console.error('Contentful fetch error:', e);
    return null;
  }
}

// Helper function to safely extract field values
function getFieldValue(post: any, fieldName: string, fallback: string = '') {
  const field = post.fields?.[fieldName];
  if (!field) return fallback;
  
  if (typeof field === 'string') return field;
  if (typeof field === 'number') return field.toString();
  if (Array.isArray(field)) return field.join(', ');
  
  return fallback;
}

// Helper to get tags
function getTags(post: any) {
  const tags = post.fields?.tags || post.tags;
  if (!tags) return [];
  
  if (Array.isArray(tags)) {
    return tags.map((tag: any) => {
      if (typeof tag === 'string') return tag;
      if (tag.fields?.name) return tag.fields.name;
      if (tag.name) return tag.name;
      return String(tag);
    });
  }
  
  return [];
}

// Helper to get author
function getAuthor(post: any) {
  const author = post.fields?.author || post.author;
  if (!author) return 'Longitude Rx Team';
  
  if (typeof author === 'string') return author;
  if (author.fields?.name) return author.fields.name;
  if (author.name) return author.name;
  
  return 'Longitude Rx Team';
}

// Helper to get cover image
function getCoverImage(post: any) {
  const image = post.fields?.coverImage || post.coverImage;
  if (!image) return null;
  
  if (image.fields?.file?.url) {
    const url = image.fields.file.url;
    return url.startsWith('http') ? url : `https:${url}`;
  }
  
  if (typeof image === 'string') return image;
  
  return null;
}

// Helper to format date
function formatDate(dateString: string | undefined) {
  if (!dateString) return '';
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

// Rich text renderer options
const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-4 text-admiral-700 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="text-4xl font-bold font-outfit mb-6 mt-8 text-admiral-900">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-3xl font-bold font-outfit mb-4 mt-6 text-admiral-900">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-2xl font-bold font-outfit mb-3 mt-5 text-admiral-900">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-admiral-700">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-admiral-700">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className="ml-4">{children}</li>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong className="font-bold">{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em className="italic">{text}</em>,
  },
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const title = getFieldValue(post, 'title', '');
  const excerpt = getFieldValue(post, 'excerpt', '');
  const body = post.fields?.body;
  const publishedAt = getFieldValue(post, 'publishedAt', '');
  const readTime = getFieldValue(post, 'readTime', '5 min read');
  const coverImage = getCoverImage(post);
  const tags = getTags(post);
  const author = getAuthor(post);
  
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Back Button */}
      <div className="container px-6 md:px-8 py-6">
        <Link href="/newsletter">
          <Button variant="ghost" className="text-admiral-600 hover:text-admiral-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Newsroom
          </Button>
        </Link>
      </div>
      
      {/* Article Header */}
      <article className="container px-6 md:px-8 max-w-4xl mx-auto pb-20">
        {/* Cover Image */}
        {coverImage && (
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-admiral-900 mb-6 leading-tight">
          {title}
        </h1>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-admiral-600 border-b border-gypsum-200 pb-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(publishedAt)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
          <div>
            <span>By {author}</span>
          </div>
        </div>
        
        {/* Excerpt */}
        {excerpt && (
          <p className="text-xl text-admiral-600 mb-8 leading-relaxed font-space-grotesk">
            {excerpt}
          </p>
        )}
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rhodamine-50 text-rhodamine-700 border border-rhodamine-200"
              >
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {body && typeof body === 'object' && body.nodeType === 'document' ? (
            <div className="prose prose-admiral max-w-none">
              {documentToReactComponents(body, renderOptions)}
            </div>
          ) : (
            <div className="prose prose-admiral max-w-none whitespace-pre-line text-admiral-700 leading-relaxed">
              {getFieldValue(post, 'body', '')}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

// Generate static params for better performance
export async function generateStaticParams() {
  const space = process.env.CONTENTFUL_SPACE_ID || 'lw7encv6ilgz';
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || 'tdOouTA_FZNydGxt_s1ADAyix3bHJle8uyn2dSSYV9g';
  
  try {
    const url = `https://cdn.contentful.com/spaces/${space}/environments/master/entries?content_type=blogPost&access_token=${accessToken}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    
    if (!res.ok) return [];
    
    const data = await res.json();
    const posts = data.items || [];
    
    return posts.map((post: any) => {
      const slug = getBlogSlug(post);
      return { slug };
    });
  } catch {
    return [];
  }
}
