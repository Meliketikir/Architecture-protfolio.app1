import { create } from 'zustand';
import type { Project } from '../types/project';

interface AppState {
  projects: Project[];
  selectedProject: Project | null;
  isLoading: boolean;
  error: string | null;
  setProjects: (projects: Project[]) => void;
  setSelectedProject: (project: Project | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

const useAppStore = create<AppState>((set) => ({
  projects: [],
  selectedProject: null,
  isLoading: false,
  error: null,
  setProjects: (projects) => set({ projects }),
  setSelectedProject: (project) => set({ selectedProject: project }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));

export default useAppStore; 