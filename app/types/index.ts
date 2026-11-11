// Type definitions for the portfolio application

export type Locale = 'en' | 'fr';

export interface Translation {
  nav: {
    about: string;
    education: string;
    skills: string;
    projects: string;
    contact: string;
    language: string;
  };
  hero: {
    greeting: string;
    title: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
  };
  education: {
    title: string;
    degree: string;
    university: string;
    year: string;
    summary: string;
  };
  skills: {
    title: string;
    frontend: string;
    backend: string;
    tools: string;
    languages: string[];
    backendItems: string[];
    toolsItems: string[];
  };
  projects: {
    title: string;
    project1: {
      name: string;
      description: string;
      tech: string;
    };
    project2: {
      name: string;
      description: string;
      tech: string;
    };
    project3: {
      name: string;
      description: string;
      tech: string;
    };
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
  footer: {
    copyright: string;
    credit: string;
  };
}

export interface NavbarProps {
  locale: Locale;
  t: Translation;
}

export interface ComponentProps {
  t: Translation;
}

export interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// ---------------------------------------------------------------------------
// Projects section: detailed project data (public/locales/*.json) and the
// labels of the project details dialog.
// ---------------------------------------------------------------------------

export interface ProjectGalleryItem {
  src: string;
  group: string;
  caption: string;
}

export interface ProjectStackGroup {
  label: string;
  items: string[];
}

export interface ProjectSectionItem {
  name: string;
  // Methods and libraries, separated by " · "
  tech: string;
  text: string;
}

// Optional highlight block of the project dialog (e.g. AI models, system architecture)
export interface ProjectSection {
  title: string;
  intro: string;
  icon: 'ai' | 'system';
  items: ProjectSectionItem[];
}

export interface ProjectItem {
  category: string;
  title: string;
  description: string;
  stack: string;
  image: string;
  url: string;
  github: string;
  details: string;
  role: string;
  features: string[];
  stackDetails: ProjectStackGroup[];
  gallery: ProjectGalleryItem[];
  sections?: ProjectSection[];
}

export interface ProjectDialogLabels {
  details: string;
  close: string;
  role: string;
  about: string;
  features: string;
  stack: string;
  gallery: string;
  previous: string;
  next: string;
  enlarge: string;
  viewProject: string;
  code: string;
}
