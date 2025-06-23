import React from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="fixed inset-y-0 right-0 w-64 bg-gray-900 shadow-lg">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <nav className="px-4 py-2">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block text-white hover:text-yellow-400"
                onClick={onClose}
              >
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block text-white hover:text-yellow-400"
                onClick={onClose}
              >
                Galeri
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block text-white hover:text-yellow-400"
                onClick={onClose}
              >
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link
                to="/campaign"
                className="block text-white hover:text-yellow-400"
                onClick={onClose}
              >
                Yarısı Bizden Kampanyası
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-white hover:text-yellow-400"
                onClick={onClose}
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-white hover:text-yellow-400"
                onClick={onClose}
              >
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu; 