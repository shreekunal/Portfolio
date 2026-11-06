export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDetails?: string;
  category: 'Full Stack' | 'Frontend' | 'Architecture' | 'AI / Tools';
  tags: string[];
  metrics?: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 0-100
    iconName?: string;
    tag?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface QuickStat {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}
