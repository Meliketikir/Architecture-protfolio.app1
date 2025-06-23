import type { Project } from '../types/project';

import modernVilla1 from '../images/pexels-yagiz-ucal-2152858471-32551631.jpg';
import modernVilla2 from '../images/pexels-expect-best-79873-323780.jpg';
import officeComplex1 from '../images/pexels-olly-3761508.jpg';
import cultureCenter1 from '../images/pexels-expect-best-79873-323780.jpg';
import minimalistHouse1 from '../images/pexels-karoldach-1113839.jpg';
import cafeRestaurant1 from '../images/icmekan.jpeg';
import turkishHouse1 from '../images/pexels-karoldach-1113839.jpg';
import artGallery1 from '../images/pexels-gdtography-277628-911758.jpg';
import modernOfficeInterior1 from '../images/pexels-karoldach-1113839.jpg';
import summerVilla1 from '../images/pexels-karoldach-1113839.jpg';
import ofis1 from '../images/ofis1.jpg';
import ofis2 from '../images/ofis2.jpg';
import villa from '../images/villa.jpg';
import villa2 from '../images/villa2.jpeg';

// Yeni görselleri import et
import siteBinaImage from '../images/site_ve_bina.jpg';
import ticariImage from '../images/ticari.jpg';
import icMekanImage from '../images/ic_mekan.jpg';

// Mock data - Gerçekleri birleştirme API'den gelecek
const makeProjects: Project[] = [
  {
    id: '1',
    title: 'Modern Villa Projesi',
    description: 'İstanbul\'da lüks bir villa projesi. Modern mimari ve sürdürülebilir tasarım esaslarıyla inşa edilmiştir.',
    images: [
      modernVilla1,
      modernVilla2,
      villa,
      villa2,
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Konut',
    location: 'İstanbul, Türkiye',
    year: 2023,
    client: 'Özel Müşteri',
    services: ['Mimari Tasarım', 'İç Mekan Tasarımı', 'Peyzaj Tasarımı'],
    features: ['Güneş Panelleri', 'Akıllı Ev Sistemleri', 'Yağmur Suyu Toplama'],
    status: 'completed',
    details: 'Bu proje, modern yaşam tarzına uygun olarak tasarlandı ve yüksek kaliteli malzemelerle inşa edildi. Geniş yaşam alanları, akıllı ev sistemleri ve doğal ışıklandırmasıyla dikkat çekiyor.',
  },
  {
    id: '8',
    title: 'Modern Ofis İç Mekan Tasarımı',
    description: 'Büyük bir teknoloji şirketinin modern ve ergonomik iç mekan ofis tasarımı. Açık ofis düzeni ve ortak çalışma alanları ile verimlilik hedeflendi.',
    images: [
      ofis1,
      ofis2,
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'İç Mekan',
    location: 'İstanbul, Türkiye',
    year: 2023,
    client: 'Tech Solutions Ltd.',
    services: ['İç Mekan Tasarımı', 'Ergonomi Danışmanlığı'],
    features: ['Akustik Paneller', 'Bitki Duvarları'],
    status: 'completed',
    details: 'Teknoloji şirketleri için özel olarak tasarlanmış bu ofis, verimliliği artırmak ve çalışan refahını sağlamak amacıyla akıllı çözümler sunuyor.',
  }
];

export const getProjects = async (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(makeProjects);
    }, 500); // Simulate network delay
  });
};

export const getProjectById = async (id: string): Promise<Project | undefined> => {
  // Simüle edilmiş API çağrısı
  return new Promise((resolve) => {
    setTimeout(() => {
      const project = makeProjects.find(p => p.id === id);
      resolve(project);
    }, 500);
  });
};

export const getProjectsByCategory = async (category: string): Promise<Project[]> => {
  // Simüle edilmiş API çağrısı
  return new Promise((resolve) => {
    setTimeout(() => {
      const projects = makeProjects.filter(p => p.category === category);
      resolve(projects);
    }, 500);
  });
}; 