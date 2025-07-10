import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import { getArticleBySlug } from '@/lib/markdownUtils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Link from 'next/link';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const articleIndex = articles.findIndex(a => a.slug === slug);
  const article = articles[articleIndex];
  
  if (!article) {
    notFound();
  }

  // Get article content from Markdown file
  const articleContent = getArticleBySlug(slug);
  
  if (!articleContent) {
    notFound();
  }

  // Previous and next articles
  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle = articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="article-content">
            <Link href="/novice-to-navigator" className="fw-bold">Novice to Navigator</Link>
            
            <h1 className="article-title">{articleContent.title}</h1>
            <br />
            <div className="article-meta mb-4">
              <span className="badge bg-primary me-2">{articleContent.meta.section}</span>
              <span className="text-muted">{articleContent.meta.date}</span>
              <span className="text-muted ms-2">•</span>
              <span className="text-muted ms-2">{articleContent.meta.readTime}</span>
            </div>

            {articleContent.audioFile && (
              <div className="audio-player mb-4">
                <audio controls className="w-100">
                  <source src={`/audio/${articleContent.audioFile}`} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}

            <div className="article-body mb-5">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {articleContent.content}
              </ReactMarkdown>
            </div>

            {/* Multiple CTAs */}
            <section className="container my-5">
              <h4 className="fw-bold section-headline-blue text-center">Ready to Get Started with AI for your Business?</h4>
              <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                  <p className="mb-4">Schedule a free consultation to learn more about how AI can help your business, or contact me for employment.</p>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <a href="https://tidycal.com/realadammatthew" target="_blank" rel="noopener noreferrer"
                        className="btn-custom btn btn-lg fw-bold shadow-lg px-4 py-3 consultation-btn w-100">
                        <i className="fas fa-calendar"></i> Schedule Your Free Consultation Today!
                      </a>
                      <p className="mt-2 text-secondary">For businesses ready to start using AI</p>
                    </div>
                    <div className="col-md-12 mb-3">
                      <a href="mailto:adam@matthewsteinberger.com" 
                        className="btn-custom btn btn-lg fw-bold shadow-lg px-4 py-3 employer-btn w-100">
                        <i className="fas fa-envelope"></i> Contact Me for Employment!
                      </a>
                      <p className="mt-2 text-secondary">For employers looking to hire their newest Senior AI Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="d-flex justify-content-between border-top pt-4 mt-5">
              {prevArticle ? (
                <Link href={`/novice-to-navigator/${prevArticle.slug}`} className="btn btn-outline-primary">
                  ← {prevArticle.title}
                </Link>
              ) : <span />}
              {nextArticle ? (
                <Link href={`/novice-to-navigator/${nextArticle.slug}`} className="btn btn-outline-primary ms-auto">
                  {nextArticle.title} →
                </Link>
              ) : <span />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 