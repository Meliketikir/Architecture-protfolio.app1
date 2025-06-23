import React from 'react';
import cvFoto from '../images/cv-foto.jpg';
import cemreFoto from '../images/cemre-foto.jpg';
import oguzFoto from '../images/oguz-foto.jpeg';
import erkanFoto from '../images/erkan-foto.jpg';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-gray-900 leading-tight">
          Bizi Tanıyın: <span className="text-blue-600">Self Mimarlık</span>
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
          Self Mimarlık olarak, ilham veren ve işlevsel mekanlar yaratma tutkusuyla çalışıyoruz. Her projede, estetiği ve sürdürülebilirliği ön planda tutarak hayallerinizi gerçeğe dönüştürmeyi hedefliyoruz.
        </p>

        {/* Misyon ve Vizyon Bölümü */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 text-left">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Misyonumuz</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sürdürülebilir ve yenilikçi mimari çözümler sunarak, yaşam alanlarını
              işlevsel ve estetik bir şekilde tasarlamak. Müşterilerimizin
              ihtiyaçlarını en iyi şekilde anlayarak, onların hayallerini gerçeğe
              dönüştürmek.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Vizyonumuz</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mimari tasarım alanında öncü olmak, sürdürülebilir ve çevre dostu
              projeler geliştirmek, topluma değer katan yapılar tasarlamak. Global ölçekte tanınan, referans gösterilen bir marka olmak.
            </p>
          </div>
        </div>

        {/* Değerler Bölümü */}
        <h2 className="text-4xl font-bold mb-10 text-gray-900">Değerlerimiz</h2>
        <ul className="list-none p-0 text-gray-700 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <li className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
            <span className="text-5xl mb-3">✨</span>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Yenilikçilik</h3>
            <p className="text-center">Sürekli yeni fikirler ve teknolojilerle projelerimizi zenginleştiriyoruz.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
            <span className="text-5xl mb-3">🌿</span>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Sürdürülebilirlik</h3>
            <p className="text-center">Çevreye duyarlı ve enerji verimli tasarımlar üretiyoruz.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
            <span className="text-5xl mb-3">🤝</span>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Müşteri Odaklılık</h3>
            <p className="text-center">Müşteri memnuniyetini her zaman en üst önceliğimiz olarak görüyoruz.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
            <span className="text-5xl mb-3">📐</span>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Kalite</h3>
            <p className="text-center">Tasarım ve uygulamada en yüksek kalite standartlarını benimsiyoruz.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
            <span className="text-5xl mb-3">📈</span>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Sürekli Gelişim</h3>
            <p className="text-center">Sektördeki yenilikleri takip ederek kendimizi sürekli geliştiriyoruz.</p>
          </li>
        </ul>

        {/* Ekibimiz Bölümü */}
        <h2 className="text-4xl font-bold mb-10 text-gray-900">Ekibimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <img
              src={cvFoto}
              alt="Volkan Godak"
              className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
            />
            <h3 className="text-2xl font-semibold mb-1 text-gray-800">Melike TIKIR</h3>
            <p className="text-blue-600 mb-2">Kurucu & Baş Mimar</p>
            <p className="text-gray-700">
              15 yıllık deneyime sahip, ulusal ve uluslararası birçok prestijli projeye imza atmıştır.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <img
              src={cemreFoto}
              alt="Cemre Şensoy"
              className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
            />
            <h3 className="text-2xl font-semibold mb-1 text-gray-800">İrem ZOBU</h3>
            <p className="text-blue-600 mb-2">Proje Müdürü</p>
            <p className="text-gray-700">
              Sürdürülebilir mimari konusunda uzman, LEED ve BREEAM sertifikalı profesyonel.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <img
              src={oguzFoto}
              alt="Oğuz Şensoy"
              className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
            />
            <h3 className="text-2xl font-semibold mb-1 text-gray-800">Elif Hande TIKIR</h3>
            <p className="text-blue-600 mb-2">İç Mimar</p>
            <p className="text-gray-700">
              İç mekan tasarımında 10 yıllık deneyime sahip, mekanlara kimlik katan ödüllü projeleri bulunmaktadır.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <img
              src={erkanFoto}
              alt="Erkan Şensoy"
              className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
            />
            <h3 className="text-2xl font-semibold mb-1 text-gray-800">Tuna KARA</h3>
            <p className="text-blue-600 mb-2">Peyzaj Mimarı</p>
            <p className="text-gray-700">
              Peyzaj tasarımı ve sürdürülebilir bahçe projeleri konusunda uzman, doğal yaşamla uyumlu alanlar yaratır.
            </p>
          </div>
        </div>

        {/* Sertifikalar Bölümü */}
        <h2 className="text-4xl font-bold mb-10 text-gray-900">Sertifikalarımız</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg text-left max-w-2xl mx-auto">
          <li>ISO 9001:2015 Kalite Yönetim Sistemi</li>
          <li>ISO 14001:2015 Çevre Yönetim Sistemi</li>
          <li>LEED Platinum Sertifikası</li>
          <li>BREEAM Excellent Sertifikası</li>
        </ul>
      </div>
    </div>
  );
};

export default About; 