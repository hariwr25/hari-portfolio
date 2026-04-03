import React from 'react';
import { FiMail, FiSend, FiLinkedin, FiMessageCircle, FiCopy } from 'react-icons/fi';

const Contact = () => {
  const quickActions = [
    {
      icon: <FiMessageCircle size={24} />,
      title: "WhatsApp Saya",
      desc: "Respon cepat via WhatsApp",
      link: "https://wa.me/6287724422443?text=Halo%20Hari,%20saya%20tertarik%20untuk%20berdiskusi%20dengan%20Anda.",
      color: "hover:bg-green-500/20"
    },
    {
      icon: <FiMail size={24} />,
      title: "Email Langsung",
      desc: "Kirim email langsung ke inbox",
      link: "mailto:hariwr25@gmail.com?subject=Diskusi%20Kerjasama&body=Halo%20Hari,",
      color: "hover:bg-blue-500/20"
    },
    {
      icon: <FiLinkedin size={24} />,
      title: "LinkedIn",
      desc: "Terhubung via LinkedIn",
      link: "https://www.linkedin.com/in/hari-wahyu-ramadhan-54707b314/",
      color: "hover:bg-blue-500/20"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Saya sedia untuk menangani masalah proyek tersebut, dan terbuka untuk kesempatan karir baru. 
            Dengan pengalaman dan keahlian dalam berbagai teknologi web, saya siap membantu mewujudkan proyek Anda.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Quick Actions - Tanpa double */}
          <div className="glass-effect rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="inline-block p-4 rounded-2xl gradient-bg mb-4">
                <FiSend className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">Mari Terhubung!</h3>
              <p className="text-gray-400 text-sm">
                Pilih cara termudah untuk menghubungi saya
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <a
                  key={index}
                  href={action.link}
                  target={action.link.startsWith('http') ? "_blank" : "_self"}
                  rel={action.link.startsWith('http') ? "noopener noreferrer" : ""}
                  className={`flex flex-col items-center gap-3 p-5 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ${action.color} hover:border-cyan-500 group text-center`}
                >
                  <div className="p-3 rounded-xl gradient-bg text-white group-hover:scale-110 transition-transform">
                    {action.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{action.title}</div>
                    <div className="text-gray-500 text-xs mt-1">{action.desc}</div>
                  </div>
                  <div className="text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Klik untuk hubungi →
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-gray-300 text-sm">
                    <span className="font-semibold text-cyan-400">Siap membantu!</span> Saya akan merespon dalam waktu kurang dari 24 jam.
                  </p>
                </div>
                
                {/* Email dengan tombol copy - hanya 1 kali */}
                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                  <FiMail className="text-cyan-400" size={14} />
                  <code className="text-cyan-400 text-sm">hariwr25@gmail.com</code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('hariwr25@gmail.com');
                      alert('Email berhasil disalin!');
                    }}
                    className="ml-1 px-2 py-1 text-xs bg-white/10 rounded hover:bg-white/20 transition flex items-center gap-1"
                  >
                    <FiCopy size={12} /> Salin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;