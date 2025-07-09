import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = articles.find(a => a.slug === params.slug);
  
  if (!article) {
    notFound();
  }

  const currentIndex = articles.findIndex(a => a.slug === params.slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <main>
      {/* Article Header */}
      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/novice-to-navigator">Novice to Navigator</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {article.title}
                </li>
              </ol>
            </nav>
            
            <h1 className="fw-bold headline-gradient mb-3">{article.title}</h1>
            <p className="text-secondary mb-4">
              <strong>Section:</strong> {article.section} | <strong>Article {article.order}</strong> of 33
            </p>
            <p className="lead mb-4">{article.description}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2>Article Content Coming Soon</h2>
                <p>This article is part of the Novice to Navigator series. The full content will be migrated from the original HTML files.</p>
                <p><strong>Article:</strong> {article.title}</p>
                <p><strong>Description:</strong> {article.description}</p>
                <p><strong>Section:</strong> {article.section}</p>
                <p><strong>Order:</strong> {article.order}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="d-flex justify-content-between">
              {prevArticle ? (
                <Link href={`/novice-to-navigator/${prevArticle.slug}`} className="btn btn-outline-primary">
                  <i className="fas fa-arrow-left"></i> Previous: {prevArticle.title}
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextArticle ? (
                <Link href={`/novice-to-navigator/${nextArticle.slug}`} className="btn btn-outline-primary">
                  Next: {nextArticle.title} <i className="fas fa-arrow-right"></i>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Series */}
      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <Link href="/novice-to-navigator" className="btn btn-outline-secondary">
              <i className="fas fa-list"></i> Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
} 