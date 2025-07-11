import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ServiceContent {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  heroTitle: string;
  heroSubtitle: string;
  features: string[];
  benefits: string[];
  content: string;
}

export function getServiceBySlug(slug: string): ServiceContent | null {
  try {
    const servicesDirectory = path.join(process.cwd(), 'src/content/services');
    const fullPath = path.join(servicesDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      category: data.category,
      heroTitle: data.heroTitle,
      heroSubtitle: data.heroSubtitle,
      features: data.features || [],
      benefits: data.benefits || [],
      content
    };
  } catch (error) {
    console.error(`Error reading service ${slug}:`, error);
    return null;
  }
}

export function getAllServiceSlugs(): string[] {
  try {
    const servicesDirectory = path.join(process.cwd(), 'src/content/services');
    
    if (!fs.existsSync(servicesDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(servicesDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading service slugs:', error);
    return [];
  }
}

export function getAllServices(): ServiceContent[] {
  try {
    const slugs = getAllServiceSlugs();
    const services: ServiceContent[] = [];
    
    for (const slug of slugs) {
      const service = getServiceBySlug(slug);
      if (service) {
        services.push(service);
      }
    }
    
    return services.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error('Error reading all services:', error);
    return [];
  }
} 