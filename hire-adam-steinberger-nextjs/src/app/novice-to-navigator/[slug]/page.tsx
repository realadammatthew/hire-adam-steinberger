import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import { getArticleBySlug } from '@/lib/markdownUtils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find(a => a.slug === params.slug);
  
  if (!article) {
    notFound();
  }

  // Get article content from Markdown file
  const articleContent = getArticleBySlug(params.slug);
  
  if (!articleContent) {
    notFound();
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="article-content">
            <h1 className="article-title">{articleContent.title}</h1>
            
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

            <div className="article-body">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {articleContent.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 