const fs = require('fs');
const path = require('path');

// This script helps migrate articles from the original HTML files to the Next.js format
// It extracts content and creates the necessary files

function extractArticleContent(htmlContent) {
  // Extract title from the HTML
  const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1].replace(' | Novice to Navigator Series | Adam Matthew Steinberger', '') : '';

  // Extract meta description
  const descriptionMatch = htmlContent.match(/<meta name="description" content="(.*?)"/);
  const description = descriptionMatch ? descriptionMatch[1] : '';

  // Extract audio file
  const audioMatch = htmlContent.match(/<source src="\.\.\/audio\/(.*?)" type="audio\/wav">/);
  const audioFile = audioMatch ? audioMatch[1] : undefined;

  // Extract meta information
  const dateMatch = htmlContent.match(/<span><i class="fas fa-calendar-alt"><\/i>(.*?)<\/span>/);
  const sectionMatch = htmlContent.match(/<span><i class="fas fa-book-open"><\/i>(.*?)<\/span>/);
  const readTimeMatch = htmlContent.match(/<span><i class="fas fa-clock"><\/i>(.*?)<\/span>/);

  const meta = {
    date: dateMatch ? dateMatch[1] : '',
    section: sectionMatch ? sectionMatch[1] : '',
    readTime: readTimeMatch ? readTimeMatch[1] : ''
  };

  // Extract the main article content
  const articleStart = htmlContent.indexOf('<article class="article-content">');
  const articleEnd = htmlContent.indexOf('</article>', articleStart);
  
  if (articleStart === -1 || articleEnd === -1) {
    return {
      title,
      content: '',
      audioFile,
      meta
    };
  }

  let content = htmlContent.substring(articleStart + '<article class="article-content">'.length, articleEnd);
  
  // Clean up the content - remove script tags and style tags
  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  
  // Convert HTML to JSX-compatible format
  content = content
    .replace(/class=/g, 'className=')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    .replace(/<img([^>]*)>/g, '<img$1 />')
    .replace(/<input([^>]*)>/g, '<input$1 />')
    .replace(/<audio([^>]*)>/g, '<audio$1 />')
    .replace(/<source([^>]*)>/g, '<source$1 />');

  return {
    title,
    content,
    audioFile,
    meta
  };
}

function generateArticleComponent(slug, articleData) {
  return `import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';

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

  const articleContent = params.slug === '${slug}' ? {
    title: '${articleData.title}',
    content: \`${articleData.content}\`,
    audioFile: '${articleData.audioFile || ''}',
    meta: {
      date: '${articleData.meta.date}',
      section: '${articleData.meta.section}',
      readTime: '${articleData.meta.readTime}'
    }
  } : null;

  if (!articleContent) {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1>{article.title}</h1>
            <p>Article content coming soon...</p>
          </div>
        </div>
      </div>
    );
  }

  const currentIndex = articles.findIndex(a => a.slug === params.slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="enhanced-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/novice-to-navigator">Novice to Navigator</a></li>
              <li className="breadcrumb-item active" aria-current="page">{articleContent.title}</li>
            </ol>
          </nav>
          
          {/* Article Title */}
          <h1 className="fw-bold headline-gradient mb-3">{articleContent.title}</h1>
          
          {/* Meta Info */}
          <div className="article-meta">
            <span><i className="fas fa-calendar-alt"></i>{articleContent.meta.date}</span>
            <span><i className="fas fa-book-open"></i>{articleContent.meta.section}</span>
            <span><i className="fas fa-clock"></i>{articleContent.meta.readTime}</span>
          </div>
          
          {/* Audio Player */}
          {articleContent.audioFile && (
            <div className="article-header">
              <p><strong>Listen to this article:</strong></p>
              <audio controls>
                <source src={\`/audio/\${articleContent.audioFile}\`} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
          
          {/* Article Content */}
          <article 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: articleContent.content }}
          />
          
          {/* Navigation */}
          <div className="article-navigation">
            <div className="d-flex justify-content-between align-items-center">
              <div className="text-start">
                <a href="/novice-to-navigator" className="btn btn-outline-primary">
                  <i className="fas fa-arrow-left me-2"></i>Back to Series
                </a>
              </div>
              <div className="text-end">
                {nextArticle && (
                  <a href={\`/novice-to-navigator/\${nextArticle.slug}\`} className="btn btn-outline-primary">
                    Next: {nextArticle.title}<i className="fas fa-arrow-right ms-2"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
}

// Example usage:
// const htmlContent = fs.readFileSync('../novice-to-navigator/what-is-ai-really.html', 'utf-8');
// const articleData = extractArticleContent(htmlContent);
// const componentCode = generateArticleComponent('what-is-ai-really', articleData);
// console.log(componentCode);

module.exports = {
  extractArticleContent,
  generateArticleComponent
}; 