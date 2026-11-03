export interface BiomedicalField {
  id: string;
  name: string;
  shortCode: string;
  category: 'Molecular' | 'Clinical' | 'Systems' | 'Computational';
  tagline: string;
  description: string;
  keyTopics: string[];
  facultyLead: string;
  leadTitle: string;
  activeProjectsCount: number;
  coreLabs: string[];
  careerPaths: string[];
}

export interface DepartmentOfficer {
  id: string;
  name: string;
  role: string;
  departmentRole: 'Executive' | 'Research' | 'Academics' | 'Operations' | 'Student Society';
  degrees: string;
  bio: string;
  researchFocus: string;
  email: string;
  phone: string;
  office: string;
  officeHours: string;
  researchGateUrl: string;
  googleScholarUrl?: string;
  image: string;
  publicationsCount: number;
  citationsCount: number;
  hIndex: number;
}

export interface ResearchPaper {
  id: string;
  title: string;
  journal: string;
  year: number;
  authors: string[];
  fieldId: string;
  category: string;
  abstract: string;
  researchGateUrl: string;
  pubmedId: string;
  doi: string;
  downloadsCount: number;
  citations: number;
  impactFactor: string;
  openAccess: boolean;
}

export interface LabProtocolResource {
  id: string;
  title: string;
  type: 'PDF' | 'Protocol' | 'Dataset' | 'Guide';
  fileSize: string;
  category: string;
  lastUpdated: string;
  downloads: number;
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  author: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  institution: string;
  rating: number;
  isFeatured?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
