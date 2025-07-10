import fs from 'fs';

export interface ArticleContent {
  title: string;
  content: string;
  audioFile?: string;
  meta: {
    date: string;
    section: string;
    readTime: string;
  };
}

export function extractArticleContent(htmlContent: string): ArticleContent {
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
    .replace(/<source([^>]*)>/g, '<source$1 />');

  return {
    title,
    content,
    audioFile,
    meta
  };
}

export function readArticleFile(filePath: string): ArticleContent {
  const htmlContent = fs.readFileSync(filePath, 'utf-8');
  return extractArticleContent(htmlContent);
} 