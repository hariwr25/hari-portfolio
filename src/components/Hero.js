import React from 'react';
import { FiArrowDown, FiCode, FiAward, FiBriefcase, FiCpu, FiBookOpen } from 'react-icons/fi';

const Hero = () => {
  const stats = [
    { icon: <FiCode />, value: "50+", label: "Projects Completed", desc: "Personal & Academic" },
    { icon: <FiBriefcase />, value: "1 Year", label: "Internship Experience", desc: "TVRI Yogyakarta" },
    { icon: <FiAward />, value: "Fresh", label: "Graduate", desc: "S1 Teknologi Informasi" },
  ];

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 75%, #000 100%), url(${process.env.PUBLIC_URL + "/images/kaki.jpg"})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover'
      }}
    >
      {/* Optional: Tambahkan overlay animasi jika ingin efek tambahan */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-left delay-100">
              <span className="text-white/80">Hi, I'm</span>
              <br />
              <span className="text-white">Hari Wahyu</span>
              <br />
              <span className="text-white">Ramadhan</span>
            </h1>
            
            <p className="text-xl text-white/90 animate-slide-left delay-200">
              <span className="font-semibold text-white">Web Developer</span>
            </p>
            
            <p className="text-white/80 leading-relaxed animate-slide-left delay-300">
  Saya adalah <span className="text-white font-semibold">lulusan S1 Teknologi Informasi </span> 
  dari <span className="text-white font-semibold">Universitas Muhammadiyah Yogyakarta</span> dengan 
  passion di dunia pengembangan web.
</p>

<p className="text-white/80 leading-relaxed animate-slide-left delay-300 mt-4">
  Saya memiliki pengalaman dalam mengembangkan berbagai project web, baik secara mandiri 
  maupun kolaborasi tim. Mulai dari aplikasi sederhana hingga sistem yang lebih kompleks, 
  saya terus belajar dan mengasah kemampuan di setiap project yang saya kerjakan.
</p>      
            <div className="flex flex-wrap gap-4 animate-slide-left delay-400">
              <a href="#projects" className="px-8 py-3 bg-white text-purple-600 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-semibold">
                Explore My Work 
                <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 font-semibold">
                Let's Connect
              </a>
            </div>
          </div>
          
          {/* Right Content - Stats & Profile */}
          <div className="animate-slide-right">
            <div className="relative">
              {/* Profile Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 relative overflow-hidden group border border-white/20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-md animate-pulse-glow"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping opacity-20"></div>
                    <img
                      src={process.env.PUBLIC_URL + "/images/profil.jpg"} 
                      alt="Hari Wahyu Ramadhan"
                      className="w-32 h-32 rounded-full object-cover relative z-10 border-4 border-white/50 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-2 text-white">Hari Wahyu Ramadhan</h3>
                  <p className="text-purple-200 text-center mb-1">Web Developer</p>
                  <p className="text-white/60 text-center text-sm mb-6">S1 Teknologi Informasi • Universitas Muhammadiyah Yogyakarta</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center group/stat">
                        <div className={`text-2xl text-white mb-1 flex justify-center group-hover/stat:scale-110 transition-transform`}>
                          {stat.icon}
                        </div>
                        <div className="text-xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/70">{stat.label}</div>
                        <div className="text-[10px] text-white/50 mt-0.5">{stat.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative Line */}
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <div className="flex justify-center gap-2 text-xs text-white/60">
                      <span className="flex items-center gap-1">
                        <FiCpu size={12} /> Full Stack
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <FiCode size={12} /> Problem Solver
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <FiBookOpen size={12} /> Fast Learner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors flex flex-col items-center gap-1">
          <span className="text-xs">Scroll Down</span>
          <FiArrowDown size={20} />
        </a>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
