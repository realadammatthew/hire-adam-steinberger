export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  // Add blog posts here as they are created
];

export const blogCategories = [
  {
    name: 'AI Development',
    description: 'Latest insights on AI development and implementation',
    slug: 'ai-development'
  },
  {
    name: 'Technology Insights',
    description: 'Deep dives into emerging technologies and trends',
    slug: 'technology-insights'
  },
  {
    name: 'Business Strategy',
    description: 'Strategic approaches to AI adoption in business',
    slug: 'business-strategy'
  },
  {
    name: 'Case Studies',
    description: 'Real-world examples and success stories',
    slug: 'case-studies'
  }
];

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured === true);
}

export function getRecentPosts(limit: number = 5): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit);
}