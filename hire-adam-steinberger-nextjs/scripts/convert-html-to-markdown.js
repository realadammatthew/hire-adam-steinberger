const fs = require('fs');
const path = require('path');

function convertHtmlToMarkdown(html) {
  let markdown = html;
  
  // Convert HTML tags to Markdown
  markdown = markdown
    // Headers
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1')
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1')
    .replace(/<h5[^>]*>(.*?)<\/h5>/gi, '##### $1')
    .replace(/<h6[^>]*>(.*?)<\/h6>/gi, '###### $1')
    
    // Paragraphs
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '\n\n$1\n\n')
    
    // Bold and italic
    .replace(/<strong>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<b>(.*?)<\/b>/gi, '**$1**')
    .replace(/<em>(.*?)<\/em>/gi, '*$1*')
    .replace(/<i>(.*?)<\/i>/gi, '*$1*')
    
    // Lists
    .replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (match, content) => {
      return content.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
    })
    .replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (match, content) => {
      let counter = 1;
      return content.replace(/<li[^>]*>(.*?)<\/li>/gi, () => `${counter++}. $1\n`);
    })
    
    // Links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    
    // Code blocks
    .replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
    .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, '\n```\n$1\n```\n')
    
    // Blockquotes
    .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, '\n> $1\n')
    
    // Line breaks
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<hr\s*\/?>/gi, '\n---\n')
    
    // Divs with specific classes (convert to custom blocks)
    .replace(/<div[^>]*className="([^"]*)"[^>]*>([\s\S]*?)<\/div>/gi, (match, className, content) => {
      if (className.includes('card') && className.includes('purple-box')) {
        return `\n::: callout\n${content.trim()}\n:::\n`;
      }
      return content;
    })
    
    // Remove any remaining HTML tags
    .replace(/<[^>]*>/g, '')
    
    // Clean up extra whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/^\s+|\s+$/gm, '')
    .trim();
  
  return markdown;
}

function processMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Split frontmatter and content
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (!frontmatterMatch) {
    console.log(`Skipping ${filePath} - no frontmatter found`);
    return;
  }
  
  const frontmatter = frontmatterMatch[1];
  const htmlContent = frontmatterMatch[2];
  
  // Convert HTML to Markdown
  const markdownContent = convertHtmlToMarkdown(htmlContent);
  
  // Reconstruct the file
  const newContent = `---\n${frontmatter}\n---\n\n${markdownContent}\n`;
  
  fs.writeFileSync(filePath, newContent);
  console.log(`Converted: ${filePath}`);
}

function convertAllFiles() {
  const articlesDir = path.join(__dirname, '../src/content/articles');
  
  if (!fs.existsSync(articlesDir)) {
    console.error('Articles directory not found');
    return;
  }
  
  const files = fs.readdirSync(articlesDir);
  const markdownFiles = files.filter(file => file.endsWith('.md'));
  
  console.log(`Found ${markdownFiles.length} Markdown files to convert`);
  
  markdownFiles.forEach(file => {
    const filePath = path.join(articlesDir, file);
    processMarkdownFile(filePath);
  });
  
  console.log('HTML to Markdown conversion completed!');
}

convertAllFiles(); 