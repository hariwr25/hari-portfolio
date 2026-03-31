import React, { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiBriefcase, FiClock } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { 
      icon: <FiMail size={24} />, 
      title: "Email", 
      value: "hariwr25@gmail.com", 
      link: "mailto:hariwr25@gmail.com", 
      desc: "Kirim email untuk diskusi lebih lanjut",
      response: "Balas dalam 24 jam"
    },
    { 
      icon: <FiPhone size={24} />, 
      title: "Phone", 
      value: "+62 877 2442 2443", 
      link: "tel:+687724422443", 
      desc: "Senin - Jumat, 09:00 - 17:00 WIB",
      response: "WhatsApp juga tersedia"
    },
    { 
      icon: <FiMapPin size={24} />, 
      title: "Location", 
      value: "Yogyakarta, Indonesia", 
      link: "#", 
      desc: "Siap bekerja remote maupun onsite",
      response: "Bersedia untuk relokasi"
    },
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
            Saya sedang mencari peluang baru untuk berkontribusi dalam proyek-proyek menarik. 
            Mari berdiskusi dan wujudkan ide-ide Anda bersama!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-left">
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl gradient-bg">
                  <FiBriefcase className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Let's Work Together</h3>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Saya selalu terbuka untuk kolaborasi, proyek freelance, atau kesempatan karir 
baru. Dengan pengalaman dan keahlian dalam berbagai teknologi 
                web, saya siap membantu mewujudkan proyek Anda.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="flex items-start gap-5 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl gradient-bg text-white group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white mb-1">{info.title}</div>
                      <div className="text-cyan-400 text-sm mb-1">{info.value}</div>
                      <div className="text-gray-500 text-xs">{info.desc}</div>
                      <div className="flex items-center gap-1 text-gray-600 text-xs mt-1">
                        <FiClock size={10} />
                        <span>{info.response}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-3">
                  <a href="https://github.com/hariwr25" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-400 transition-all transform hover:scale-110">
                    <FiGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/hari-wahyu-ramadhan-54707b314/" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-400 transition-all transform hover:scale-110">
                    <FiLinkedin size={20} />
                  </a>
                  <a href="mailto:hariwr25@gmail.com" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-400 transition-all transform hover:scale-110">
                    <FiMail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 animate-slide-right">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Kirim Pesan</h3>
            
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Nama Lengkap <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-white"
                  placeholder="Hari Wahyu Ramadhan"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email Address <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-white"
                  placeholder="hari@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Pesan <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-white resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 gradient-bg text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Mengirim...
                  </>
                ) : (
                  <>
                    Kirim Pesan <FiSend size={18} />
                  </>
                )}
              </button>
              
              <p className="text-gray-500 text-xs text-center mt-4">
                Saya akan membalas pesan Anda dalam waktu 1x24 jam. Terima kasih!
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;