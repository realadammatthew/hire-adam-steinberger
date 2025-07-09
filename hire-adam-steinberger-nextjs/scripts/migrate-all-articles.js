const fs = require('fs');
const path = require('path');

// This script migrates all 33 articles from HTML to Next.js format
const articlesDir = '../novice-to-navigator';
const outputFile = './src/app/novice-to-navigator/[slug]/page.tsx';

function extractArticleContent(htmlContent) {
  // Extract title from the HTML
  const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1].replace(' | Novice to Navigator Series | Adam Matthew Steinberger', '') : '';

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
    .replace(/<source([^>]*)>/g, '<source$1 />')
    .replace(/<table([^>]*)>/g, '<table$1 className="table table-striped">')
    .replace(/<thead([^>]*)>/g, '<thead$1>')
    .replace(/<tbody([^>]*)>/g, '<tbody$1>')
    .replace(/<tr([^>]*)>/g, '<tr$1>')
    .replace(/<th([^>]*)>/g, '<th$1>')
    .replace(/<td([^>]*)>/g, '<td$1>');

  return {
    title,
    content,
    audioFile,
    meta
  };
}

function generateArticleComponent(articlesData) {
  const articlesMap = Object.entries(articlesData).map(([slug, data]) => {
    return `  '${slug}': {
    title: '${data.title.replace(/'/g, "\\'")}',
    content: \`${data.content.replace(/`/g, '\\`')}\`,
    audioFile: '${data.audioFile || ''}',
    meta: {
      date: '${data.meta.date}',
      section: '${data.meta.section}',
      readTime: '${data.meta.readTime}'
    }
  }`;
  }).join(',\n');

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

  // Article content data
  const articlesData = {
${articlesMap}
  };

  const articleContent = articlesData[params.slug];

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

// Get all HTML files from the articles directory
function getAllArticleFiles() {
  const files = fs.readdirSync(articlesDir);
  return files.filter(file => file.endsWith('.html') && file !== 'index.html');
}

// Main migration function
function migrateAllArticles() {
  console.log('Starting migration of all articles...');
  
  const articleFiles = getAllArticleFiles();
  const articlesData = {};
  
  articleFiles.forEach(file => {
    const slug = file.replace('.html', '');
    const filePath = path.join(articlesDir, file);
    
    try {
      const htmlContent = fs.readFileSync(filePath, 'utf-8');
      const articleData = extractArticleContent(htmlContent);
      articlesData[slug] = articleData;
      
      console.log(`✅ Migrated: ${slug}`);
    } catch (error) {
      console.error(`❌ Error migrating ${slug}:`, error.message);
    }
  });
  
  // Generate the complete component
  const componentCode = generateArticleComponent(articlesData);
  
  // Write to the output file
  fs.writeFileSync(outputFile, componentCode);
  
  console.log(`\n🎉 Migration complete!`);
  console.log(`📁 Generated: ${outputFile}`);
  console.log(`📊 Total articles migrated: ${Object.keys(articlesData).length}`);
  
  return articlesData;
}

// Run the migration
if (require.main === module) {
  migrateAllArticles();
}

module.exports = {
  migrateAllArticles,
  extractArticleContent,
  generateArticleComponent
}; 