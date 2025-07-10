import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ArticleContent {
  slug: string;
  title: string;
  content: string;
  audioFile?: string;
  meta: {
    date: string;
    section: string;
    readTime: string;
  };
}

export function getArticleBySlug(slug: string): ArticleContent | null {
  try {
    const articlesDirectory = path.join(process.cwd(), 'src/content/articles');
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      content,
      audioFile: data.audioFile,
      meta: {
        date: data.date,
        section: data.section,
        readTime: data.readTime
      }
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export function getAllArticleSlugs(): string[] {
  try {
    const articlesDirectory = path.join(process.cwd(), 'src/content/articles');
    
    if (!fs.existsSync(articlesDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(articlesDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading article slugs:', error);
    return [];
  }
} 