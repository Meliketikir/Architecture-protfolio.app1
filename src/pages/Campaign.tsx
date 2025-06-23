import React from 'react';

const Campaign: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Yarısı Bizden Kampanyası</h1>

        {/* Campaign Introduction */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="http://www.dipukentseldonusum.com/wp-content/uploads/2025/04/yarisi-bizden-kampanyasi.webp"
                alt="Yarısı Bizden Kampanyası"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">Hayalinizdeki Projeyi Yarı Fiyatına Gerçekleştirin!</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Self Mimarlık olarak, yeni ev, ofis veya yaşam alanı hayallerinizi
                gerçeğe dönüştürmeniz için eşsiz bir fırsat sunuyoruz: Yarısı
                Bizden Kampanyası! Belirli proje kategorilerinde, mimari tasarım
                ücretinin %50'sini biz karşılıyoruz.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bu kampanya ile kaliteli ve estetik mimari çözümlere daha uygun
                fiyatlarla ulaşabilir, bütçenizi zorlamadan rüya projenizi hayata
                geçirebilirsiniz. Sınırlı süreli bu fırsatı kaçırmayın!
              </p>
            </div>
          </div>
        </section>

        {/* Campaign Benefits */}
        <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Kampanyanın Faydaları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl text-yellow-500 mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Maliyet Tasarrufu</h3>
              <p className="text-gray-700">Mimari tasarım maliyetinizin yarısını biz karşılıyoruz.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-yellow-500 mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Profesyonel Tasarım</h3>
              <p className="text-gray-700">Deneyimli mimarlarımızla profesyonel hizmet alın.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-yellow-500 mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Hızlı Başlangıç</h3>
              <p className="text-gray-700">Hayalinizdeki projeye daha hızlı adım atın.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Şimdi Başvur ve Fırsatı Yakala!</h2>
          <p className="text-lg text-gray-700 mb-8">
            Kampanyamız hakkında daha fazla bilgi almak veya başvurmak için
            hemen bizimle iletişime geçin.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            İletişim Formuna Git
          </a>
        </section>
      </div>
    </div>
  );
};

export default Campaign; 