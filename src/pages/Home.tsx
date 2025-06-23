import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../store/useAppStore';
import { getProjects } from '../services/projectService';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import heroBackgroundImage from '../images/mimari-tasarimda-planlama.jpg';

// Portföy görsellerini import et
import siteBinaImage from '../images/site_ve_bina.jpg';
import ticariImage from '../images/ticari.jpg';
import villaImage from '../images/villa.jpg';
import icMekanImage from '../images/ic_mekan.jpg';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { setProjects, setLoading, setError } = useAppStore();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        setError('Projeler yüklenirken bir hata oluştu.');
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [setProjects, setLoading, setError]);

  const handleCategoryClick = (category: string) => {
    navigate(`/projects?category=${category}`);
  };

  return (
    <div>
      {/* Hero Section - Self Mimarlık Style */}
      <section
        className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackgroundImage})`, backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-10 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInSlideUp text-shadow-md">
            Mekanlara Ruh Katıyoruz
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fadeInSlideUp delay-200 text-shadow-md">
            Self Mimarlık olarak, kalite ve estetik ilkeleriyle fonksiyonel ve
            ilham veren yaşam alanları tasarlıyoruz.
          </p>
          <button
            onClick={() => navigate('/gallery')}
            className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Projelerimizi Keşfedin
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <img
            src="https://api.iconify.design/mdi:arrow-down.svg?color=%23ffffff"
            alt="Scroll Down"
            className="w-12 h-12 object-contain animate-bounce"
          />
        </div>
      </section>

      {/* Approach/About Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            KALİTE VE ESTETİK İLKELERİYLE MEKANLAR TASARLIYORUZ
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Self Mimarlık, modern ve işlevsel tasarımları bir araya getirerek
            hayallerinizdeki mekanları gerçeğe dönüştürmeyi hedefler. Her projede,
            mekanın potansiyelini en üst düzeyde kullanırken, estetik ve
            sürdürülebilirlik ilkelerini ön planda tutarız. Tasarım sürecimizin
            temelinde, müşteri memnuniyeti ve yenilikçi çözümler yatar.
          </p>
        </div>
      </section>

      {/* Portfolio Categories Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">PORTFOLYÖ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Kategori Kartı 1: SİTE & BİNA PROJELERİ */}
            <div
              className="relative h-72 bg-cover bg-center rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 overflow-hidden group"
              style={{ backgroundImage: `url(${siteBinaImage})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-end p-6 rounded-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  SİTE & BİNA PROJELERİ
                </h3>
              </div>
            </div>
            {/* Kategori Kartı 2: TİCARİ PROJELER */}
            <div
              className="relative h-72 bg-cover bg-center rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 overflow-hidden group"
              style={{ backgroundImage: `url(${ticariImage})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-end p-6 rounded-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  TİCARİ PROJELER
                </h3>
              </div>
            </div>
            {/* Kategori Kartı 3: YAZLIK & VİLLA */}
            <div
              className="relative h-72 bg-cover bg-center rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 overflow-hidden group"
              style={{ backgroundImage: `url(${villaImage})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-end p-6 rounded-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  YAZLIK & VİLLA
                </h3>
              </div>
            </div>
            {/* Kategori Kartı 4: İÇ MEKAN */}
            <div
              className="relative h-72 bg-cover bg-center rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 overflow-hidden group"
              style={{ backgroundImage: `url(${icMekanImage})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-end p-6 rounded-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  İÇ MEKAN
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">MUTLU MÜŞTERİLER</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-gray-800">
              <Box sx={{ '& > legend': { mt: 2 }, mb: 2 }}>
                <Rating name="read-only" value={5} readOnly size="large" />
              </Box>
              <p className="italic mb-4">"Bir tasarımcı olarak dizaynını planladığım ofisimin tüm süreçlerinde yanımda olan Self Mimarlık'a teşekkürler."
              </p>
              <p className="font-semibold">Melike TIKIR</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-gray-800">
              <Box sx={{ '& > legend': { mt: 2 }, mb: 2 }}>
                <Rating name="read-only" value={5} readOnly size="large" />
              </Box>
              <p className="italic mb-4">"Self Mimarlık'ın tüm sürece bakış açısı çok farklı, müşteri gözüyle bakıp müşterimi, bütçe gözüyle bakıp cebimi düşünen bir ofis, gerçekten mükemmel."
              </p>
              <p className="font-semibold">Tuna KARA</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-gray-800">
              <Box sx={{ '& > legend': { mt: 2 }, mb: 2 }}>
                <Rating name="read-only" value={5} readOnly size="large" />
              </Box>
              <p className="italic mb-4">"Evimin dekorasyonunun tüm süreçlerinden yanımda olan önce tasarlayan sonra planlayan Self Mimarlık'a teşekkür ederim."
              </p>
              <p className="font-semibold">Gönül Tıkır</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-gray-800">
              <Box sx={{ '& > legend': { mt: 2 }, mb: 2 }}>
                <Rating name="read-only" value={5} readOnly size="large" />
              </Box>
              <p className="italic mb-4">"Self Mimarlık, hayallerimdeki evi gerçeğe dönüştürdü. Her aşamada titizlikle çalıştılar ve ortaya harika bir proje çıktı."
              </p>
              <p className="font-semibold">Akın TIKIR</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-gray-800">
              <Box sx={{ '& > legend': { mt: 2 }, mb: 2 }}>
                <Rating name="read-only" value={5} readOnly size="large" />
              </Box>
              <p className="italic mb-4">"Ofisimin iç mimarisi için Self Mimarlık ile çalıştım ve sonuçtan çok memnun kaldım. Profesyonellikleri ve yaratıcılıkları takdire şayan."
              </p>
              <p className="font-semibold">Elif Hande TIKIR</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-gray-800">
              <Box sx={{ '& > legend': { mt: 2 }, mb: 2 }}>
                <Rating name="read-only" value={5} readOnly size="large" />
              </Box>
              <p className="italic mb-4">"Proje yönetimindeki başarıları ve iletişime açık yaklaşımları sayesinde, karmaşık bir restorasyon projesini sorunsuz tamamladık."
              </p>
              <p className="font-semibold">Özge Kodaz</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-gray-800">
              <Box sx={{ '& > legend': { mt: 2 }, mb: 2 }}>
                <Rating name="read-only" value={5} readOnly size="large" />
              </Box>
              <p className="italic mb-4">"Self Mimarlık'ın detaylara verdiği önem ve müşteri odaklı yaklaşımları sayesinde, beklentilerimin üzerinde bir sonuç elde ettim."
              </p>
              <p className="font-semibold">Seray Kütük</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-gray-800">
              <Box sx={{ '& > legend': { mt: 2 }, mb: 2 }}>
                <Rating name="read-only" value={5} readOnly size="large" />
              </Box>
              <p className="italic mb-4">"Yenilikçi fikirleri ve modern tasarımlarıyla Self Mimarlık, yaşam alanımı tamamen değiştirdi. Gerçekten harikalar yarattılar."
              </p>
              <p className="font-semibold">Rabia Hakyemez</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-gray-800">
              <Box sx={{ '& > legend': { mt: 2 }, mb: 2 }}>
                <Rating name="read-only" value={5} readOnly size="large" />
              </Box>
              <p className="italic mb-4">"Büyük ölçekli projelerdeki deneyimleri ve çözüm odaklı yaklaşımları sayesinde, iş yerimiz için mükemmel bir tasarım ortaya çıktı."
              </p>
              <p className="font-semibold">Hikmet Tıkır</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 