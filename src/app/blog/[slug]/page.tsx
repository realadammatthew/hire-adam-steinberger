import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getRelatedPosts, getAllBlogSlugs } from '@/lib/blogUtils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import MultipleCTAs from '@/components/MultipleCTAs';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Adam Matthew Steinberger`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, post.category, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Breadcrumb */}
            <nav className="mb-4">
              <div className="d-flex justify-content-center">
                <Link href="/blog" className="text-decoration-none text-primary me-2">Blog</Link>
                <span className="text-muted">{'>'}</span>
                <span className="text-muted ms-2">{post.title}</span>
              </div>
            </nav>

            {/* Article Meta */}
            <div className="mb-4">
              <span className="badge bg-primary me-2">{post.category}</span>
              <span className="badge bg-secondary">{post.readTime}</span>
            </div>

            <h1 className="fw-bold headline-gradient mb-4" style={{fontSize: '2.5rem'}}>
              {post.title}
            </h1>

            <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
              <div className="alert custom-alert p-4 mb-4 shadow-lg">
                {post.description}
              </div>
            </div>

            {/* Author and Date Info */}
            <div className="mb-4">
              <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                <div className="d-flex align-items-center">
                  <i className="fas fa-user-circle me-2 text-primary"></i>
                  <span>By <strong>{post.author}</strong></span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-calendar-alt me-2 text-primary"></i>
                  <span>{new Date(post.publishedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-clock me-2 text-primary"></i>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mb-4">
                <div className="d-flex justify-content-center flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="badge bg-light text-dark">{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card article-body mb-5 border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h3 className="fw-bold mb-4 section-headline-blue text-center">Related Articles</h3>
              <div className="row g-4">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.slug} className="col-md-4">
                    <div className="card golden-box solution-card h-100">
                      <div className="card-body d-flex flex-column">
                        <div className="mb-2">
                          <span className="badge bg-secondary me-2">{relatedPost.category}</span>
                          <small className="text-muted">{relatedPost.readTime}</small>
                        </div>
                        <h5 className="fw-bold mb-3">{relatedPost.title}</h5>
                        <p className="flex-grow-1">{relatedPost.description}</p>
                        <div className="mt-auto">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <small className="text-muted">By {relatedPost.author}</small>
                            <small className="text-muted">{new Date(relatedPost.publishedDate).toLocaleDateString()}</small>
                          </div>
                          <Link href={`/blog/${relatedPost.slug}`} className="btn btn-outline-primary w-100">
                            Read Article
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box text-center p-4">
              <h4 className="fw-bold mb-3">Ready to Implement These Ideas?</h4>
              <p className="mb-4">Get personalized guidance for your AI development project based on the insights from this article.</p>
              <Link href="/services/ai-consulting" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
                <i className="fas fa-comments"></i> Schedule a Consultation
              </Link>
              <p className="mt-3 text-secondary">Let's discuss your specific needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="container my-5">
        <div className="text-center">
          <Link href="/blog" className="btn btn-outline-primary btn-lg">
            <i className="fas fa-arrow-left me-2"></i>
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Multiple CTAs */}
      <MultipleCTAs />
    </main>
  );
}