export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  location: string;
  year: number;
  client: string;
  services: string[];
  features: string[];
  status: 'completed' | 'in-progress' | 'planned';
  details: string;
}

export interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
} 