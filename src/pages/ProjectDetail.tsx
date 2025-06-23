import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAppStore from '../store/useAppStore';
import { getProjectById } from '../services/projectService';
import Lightbox from '../components/common/Lightbox';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { selectedProject, setSelectedProject, setLoading, setError } = useAppStore();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const project = await getProjectById(id);
        if (project) {
          setSelectedProject(project);
        } else {
          setError('Proje bulunamadı.');
          navigate('/');
        }
      } catch (error) {
        setError('Proje detayları yüklenirken bir hata oluştu.');
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, setSelectedProject, setLoading, setError, navigate]);

  if (!selectedProject) {
    return null;
  }

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const handleNextImage = () => {
    if (currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src={selectedProject.images[0]}
            alt={selectedProject.title}
            className="w-full h-[400px] object-cover rounded-lg cursor-pointer"
            onClick={() => handleImageClick(0)}
          />
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {selectedProject.images.slice(1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${selectedProject.title} - ${index + 2}`}
              className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
              onClick={() => handleImageClick(index + 1)}
            />
          ))}
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{selectedProject.title}</h1>
            <p className="text-gray-600">
              {selectedProject.location} • {selectedProject.year}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Proje Hakkında</h2>
            <p className="text-gray-700">{selectedProject.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Hizmetler</h2>
            <div className="flex flex-wrap gap-2">
              {selectedProject.services.map((service, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Özellikler</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {selectedProject.features?.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Proje Bilgileri</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Kategori</p>
                <p className="font-medium">{selectedProject.category}</p>
              </div>
              <div>
                <p className="text-gray-600">Müşteri</p>
                <p className="font-medium">{selectedProject.client}</p>
              </div>
              <div>
                <p className="text-gray-600">Durum</p>
                <p className="font-medium">
                  {selectedProject.status === 'completed'
                    ? 'Tamamlandı'
                    : selectedProject.status === 'in-progress'
                    ? 'Devam Ediyor'
                    : 'Planlandı'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <Lightbox
          images={selectedProject.images}
          currentIndex={currentImageIndex}
          onClose={() => setIsLightboxOpen(false)}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </div>
  );
};

export default ProjectDetail; 