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
    level?: number; // 0-100
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

export interface CertificationItem {
  id: string;
  name: string;
  code: string;
  issuer: string;
  issueDate: string;
  validThrough: string;
  badge: string;
  verificationUrl: string;
  imageUrl?: string;
  skills: string[];
}

export interface BlogTableData {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface BlogImageFigure {
  url: string;
  caption: string;
}

export interface BlogActionStep {
  stepNumber?: number;
  instruction: string;
  image?: string;
  imageCaption?: string;
  table?: BlogTableData;
  note?: string;
}

export interface BlogCodeBlock {
  filename?: string;
  language?: string;
  code: string;
}

export interface BlogBuildingBlock {
  tag: string;
  name: string;
  annotation: string;
  description: string;
}

export interface BlogArticleSection {
  heading: string;
  paragraphs: string[];
  code?: string;
  codeBlocks?: BlogCodeBlock[];
  buildingBlocks?: BlogBuildingBlock[];
  keyPoints?: string[];
  tables?: BlogTableData[];
  actionSteps?: BlogActionStep[];
  image?: string;
  imageCaption?: string;
  figures?: BlogImageFigure[];
}

export interface BlogSectionGroup {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  sections: BlogArticleSection[];
}

export interface BlogPostSource {
  title: string;
  url: string;
  badge: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  sources?: BlogPostSource[];
  groups?: BlogSectionGroup[];
  sections?: BlogArticleSection[]; // optional — primary content lives in `groups`
}



