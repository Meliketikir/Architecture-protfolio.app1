import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/projectService';
import type { Project } from '../types/project';
import Lightbox from '../components/common/Lightbox';

interface GalleryImage {
  url: string;
  projectTitle: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await getProjects();
        const allImages: GalleryImage[] = projects.flatMap(project => 
          project.images.map(url => ({
            url,
            projectTitle: project.title
          }))
        );
        setImages(allImages);
      } catch (error) {
        console.error('Projeler yüklenirken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.url === selectedImage.url);
      if (currentIndex < images.length - 1) {
        setSelectedImage(images[currentIndex + 1]);
      }
    }
  };

  const handlePrevImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.url === selectedImage.url);
      if (currentIndex > 0) {
        setSelectedImage(images[currentIndex - 1]);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Proje Galerisi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.url}
              alt={image.projectTitle}
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                <h3 className="text-lg font-semibold">{image.projectTitle}</h3>
                <p className="text-sm mt-2">Görseli büyütmek için tıklayın</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isLightboxOpen && selectedImage && (
        <Lightbox
          images={images.map(img => img.url)}
          currentIndex={images.findIndex(img => img.url === selectedImage.url)}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </div>
  );
};

export default Gallery; 