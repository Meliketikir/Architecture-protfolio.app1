import React, { useEffect } from 'react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  // ESC tuşuna basıldığında lightbox'ı kapat
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Lightbox açıkken sayfanın scroll edilmesini engelle
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      {/* Kapatma butonu */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 focus:outline-none"
        aria-label="Kapat"
      >
        &times;
      </button>

      {/* Önceki görsel butonu */}
      <button
        onClick={onPrev}
        className="absolute left-4 text-white text-4xl hover:text-gray-300 focus:outline-none"
        aria-label="Önceki görsel"
        disabled={currentIndex === 0}
      >
        &#10094;
      </button>

      {/* Sonraki görsel butonu */}
      <button
        onClick={onNext}
        className="absolute right-4 text-white text-4xl hover:text-gray-300 focus:outline-none"
        aria-label="Sonraki görsel"
        disabled={currentIndex === images.length - 1}
      >
        &#10095;
      </button>

      {/* Görsel */}
      <div className="relative max-w-4xl max-h-[90vh] mx-auto">
        <img
          src={images[currentIndex]}
          alt={`Görsel ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain"
          onError={(e) => console.error('Resim yüklenirken hata oluştu:', images[currentIndex], e)}
        />
      </div>

      {/* Görsel sayısı göstergesi */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Lightbox; 