export type Project = {
  id: string;
  title: string;
  description: string;
  location: string;
  year: number;
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  images: string[];
  services: string[];
  client?: string;
  features?: string[];
  details: string;
};

export type ProjectCardProps = {
  project: Project;
  onClick: () => void;
}; 