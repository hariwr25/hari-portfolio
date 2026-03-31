import React from 'react';
import ProjectCard from './ProjectCard';
import { FaUserGraduate, FaFingerprint, FaCalendarCheck, FaUtensils, FaShoppingCart, FaFilm } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pendaftaran PKL & Kunjungan TVRI",
      description: "Aplikasi manajemen pendaftaran PKL dan kunjungan industri. Memudahkan proses pendaftaran, verifikasi data, dan pengelolaan jadwal kunjungan secara terintegrasi.",
      image: "/images/registrasi.png",
      technologies: ["Vue.js", "Vue Router", "Axios", "Bootstrap", "MySQL"],
      demoLink: "https://tvri-pkl-kunjungan.vercel.app/",
      icon: <FaUserGraduate className="text-cyan-400" size={24} />,
      featured: true
    },
    {
      id: 2,
      title: "TVRI E-Kehadiran",
      description: "Sistem absensi digital dengan pencatatan kehadiran, rekap absensi, dan monitoring pegawai secara real-time. Memudahkan pengelolaan data kehadiran.",
      image: "/images/kehadiran.png",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "Chart.js"],
      demoLink: "https://yogyakarta.tvri.go.id/e-kehadiran/",
      icon: <FaFingerprint className="text-purple-400" size={24} />,
      featured: true
    },
    {
      id: 3,
      title: "TVRI Cuti Pegawai",
      description: "Aplikasi pengelolaan cuti pegawai dengan pengajuan online, approval atasan, dan histori cuti yang terintegrasi dengan data kepegawaian di TVRI Yogyakarta.",
      image: "/images/cuti.png",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "SweetAlert"],
      demoLink: "https://yogyakarta.tvri.go.id/pegawai/",
      icon: <FaCalendarCheck className="text-yellow-400" size={24} />,
      featured: false
    },
    {
      id: 4,
      title: "HOOH RESTAURANT",
      description: "Website restoran modern dengan tampilan menarik untuk menampilkan menu, galeri, dan informasi restoran. Dilengkapi sistem reservasi meja online.",
      image: "/images/hooh.png",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
      demoLink: "https://hariwr25.github.io/HOOH_Restaurant//",
      icon: <FaUtensils className="text-green-400" size={24} />,
      featured: false
    },
    {
      id: 5,
      title: "BELANJA GASIH",
      description: "Platform e-commerce dengan tampilan responsif. Menampilkan berbagai produk, keranjang belanja, dan sistem checkout yang user-friendly.",
      image: "/images/belanja.png",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Font Awesome"],
      demoLink: "https://hariwr25.github.io/HOOH_Restaurant//",
      icon: <FaShoppingCart className="text-orange-400" size={24} />,
      featured: false
    },
    {
      id: 6,
      title: "A Day in My Life",
      description: "Personal blog yang menceritakan aktivitas sehari-hari dengan desain aesthetic dan interaktif. Dilengkapi galeri foto dan catatan kegiatan sehari-hari.",
      image: "/images/a day.png",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "AOS Animation"],
      demoLink: "https://hariwr25.github.io/A-Day-In-MyLife/",
      icon: <FaFilm className="text-pink-400" size={24} />,
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Berikut adalah proyek-proyek yang telah saya kerjakan selama perkuliahan, 
            pengembangan personal, dan internship. Setiap proyek dibangun dengan teknologi 
            terkini dan fokus pada solusi yang user-friendly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;