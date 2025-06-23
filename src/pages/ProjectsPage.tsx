import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAppStore from '../store/useAppStore';
import { getProjects } from '../services/projectService';
import ProjectCard from '../components/common/ProjectCard';
import SearchBar from '../components/common/SearchBar';
import FilterBar from '../components/common/FilterBar';
import type { Project } from '../types/project';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { projects, setProjects, setLoading, setError } = useAppStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryFromUrl = queryParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }

    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        setError('Projeler yüklenirken bir hata oluştu.');
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [setProjects, setLoading, setError, location.search]);

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  const categories = useMemo(() => {
    const uniqueCategories = new Set(projects.map((p) => p.category));
    return Array.from(uniqueCategories);
  }, [projects]);

  const statuses = useMemo(() => {
    const uniqueStatuses = new Set(projects.map((p) => p.status));
    return Array.from(uniqueStatuses);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        !selectedCategory || project.category === selectedCategory;
      const matchesStatus = !selectedStatus || project.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [projects, searchQuery, selectedCategory, selectedStatus]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Tüm Projelerimiz</h1>

      <div className="mb-8 space-y-4">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Proje ara..."
        />

        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          statuses={statuses}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
        />
      </div>

      {filteredProjects.length === 0 ? (
        <p className="text-center text-gray-500">Proje bulunamadı.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage; 