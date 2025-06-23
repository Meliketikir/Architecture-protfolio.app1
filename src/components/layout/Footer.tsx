import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mimari Portfolyo</h3>
            <p className="text-gray-400">
              Modern ve sürdürülebilir mimari çözümler sunan profesyonel mimarlık
              ofisi.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Adres: İstanbul, Türkiye</li>
              <li>Telefon: +90 212 123 45 67</li>
              <li>E-posta: info@mimariportfolyo.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646A4.14 4.14 0 0021.6 4c-.75.445-1.56.7-2.433.877A4.072 4.072 0 0017.5 2c-2.013 0-3.633 1.623-3.633 3.632 0 .33.038.653.109.959A10.375 10.375 0 013 4.292c-.385.64-.64 1.393-.64 2.184 0 1.28.65 2.405 1.63 3.07C3.475 9.775 2.95 9.61 2.4 9.3c0 .018 0 .036 0 .054 0 1.764 1.25 3.234 2.915 3.56-.25.064-.5.097-.764.097-.187 0-.368-.016-.543-.054.464 1.44 1.804 2.484 3.414 2.513A8.136 8.136 0 013 18.234c-.414 0-.828-.025-1.22-.072A11.623 11.623 0 008.29 20.251z"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C8.683 2 7.012 2.015 6.132 2.051c-.65.027-1.047.09-1.39.227-.343.138-.664.33-1.006.671a4.896 4.896 0 00-.671 1.006c-.137.343-.2.74-.227 1.39-.036.88-.051 2.55-.051 5.868s.015 4.988.051 5.868c.027.65.09 1.047.227 1.39.138.343.33.664.671 1.006a4.896 4.896 0 001.006.671c.343.137.74.2 1.39.227.88.036 2.55.051 5.868.051s4.988-.015 5.868-.051c.65-.027 1.047-.09 1.39-.227.343-.138.664-.33 1.006-.671a4.896 4.896 0 00.671-1.006c.137-.343.2-.74.227-1.39.036-.88.051-2.55.051-5.868s-.015-4.988-.051-5.868c-.027-.65-.09-1.047-.227-1.39a4.896 4.896 0 00-.671-1.006c-.343-.137-.74-.2-1.39-.227-.88-.036-2.55-.051-5.868-.051zm0 1.9c3.275 0 3.689.014 4.757.058.599.025.92.083 1.12.176.2.094.34.205.488.353.148.148.259.288.353.488.093.2.151.521.176 1.12.044 1.068.058 1.482.058 4.757s-.014 3.689-.058 4.757c-.025.599-.083.92-.176 1.12a2.915 2.915 0 01-.353.488c-.148.148-.288.259-.488.353-.2.093-.521.151-1.12.176-1.068.044-1.482.058-4.757.058s-3.689-.014-4.757-.058c-.599-.025-.92-.083-1.12-.176a2.915 2.915 0 01-.488-.353c-.148-.148-.259-.288-.353-.488-.093-.2-.151-.521-.176-1.12C4.014 15.689 4 15.275 4 12s.014-3.689.058-4.757c.025-.599.083-.92.176-1.12a2.915 2.915 0 01.353-.488c.148-.148.288-.259.488-.353.2-.093.521-.151 1.12-.176C8.311 4.014 8.725 4 12 4zm0 3.6a4.4 4.4 0 100 8.8 4.4 4.4 0 000-8.8zm0 1.9c-1.378 0-2.492 1.114-2.492 2.492s1.114 2.492 2.492 2.492 2.492-1.114 2.492-2.492-1.114-2.492-2.492-2.492z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm8.127-2.316V7.075h-2.58v6.786h2.58v-4.14c0-.22.012-.44.024-.66.06-.54.34-.96.96-1.24.62-.28 1.4-.26 1.86.19.46.45.54 1.1.54 1.76v3.31H17v-4.496c0-2.54-1.35-3.68-3.15-3.68-1.54 0-2.28 1.05-2.66 1.62h-.024v-.002zm-3.087-2.7c-.845 0-1.392.547-1.392 1.25s.527 1.25 1.353 1.25h.024c.866 0 1.392-.547 1.392-1.25-.012-.693-.527-1.25-1.378-1.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mimari Portfolyo. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 