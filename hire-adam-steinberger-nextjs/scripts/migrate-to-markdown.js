const fs = require('fs');
const path = require('path');

// This script extracts articles from the current page.tsx file and converts them to individual Markdown files

function extractArticlesFromPage() {
  const pagePath = path.join(__dirname, '../src/app/novice-to-navigator/[slug]/page.tsx');
  const content = fs.readFileSync(pagePath, 'utf8');
  
  // Find the articlesData object
  const articlesDataMatch = content.match(/const articlesData = \{([\s\S]*?)\};/);
  if (!articlesDataMatch) {
    console.error('Could not find articlesData object');
    return;
  }
  
  const articlesDataContent = articlesDataMatch[1];
  
  // Extract individual articles using regex
  const articleRegex = /'([^']+)':\s*\{([\s\S]*?)\}(?=,\s*'|$)/g;
  const articles = [];
  let match;
  
  while ((match = articleRegex.exec(articlesDataContent)) !== null) {
    const slug = match[1];
    const articleContent = match[2];
    
    // Extract title
    const titleMatch = articleContent.match(/title:\s*'([^']+)'/);
    const title = titleMatch ? titleMatch[1] : '';
    
    // Extract content
    const contentMatch = articleContent.match(/content:\s*`([\s\S]*?)`/);
    const content = contentMatch ? contentMatch[1] : '';
    
    // Extract audioFile
    const audioMatch = articleContent.match(/audioFile:\s*'([^']+)'/);
    const audioFile = audioMatch ? audioMatch[1] : '';
    
    // Extract meta
    const metaMatch = articleContent.match(/meta:\s*\{([\s\S]*?)\}/);
    let meta = {};
    if (metaMatch) {
      const metaContent = metaMatch[1];
      const dateMatch = metaContent.match(/date:\s*'([^']+)'/);
      const sectionMatch = metaContent.match(/section:\s*'([^']+)'/);
      const readTimeMatch = metaContent.match(/readTime:\s*'([^']+)'/);
      
      meta = {
        date: dateMatch ? dateMatch[1] : '',
        section: sectionMatch ? sectionMatch[1] : '',
        readTime: readTimeMatch ? readTimeMatch[1] : ''
      };
    }
    
    articles.push({
      slug,
      title,
      content: content.trim(),
      audioFile,
      meta
    });
  }
  
  return articles;
}

function createMarkdownFile(article) {
  const articlesDir = path.join(__dirname, '../src/content/articles');
  
  // Ensure directory exists
  if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
  }
  
  const frontmatter = `---
title: "${article.title}"
date: "${article.meta.date}"
section: "${article.meta.section}"
readTime: "${article.meta.readTime}"
audioFile: "${article.audioFile}"
---

${article.content}
`;
  
  const filePath = path.join(articlesDir, `${article.slug}.md`);
  fs.writeFileSync(filePath, frontmatter);
  console.log(`Created: ${filePath}`);
}

function migrateArticles() {
  console.log('Starting migration to Markdown files...');
  
  const articles = extractArticlesFromPage();
  if (!articles) {
    console.error('Failed to extract articles');
    return;
  }
  
  console.log(`Found ${articles.length} articles to migrate`);
  
  articles.forEach(article => {
    createMarkdownFile(article);
  });
  
  console.log('Migration completed!');
}

migrateArticles(); 