import { getAllBlogPosts, getFeaturedBlogPosts } from '@/lib/blogUtils';
import Link from 'next/link';
import MultipleCTAs from '@/components/MultipleCTAs';
import InfiniteScrollBlog from '@/components/InfiniteScrollBlog';

export const metadata = {
  title: 'AI Development Blog | Adam Matthew Steinberger',
  description: 'Insights on AI development, chatbot implementation, and business technology from an experienced AI developer in Greenville, SC.',
};

export default async function BlogPage() {
  const allPosts = await getAllBlogPosts();
  const featuredPosts = await getFeaturedBlogPosts();
  
  // Get non-featured posts for infinite scroll
  const featuredSlugs = new Set(featuredPosts.map(post => post.slug));
  const nonFeaturedPosts = allPosts.filter(post => !featuredSlugs.has(post.slug));

  return (
    <main>
      {/* Hero Section */}
      <section className="container text-center my-5" style={{marginTop: '0 !important', paddingTop: '0 !important'}}>
        <h1 className="fw-bold headline-gradient" style={{fontSize: '2.7rem'}}>AI Development Blog</h1>
        <br />
        <h2 className="fw-semibold mb-4 headline-gradient" style={{fontSize: '1.35rem'}}>
          Insights on AI Development, Chatbots, and Business Technology
        </h2>
        <div className="mx-auto mb-4" style={{maxWidth: '700px'}}>
          <div className="alert custom-alert p-4 mb-4 shadow-lg">
            Stay updated with the latest developments in AI technology, chatbot implementation strategies, and business applications. Learn from real-world experiences building custom AI solutions.
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="container my-5">
          <h3 className="fw-bold mb-4 section-headline-gold text-center">Featured Articles</h3>
          <div className="row justify-content-center g-4">
            {featuredPosts.slice(0, 3).map((post) => (
              <div key={post.slug} className="col-md-4">
                <div className="card purple-box solution-card h-100">
                  <div className="card-body d-flex flex-column">
                    <div className="mb-2">
                      <span className="badge bg-primary me-2">{post.category}</span>
                      <small className="text-muted">{post.readTime}</small>
                    </div>
                    <h5 className="fw-bold mb-3">{post.title}</h5>
                    <p className="flex-grow-1">{post.description}</p>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <small className="text-muted">By {post.author}</small>
                        <small className="text-muted">{new Date(post.publishedDate).toLocaleDateString()}</small>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="btn btn-primary w-100">
                        Read Article
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Posts Section with Infinite Scroll */}
      <section className="container my-5">
        <h3 className="fw-bold mb-4 section-headline-blue text-center">All Articles</h3>
        {nonFeaturedPosts.length > 0 ? (
          <InfiniteScrollBlog allPosts={nonFeaturedPosts} postsPerPage={6} />
        ) : (
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card purple-box text-center p-4">
                <h4 className="mb-3">Blog Coming Soon</h4>
                <p className="mb-3">I&apos;m working on creating valuable content about AI development, chatbot implementation, and business technology insights.</p>
                <p className="text-muted">Check back soon for the latest articles and industry insights!</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Multiple CTAs */}
      <MultipleCTAs />
    </main>
  );
}