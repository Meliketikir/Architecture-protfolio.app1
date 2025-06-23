import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mimari Portfolyo</h3>
            <p className="text-gray-300">
              Yarının daha iyi olması için yenilikçi mimari çözümler üretiyoruz.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <p className="text-gray-300">E-posta: iletisim@mimari.com</p>
            <p className="text-gray-300">Telefon: +90 234 567 890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Mimari Portfolyo. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 