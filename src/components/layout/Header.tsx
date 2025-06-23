import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-white">
            Mimari Portfolyo
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Ana Sayfa
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Galeri
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Hizmetlerimiz
            </Link>
            <Link
              to="/campaign"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Yarısı Bizden Kampanyası
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              İletişim
            </Link>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
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
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header; 