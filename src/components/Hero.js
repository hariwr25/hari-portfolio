import React from 'react';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiCode, FiAward, FiBriefcase, FiCpu, FiTrendingUp, FiBookOpen } from 'react-icons/fi';

const Hero = () => {
  const stats = [
    { icon: <FiCode />, value: "50+", label: "Projects Completed", desc: "Personal & Academic" },
    { icon: <FiBriefcase />, value: "1 Year", label: "Internship Experience", desc: "TVRI Yogyakarta" },
    { icon: <FiAward />, value: "Fresh", label: "Graduate", desc: "S1 Teknologi Informasi" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="animate-slide-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="text-sm text-gray-300">Open for opportunities</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-left delay-100">
              <span className="text-gray-300">Hi, I'm</span>
              <br />
              <span className="gradient-text">Hari Wahyu</span>
              <br />
              <span className="text-white">Ramadhan</span>
            </h1>
            
            <p className="text-xl text-gray-300 animate-slide-left delay-200">
              <span className="gradient-text font-semibold">Web Developer</span>
            </p>
            
            <p className="text-gray-400 leading-relaxed animate-slide-left delay-300">
              Saya adalah seorang <span className="text-cyan-400 font-semibold">Freshgraduate S1 Teknologi Informasi</span> 
              dari <span className="text-cyan-400 font-semibold">Universitas Muhammadiyah Yogyakarta</span> dengan 
              passion mendalam di dunia pengembangan web. Berpengalaman dalam membangun aplikasi 
              web modern menggunakan <span className="text-cyan-400">Laravel, Node.js, dan Vue.js</span> 
              selama masa internship dan pengembangan project. Saya siap membantu mewujudkan ide-ide 
              Anda menjadi solusi digital yang inovatif dan berkualitas.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-left delay-400">
              <a href="#projects" className="btn-primary flex items-center gap-2 group">
                Explore My Work 
                <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-outline">
                Let's Connect
              </a>
            </div>
            
            <div className="flex gap-6 pt-6 animate-slide-left delay-500">
              <a href="https://github.com/hariwr25" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <FiGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/hari-wahyu-ramadhan-54707b314/" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <FiLinkedin size={24} />
              </a>
              <a href="mailto:hariwr25@gmail.com"
  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
>
  <FiMail size={24} />
              </a>
            </div>
          </div>
          
          {/* Right Content - Stats & Profile */}
          <div className="animate-slide-right">
            <div className="relative">
              {/* Profile Card */}
              <div className="glass-effect rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 gradient-bg rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="absolute inset-0 gradient-bg rounded-full blur-md animate-pulse-glow"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-cyan-500/30 animate-ping opacity-20"></div>
                    <img
                      src="/images/profil.jpg" 
                      alt="Hari Wahyu Ramadhan"
                      className="w-32 h-32 rounded-full object-cover relative z-10 border-4 border-cyan-500/50 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-2">Hari Wahyu Ramadhan</h3>
                  <p className="text-cyan-400 text-center mb-1">Web Developer</p>
                  <p className="text-gray-500 text-center text-sm mb-6">S1 Teknologi Informasi • Universitas Muhammadiyah Yogyakarta</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center group/stat">
                        <div className={`text-2xl text-cyan-400 mb-1 flex justify-center group-hover/stat:scale-110 transition-transform`}>
                          {stat.icon}
                        </div>
                        <div className="text-xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">{stat.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative Line */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex justify-center gap-2 text-xs text-gray-500">
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
        <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1">
          <span className="text-xs">Scroll Down</span>
          <FiArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;