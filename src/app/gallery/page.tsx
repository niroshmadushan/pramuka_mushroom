"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Gallery() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>


      <section className="section-gallery fade-in-section" style={{paddingTop: '150px', backgroundColor: 'var(--off-white)', minHeight: '100vh', paddingBottom: '100px'}}>
        <div className="section-tag" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '15px'}}>
           <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> FULL GALLERY <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div>
        </div>
        <h1 style={{fontSize: '3.5rem', fontFamily: "'Playfair Display', serif", fontWeight: 400, margin: '20px 0 15px', color: 'var(--text-dark)'}}>Life on the farm</h1>
        <p style={{fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto 50px auto', lineHeight: 1.6}}>
          A complete glimpse into our growing rooms, traditional methods, and beautiful fresh harvests.
        </p>

        <div className="gallery-grid">
          <div className="gallery-item item-tall fade-in-section">
            <img src="/freshmushroom.jpg" alt="Fresh mushrooms close-up" />
          </div>
          <div className="gallery-item fade-in-section" style={{transitionDelay: '0.1s'}}>
            <img src="/mushroom_bags.png" alt="Mushroom bags" />
          </div>
          <div className="gallery-item fade-in-section" style={{transitionDelay: '0.2s'}}>
            <img src="/hero_bg.png" alt="Oyster mushrooms" />
          </div>
          <div className="gallery-item fade-in-section" style={{transitionDelay: '0.3s'}}>
            <img src="/traditional_hut.png" alt="Traditional hut" />
          </div>
          <div className="gallery-item item-tall fade-in-section" style={{transitionDelay: '0.4s'}}>
            <img src="/freshmushroom.jpg" alt="Fresh harvest" />
          </div>
          <div className="gallery-item item-tall fade-in-section" style={{transitionDelay: '0.5s'}}>
            <img src="/traditional_hut.png" alt="Traditional method" />
          </div>
          <div className="gallery-item fade-in-section" style={{transitionDelay: '0.1s'}}>
            <img src="/hero_bg.png" alt="Mushroom harvest" />
          </div>
          <div className="gallery-item item-tall fade-in-section" style={{transitionDelay: '0.2s'}}>
            <img src="/mushroom_bags.png" alt="Cultivation bags" />
          </div>
          <div className="gallery-item fade-in-section" style={{transitionDelay: '0.3s'}}>
            <img src="/traditional_hut.png" alt="Mushroom farm" />
          </div>
        </div>
      </section>


    </>
  );
}
