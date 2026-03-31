import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth scroll untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Fungsi untuk menunggu semua gambar dan konten selesai dimuat
    const waitForContentToLoad = async () => {
      // Ambil semua gambar di halaman
      const images = document.querySelectorAll('img');
      const totalImages = images.length;
      let loadedImages = 0;

      // Update progress awal
      setProgress(10);

      // Jika tidak ada gambar, langsung lanjut
      if (totalImages === 0) {
        setProgress(100);
        setTimeout(() => setLoading(false), 500);
        return;
      }

      // Load setiap gambar
      const imagePromises = Array.from(images).map((img) => {
        return new Promise((resolve) => {
          if (img.complete) {
            loadedImages++;
            setProgress(10 + Math.floor((loadedImages / totalImages) * 90));
            resolve();
          } else {
            img.addEventListener('load', () => {
              loadedImages++;
              setProgress(10 + Math.floor((loadedImages / totalImages) * 90));
              resolve();
            });
            img.addEventListener('error', () => {
              loadedImages++;
              setProgress(10 + Math.floor((loadedImages / totalImages) * 90));
              resolve();
            });
          }
        });
      });

      // Tunggu semua gambar selesai dimuat
      await Promise.all(imagePromises);
      
      // Beri jeda kecil untuk memastikan semua konten terrender
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => setLoading(false), 500);
      }, 300);
    };

    // Jalankan fungsi loading
    waitForContentToLoad();
  }, []);

  if (loading) {
    return <Loader progress={progress} />;
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar />
      <Hero />
      <About />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;