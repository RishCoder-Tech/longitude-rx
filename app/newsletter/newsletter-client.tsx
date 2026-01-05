"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowRight, X, Calendar, Tag, Clock, Video, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { ScrollReveal } from "@/components/scroll-animations";
import { getBlogSlug } from "@/lib/slug";

// TypeScript declaration for Tally
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void
    }
  }
}

export default function NewsletterClient({ blogPosts, webinars }: { blogPosts: any[], webinars: any[] }) {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tallyLoaded, setTallyLoaded] = useState(false);

  const handleReadMore = (article: any) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  // Load Tally script
  useEffect(() => {
    const loadTallyScript = () => {
      if (typeof window !== 'undefined' && !window.Tally) {
        const script = document.createElement('script')
        script.src = 'https://tally.so/widgets/embed.js'
        script.async = true
        script.onload = () => {
          if (window.Tally) {
            window.Tally.loadEmbeds()
            setTallyLoaded(true)
          }
        }
        script.onerror = () => {
          console.error('Failed to load Tally script')
          // Fallback: try to load the iframe directly
          const iframe = document.querySelector('iframe[data-tally-src]') as HTMLIFrameElement
          if (iframe && iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc
            setTallyLoaded(true)
          }
        }
        document.body.appendChild(script)
      } else if (window.Tally) {
        window.Tally.loadEmbeds()
        setTallyLoaded(true)
      }
    }

    loadTallyScript()
  }, [])



  // Fallback blog posts if no Contentful data is available
  const fallbackBlogPosts = [
    {
      id: 1,
      title: "Longitude Rx Welcomes Onvida Health as First External Partner",
      date: "June 2025",
      category: "Press Release",
      description: "Arizona-based health system joins Longitude Rx network, expanding access to innovative specialty pharmacy technology.",
      readTime: "3 min read",
      link: "/onvida-press-release", // Keep explicit link for special pages
      featured: true,
      author: "Sarah Johnson",
      body: "Longitude Rx is excited to announce that Onvida Health, a leading Arizona-based health system, has joined our network as the first external partner. This strategic partnership represents a significant milestone in our mission to expand access to innovative specialty pharmacy technology across the healthcare landscape.\n\nOnvida Health brings extensive experience in managing complex patient populations and a strong commitment to leveraging technology to improve patient outcomes. Their decision to partner with Longitude Rx underscores the value of our AI-powered specialty pharmacy solutions in addressing the unique challenges faced by health systems today.\n\nThrough this partnership, Onvida Health will gain access to our comprehensive suite of specialty pharmacy management tools, including advanced analytics, automated prior authorization processes, and collaborative purchasing capabilities. These technologies will enable Onvida Health to optimize their specialty pharmacy operations while maintaining the highest standards of patient care.\n\nThe collaboration also creates opportunities for knowledge sharing and best practice development between our organizations. By working together, we can accelerate innovation in specialty pharmacy management and create new solutions that benefit patients across the healthcare ecosystem.\n\nThis partnership represents just the beginning of Longitude Rx's expansion strategy. We look forward to welcoming additional health system partners as we continue to build a network dedicated to transforming specialty pharmacy care through technology and collaboration.",
      tags: ["Partnership", "Onvida Health", "Specialty Pharmacy", "Technology"],
    },
    {
      id: 2,
      title: "AI-Powered Specialty Pharmacy Solutions Show 30% Cost Reduction",
      date: "May 2025",
      category: "Industry News",
      description: "New study demonstrates significant savings for health systems using advanced AI technology in specialty pharmacy operations.",
      readTime: "5 min read",
      // No link - will use slug: "ai-powered-specialty-pharmacy-solutions-show-30-cost-reduction"
      featured: false,
      author: "Dr. Michael Chen",
      body: "A groundbreaking study published this month reveals that health systems implementing AI-powered specialty pharmacy solutions are achieving remarkable cost reductions while simultaneously improving patient outcomes. The comprehensive analysis, which examined data from over 50 health systems across the United States, found an average 30% reduction in specialty pharmacy operational costs.\n\nThe study, conducted by leading healthcare researchers, evaluated the impact of AI technology across multiple aspects of specialty pharmacy operations, including medication selection, dosing optimization, prior authorization processes, and patient monitoring. The results demonstrate that AI-driven solutions can significantly enhance efficiency while maintaining or improving quality of care.\n\nKey findings from the research include a 40% reduction in prior authorization processing time, a 25% improvement in medication adherence rates, and a 35% decrease in medication-related adverse events. These improvements translate to substantial cost savings for health systems while enhancing patient safety and outcomes.\n\nThe study also highlights the importance of proper implementation and training in achieving these results. Health systems that invested in comprehensive staff training and change management processes saw even greater improvements in their specialty pharmacy operations.\n\nThese findings provide compelling evidence for health systems considering AI-powered specialty pharmacy solutions. The combination of cost savings and improved patient outcomes makes a strong case for accelerating adoption of these technologies across the healthcare industry.",
      tags: ["AI", "Cost Reduction", "Specialty Pharmacy", "Research"],
    },
    {
      id: 3,
      title: "Collaborative Purchasing Model Gains Momentum in Healthcare",
      date: "April 2025",
      category: "Market Analysis",
      description: "Health systems increasingly adopting collaborative approaches to specialty medication procurement and management.",
      readTime: "4 min read",
      // No link - will use slug: "collaborative-purchasing-model-gains-momentum-in-healthcare"
      featured: false,
      author: "Emily Rodriguez",
      body: "The healthcare industry is witnessing a significant shift toward collaborative purchasing models for specialty medications, as health systems recognize the benefits of collective bargaining power and shared resources. This trend reflects a broader movement toward strategic partnerships and cooperative approaches in healthcare delivery.\n\nRecent market analysis indicates that collaborative purchasing arrangements are becoming increasingly popular among health systems of all sizes. These partnerships enable organizations to leverage their combined purchasing power to negotiate better pricing with pharmaceutical manufacturers and distributors.\n\nThe benefits of collaborative purchasing extend beyond cost savings to include improved access to medications, enhanced supply chain reliability, and increased opportunities for knowledge sharing and best practice development. Health systems participating in these arrangements report greater confidence in their ability to meet patient needs while maintaining financial sustainability.\n\nTechnology platforms are playing a crucial role in facilitating these collaborative arrangements by providing the infrastructure needed for coordinated purchasing, inventory management, and performance monitoring. These platforms enable health systems to work together effectively while maintaining their individual operational autonomy.\n\nThe growing adoption of collaborative purchasing models represents a fundamental shift in how health systems approach specialty medication management. As this trend continues, we can expect to see further innovation in partnership structures and technology solutions designed to support collaborative healthcare initiatives.",
      tags: ["Collaborative Purchasing", "Market Trends", "Healthcare Partnerships", "Supply Chain"],
    },
  ];

  const displayBlogPosts = blogPosts && blogPosts.length > 0 ? blogPosts : fallbackBlogPosts;

  // Helper function to render the "Read More" link
  const renderReadMoreLink = (article: any) => {
    // First check for explicit link field
    const link = article.link || article.fields?.link;
    
    // If no explicit link, generate slug from title
    if (!link) {
      const slug = getBlogSlug(article);
      const blogUrl = `/blog/${slug}`;
      
      return (
        <Link href={blogUrl} className="text-rhodamine-600 hover:text-rhodamine-700 text-sm font-medium flex items-center group">
          Read More
          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      );
    }

    if (link.startsWith('/')) {
      // Internal route
      return (
        <Link href={link} className="text-rhodamine-600 hover:text-rhodamine-700 text-sm font-medium flex items-center group">
          Read More
          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      );
    } else if (link.startsWith('http')) {
      // External link
      return (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-rhodamine-600 hover:text-rhodamine-700 text-sm font-medium flex items-center group"
        >
          Read More
          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      );
    } else {
      // Fallback - generate slug
      const slug = getBlogSlug(article);
      const blogUrl = `/blog/${slug}`;
      
      return (
        <Link href={blogUrl} className="text-rhodamine-600 hover:text-rhodamine-700 text-sm font-medium flex items-center group">
          Read More
          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      );
    }
  };

  // Helper function to safely extract text content from Contentful fields
  const getFieldValue = (article: any, fieldName: string, fallback: string = '') => {
    const field = article.fields?.[fieldName];
    if (!field) return fallback;
    
    // Handle different Contentful field types
    if (typeof field === 'string') return field;
    if (typeof field === 'number') return field.toString();
    if (Array.isArray(field)) return field.join(', ');
    
    // Handle rich text or other complex objects
    if (field.content && Array.isArray(field.content)) {
      return field.content
        .map((item: any) => {
          if (item.content && Array.isArray(item.content)) {
            return item.content.map((content: any) => content.value || '').join('');
          }
          return item.value || '';
        })
        .join(' ')
        .trim();
    }
    
    // Handle other object types
    if (field.value) return field.value;
    if (field.data) return JSON.stringify(field.data);
    
    return fallback;
  };

  // Helper function to safely extract tags
  const getTags = (article: any) => {
    const tags = article.fields?.tags || article.tags;
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
  };

  // Helper function to safely extract author information
  const getAuthor = (article: any) => {
    const author = article.fields?.author || article.author;
    if (!author) return 'Longitude Rx Team';
    
    if (typeof author === 'string') return author;
    if (author.fields?.name) return author.fields.name;
    if (author.name) return author.name;
    
    return 'Longitude Rx Team';
  };

  // Helper to render Contentful excerpt (first 2 paragraphs/blocks)
  const renderContentfulExcerpt = (article: any) => {
    const body = article.fields?.body || article.fields?.description;
    if (body && typeof body === 'object' && body.nodeType === 'document') {
      // Get the first 2 blocks (paragraphs, headings, etc.)
      const excerptBlocks = body.content.slice(0, 2);
      return documentToReactComponents({ ...body, content: excerptBlocks });
    }
    // Fallback: plain text excerpt
    const text = getFieldValue(article, 'body', article.body) || getFieldValue(article, 'description', article.description);
    if (text && typeof text === 'string') {
      return <span>{text.split('\n\n')[0].slice(0, 200)}{text.length > 200 ? '...' : ''}</span>;
    }
    return null;
  };

  // Helper to render Contentful rich text or fallback to plain text (for modal)
  const renderContentfulBody = (article: any) => {
    const body = article.fields?.body || article.fields?.description;
    if (body && typeof body === 'object' && body.nodeType === 'document') {
      return (
        <div className="prose prose-admiral max-w-none">
          {documentToReactComponents(body)}
        </div>
      );
    }
    // Fallback: plain text
    return (
      <div className="prose prose-admiral max-w-none whitespace-pre-line">
        {getFieldValue(article, 'body', article.body) || getFieldValue(article, 'description', article.description)}
      </div>
    );
  };

  // Helper to get webinar image URL
  const getWebinarImage = (webinar: any) => {
    if (webinar.fields?.image?.fields?.file?.url) {
      const url = webinar.fields.image.fields.file.url;
      return url.startsWith('http') ? url : `https:${url}`;
    }
    return undefined;
  };

  // Helper to get speakers as string
  const getWebinarSpeakers = (webinar: any) => {
    const speakers = webinar.fields?.speakers;
    if (Array.isArray(speakers)) return speakers.join(', ');
    return speakers || '';
  };

  // Helper to get date as formatted string
  const getWebinarDate = (webinar: any) => {
    const date = webinar.fields?.date;
    if (!date) return '';
    return new Date(date).toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' });
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-visible bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/healthcare-collaboration.jpg"
            alt="Healthcare collaboration"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gypsum-50/90 via-white/95 to-gypsum-100/90" />
        </div>
        <div className="container px-6 md:px-8 relative z-10 pb-8">
          <motion.div
            className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Mail className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                NEWS & INSIGHTS
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold leading-loose pb-4">
              <span className="bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
                Longitude Rx Newsroom
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Stay ahead with the latest news, expert insights, and educational webinars in specialty pharmacy innovation.
            </p>
            
            {/* Tally Email Subscription Form */}
            <div className="w-full max-w-md mx-auto pt-8">
              {!tallyLoaded && (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rhodamine-500"></div>
                  <span className="ml-3 text-admiral-600">Loading form...</span>
                </div>
              )}
              <iframe 
                data-tally-src="https://tally.so/embed/1AA5G4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1" 
                loading="lazy" 
                width="100%" 
                height={200} 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Newsroom Email Subscription"
                className={`w-full ${tallyLoaded ? 'block' : 'hidden'}`}
                onLoad={() => setTallyLoaded(true)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-50 to-white">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rhodamine-500 to-gulf-500 rounded-full px-6 py-3 shadow-lg">
              <span className="text-sm font-semibold text-white font-space-grotesk tracking-wide">
                LATEST ARTICLES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent leading-loose pb-4">
              Featured Content
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Explore our latest articles, press releases, and industry insights.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {displayBlogPosts.map((article, index) => (
              <Card key={article.id || article.sys?.id || index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-gypsum-200 overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-rhodamine-600 bg-rhodamine-50 px-2 py-1 rounded-full">
                        {getFieldValue(article, 'category', article.category)}
                      </span>
                      <span className="text-xs text-admiral-500">{getFieldValue(article, 'date', article.date)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-admiral-800 font-outfit">
                      {getFieldValue(article, 'title', article.title)}
                    </h3>
                    <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm">
                      {renderContentfulExcerpt(article)}
                    </p>
                    
                    {/* Author and Meta Info */}
                    <div className="flex items-center justify-between text-xs text-admiral-500 border-t border-gypsum-100 pt-3">
                      <div className="flex items-center gap-2">
                        <span>By {getAuthor(article)}</span>
                      </div>
                      <span>{getFieldValue(article, 'readTime', article.readTime)}</span>
                    </div>
                    
                    {/* Tags */}
                    {getTags(article).length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {getTags(article).slice(0, 3).map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-admiral-50 text-admiral-700 border border-admiral-200"
                          >
                            {tag}
                          </span>
                        ))}
                        {getTags(article).length > 3 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gypsum-50 text-admiral-500">
                            +{getTags(article).length - 3}
                          </span>
                        )}
                      </div>
                    )}
                    
                    <div className="flex justify-end pt-2">
                      {renderReadMoreLink(article)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      {webinars && webinars.length > 0 && (
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-white to-gypsum-50 border-b border-gypsum-200">
          <div className="container px-6 md:px-8">
            <div className="flex flex-col items-center text-center space-y-6 mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gulf-500 to-rhodamine-500 rounded-full px-6 py-3 shadow-lg">
                <Video className="h-4 w-4 text-white" />
                <span className="text-sm font-semibold text-white font-space-grotesk tracking-wide">
                  WEBINARS
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-outfit font-bold text-admiral-900 leading-loose pb-4">
                Upcoming & On-Demand Webinars
              </h2>
              <p className="text-xl text-admiral-600 max-w-2xl leading-relaxed font-space-grotesk">
                Join our live and on-demand webinars to learn from industry leaders and stay at the forefront of specialty pharmacy.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {webinars.map((webinar: any, idx: number) => (
                <Card key={webinar.sys?.id || idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-gypsum-200 overflow-hidden flex flex-col">
                  {getWebinarImage(webinar) && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={getWebinarImage(webinar)}
                        alt={webinar.fields?.title}
                        fill
                        className="object-cover rounded-t-xl"
                      />
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2 text-gulf-700 text-xs font-medium">
                      <Calendar className="h-4 w-4" />
                      <span>{getWebinarDate(webinar)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-admiral-900 font-outfit mb-2">
                      {webinar.fields?.title}
                    </h3>
                    <div className="text-admiral-600 font-space-grotesk text-sm mb-2">
                      {webinar.fields?.description?.content
                        ? documentToReactComponents(webinar.fields.description)
                        : webinar.fields?.description}
                    </div>
                    {getWebinarSpeakers(webinar) && (
                      <div className="text-xs text-gulf-700 mb-2">
                        <span className="font-semibold">Speakers:</span> {getWebinarSpeakers(webinar)}
                      </div>
                    )}
                    <div className="mt-auto flex gap-2">
                      {webinar.fields?.registrationLink && (
                        <a
                          href={webinar.fields.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 rounded-full bg-gulf-600 text-white font-semibold text-sm hover:bg-gulf-700 transition"
                        >
                          Register
                        </a>
                      )}
                      {webinar.fields?.recordingLink && (
                        <a
                          href={webinar.fields.recordingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 rounded-full bg-admiral-600 text-white font-semibold text-sm hover:bg-admiral-700 transition"
                        >
                          Watch Recording
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - replaced with homepage version */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-admiral-900 via-ocean-800 to-rhodamine-900 text-white relative overflow-visible">
        <div className="absolute inset-0">
          <Image
            src="/images/medical-innovation.jpg"
            alt="Medical innovation background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-admiral-900/90 via-ocean-800/90 to-rhodamine-900/90" />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-rhodamine-400/20 to-gulf-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-ocean-400/20 to-gulf-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          />
        </div>
        <div className="container px-6 md:px-8 relative z-10 pb-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-10 max-w-5xl mx-auto">
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4 text-gulf-400" />
              </motion.div>
              <span className="text-sm font-semibold text-gulf-300 font-space-grotesk tracking-wide">
                START OPTIMIZING TODAY
              </span>
            </motion.div>
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold bg-gradient-to-r from-white via-gypsum-200 to-gulf-200 bg-clip-text text-transparent leading-loose pb-4"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              Ready to grow your specialty pharmacy program?
            </motion.h2>
            <p className="text-2xl text-gypsum-300 max-w-4xl leading-relaxed font-space-grotesk font-light">
              Join leading health systems who are already capturing millions of added revenue on specialty medications and therapies.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 pt-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gulf-400 to-rhodamine-500 hover:from-gulf-500 hover:to-rhodamine-600 text-white shadow-2xl shadow-gulf-500/25 hover:shadow-gulf-500/40 transition-all duration-500 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk group hover:scale-105 hover:-translate-y-2"
                >
                  <motion.div
                    animate={{ rotate: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <span className="mr-3 h-6 w-6">🎯</span>
                  </motion.div>
                  Contact Us
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </motion.div>
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-admiral-200 text-admiral-200 bg-admiral-800/10 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk backdrop-blur-sm"
                >
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Custom Modal */}
      {isModalOpen && selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto mt-8 md:mt-16 border border-gypsum-200">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gypsum-200 px-8 py-6 rounded-t-2xl z-10">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-4xl font-extrabold font-outfit leading-tight text-admiral-900 pr-4">
                  {getFieldValue(selectedArticle, 'title', selectedArticle?.title)}
                </h1>
                <button
                  onClick={closeModal}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gypsum-100 hover:bg-gypsum-200 transition-colors"
                >
                  <X className="h-4 w-4 text-admiral-600" />
                </button>
              </div>
              {/* Subheadline: date/location if available */}
              {(getFieldValue(selectedArticle, 'date', selectedArticle?.date) || getFieldValue(selectedArticle, 'location', selectedArticle?.location)) && (
                <div className="mt-2 text-admiral-500 text-base font-space-grotesk">
                  {getFieldValue(selectedArticle, 'date', selectedArticle?.date)}
                  {getFieldValue(selectedArticle, 'date', selectedArticle?.date) && getFieldValue(selectedArticle, 'location', selectedArticle?.location) ? ' — ' : ''}
                  {getFieldValue(selectedArticle, 'location', selectedArticle?.location)}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="px-8 py-8 space-y-6">
              {/* Article Body - preserve formatting, bold headings */}
              <div className="prose prose-admiral max-w-none">
                {renderContentfulBody(selectedArticle)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
