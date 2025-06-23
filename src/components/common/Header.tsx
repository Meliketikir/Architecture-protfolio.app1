import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Mimari Portfolyo</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-600">Ana Sayfa</Link>
            <Link to="/projects" className="hover:text-gray-600">Projeler</Link>
            <Link to="/services" className="hover:text-gray-600">Hizmetler</Link>
            <Link to="/about" className="hover:text-gray-600">Hakkımızda</Link>
            <Link to="/contact" className="hover:text-gray-600">İletişim</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 