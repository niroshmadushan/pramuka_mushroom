"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function OurStory() {
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


      <div style={{padding: '150px 5% 50px 5%', maxWidth: '1000px', margin: '0 auto', textAlign: 'center'}}>
        <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '4rem', color: 'var(--primary-brown)', marginBottom: '20px'}}>Our Heritage</h1>
        <p style={{fontSize: '1.2rem', color: '#555', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto'}}>
          Discover the roots of Pramuka Mushroom, where deep respect for the land meets generations of traditional Sri Lankan farming.
        </p>
      </div>

      <section className="section-story" style={{paddingTop: '0'}}>
        <div className="story-image">
          <Image src="/traditional_hut.png" alt="Traditional Hut" width={600} height={500} style={{borderRadius: '20px', objectFit: 'cover', height: '500px'}} />
        </div>
        <div className="story-content">
          <div className="section-tag" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
             <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> TRADITION
          </div>
          <h2>Rooted in Sri Lankan tradition</h2>
          <p>
            At Pramuka Mushroom, growing is a craft passed down with care. We prepare our substrate by hand and sterilise it over a wood-fired barrel — the same honest, traditional method Sri Lankan farmers have trusted for generations.
          </p>
          <p>
            No shortcuts, no chemicals. Just clean water, natural materials, patience, and a deep respect for nature. Every mushroom that reaches your kitchen is nurtured from spawn to harvest right here on our farm.
          </p>
          
          <div className="story-badges">
            <div className="story-badge">🍃 100% Natural</div>
            <div className="story-badge">🛡️ Chemical-Free</div>
            <div className="story-badge">☀️ Fresh Daily</div>
          </div>
        </div>
      </section>


    </>
  );
}
