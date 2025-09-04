import { getAllBlogPosts, getFeaturedBlogPosts } from '@/lib/blogUtils';
import { blogCategories } from '@/data/blog';
import Link from 'next/link';
import MultipleCTAs from '@/components/MultipleCTAs';

export const metadata = {
  title: 'AI Development Blog | Adam Matthew Steinberger',
  description: 'Insights on AI development, chatbot implementation, and business technology from an experienced AI developer in Greenville, SC.',
};

export default async function BlogPage() {
  const allPosts = await getAllBlogPosts();
  const featuredPosts = await getFeaturedBlogPosts();
  const recentPosts = allPosts.slice(0, 6);

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

      {/* Recent Posts Section */}
      <section className="container my-5">
        <h3 className="fw-bold mb-4 section-headline-blue text-center">Recent Articles</h3>
        {recentPosts.length > 0 ? (
          <div className="row justify-content-center g-4">
            {recentPosts.map((post) => (
              <div key={post.slug} className="col-md-6 col-lg-4">
                <div className="card golden-box solution-card h-100">
                  <div className="card-body d-flex flex-column">
                    <div className="mb-2">
                      <span className="badge bg-secondary me-2">{post.category}</span>
                      <small className="text-muted">{post.readTime}</small>
                    </div>
                    <h5 className="fw-bold mb-3">{post.title}</h5>
                    <p className="flex-grow-1">{post.description}</p>
                    <div className="mt-auto">
                      {post.tags && post.tags.length > 0 && (
                        <div className="mb-3">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="badge bg-light text-dark me-1 mb-1">{tag}</span>
                          ))}
                        </div>
                      )}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <small className="text-muted">By {post.author}</small>
                        <small className="text-muted">{new Date(post.publishedDate).toLocaleDateString()}</small>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="btn btn-outline-primary w-100">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card purple-box text-center p-4">
                <h4 className="mb-3">Blog Coming Soon</h4>
                <p className="mb-3">I'm working on creating valuable content about AI development, chatbot implementation, and business technology insights.</p>
                <p className="text-muted">Check back soon for the latest articles and industry insights!</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Categories Section */}
      <section className="container my-5">
        <h3 className="fw-bold mb-4 section-headline-green text-center">Article Categories</h3>
        <div className="row justify-content-center g-4">
          {blogCategories.map((category) => (
            <div key={category.slug} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="fw-bold mb-3">{category.name}</h5>
                  <p className="text-muted mb-3">{category.description}</p>
                  <Link 
                    href={`/blog?category=${category.slug}`} 
                    className="btn btn-sm btn-outline-primary"
                  >
                    View Articles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card purple-box text-center p-4">
              <h4 className="fw-bold mb-3">Ready to Implement AI in Your Business?</h4>
              <p className="mb-4">Learn from these articles and get personalized guidance for your AI development project.</p>
              <Link href="/services/ai-consulting" className="btn-custom btn btn-lg fw-bold shadow-lg px-5 py-3 demo-btn">
                <i className="fas fa-comments"></i> Schedule a Consultation
              </Link>
              <p className="mt-3 text-secondary">Let's discuss your AI development needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Multiple CTAs */}
      <MultipleCTAs />
    </main>
  );
}