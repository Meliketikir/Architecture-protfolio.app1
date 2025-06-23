import React from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

const mockServices: Service[] = [
  {
    id: 's1',
    title: 'Mimari Tasarım',
    description: 'Yapılarınız için estetik ve fonksiyonel çözümler sunarak hayallerinizi gerçeğe dönüştürüyoruz. Konsept geliştirmeden uygulama projelerine kadar geniş bir yelpazede hizmet veriyoruz.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 's2',
    title: 'İç Mekan Tasarımı',
    description: 'Yaşam ve çalışma alanlarınızın iç mekanlarını, kişisel zevkleriniz ve ihtiyaçlarınız doğrultusunda modern ve kullanışlı bir şekilde tasarlıyoruz.',
    image: 'https://www.ankaraicmimarlik.com/tr/blog/wp-content/uploads/2022/02/ic-mimar-ne-yapar.jpg',
  },
  {
    id: 's3',
    title: 'Peyzaj Tasarımı',
    description: 'Dış mekanlarınızı doğal güzelliklerle birleştirerek huzurlu ve estetik alanlar yaratıyoruz. Bahçe düzenlemesi, bitki seçimi ve sürdürülebilir peyzaj çözümleri sunuyoruz.',
    image: 'https://www.agritechakademi.com/img/P4.jpg',
  },
  {
    id: 's4',
    title: 'Kentsel Tasarım',
    description: 'Şehirlerimizin geleceğini şekillendiren, insan odaklı ve çevreye duyarlı kentsel mekanlar tasarlıyoruz. Kamusal alanlar, meydanlar ve ulaşım ağları üzerinde çalışıyoruz.',
    image: 'https://www.arkitera.com/wp-content/uploads/2017/11/37.jpg-615x375.jpeg',
  },
  {
    id: 's5',
    title: 'Restorasyon Projeleri',
    description: 'Tarihi ve kültürel mirasımızı koruyarak, eski yapıları aslına uygun restore ediyor ve günümüz koşullarına adapte ediyoruz.',
    image: 'https://www.mimaritasarimakademisi.com/wp-content/uploads/2017/09/mimari-tasarim-akademisi-restorasyon-nedir-3.jpg',
  },
  {
    id: 's6',
    title: 'Danışmanlık Hizmetleri',
    description: 'Proje süreçlerinizin her aşamasında size uzman danışmanlık hizmeti sunarak, doğru kararlar almanıza ve başarılı sonuçlar elde etmenize yardımcı oluyoruz.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Hizmetlerimiz</h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Self Mimarlık olarak, projelerinizin her aşamasında yanınızda yer alarak,
        ihtiyaçlarınıza özel, yenilikçi ve sürdürülebilir mimari çözümler sunuyoruz.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockServices.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services; 