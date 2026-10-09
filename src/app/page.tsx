"use client";
import Image from "next/image";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    const countElements = document.querySelectorAll('.stat strong');
    countElements.forEach((el) => {
      const targetText = (el as HTMLElement).innerText;
      const target = parseInt(targetText.replace(/\D/g, ''));
      if (isNaN(target)) return;
      
      const suffix = targetText.replace(/[0-9]/g, '');
      let count = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const updateCount = () => {
        count += increment;
        if (count < target) {
          (el as HTMLElement).innerText = Math.ceil(count) + suffix;
          requestAnimationFrame(updateCount);
        } else {
          (el as HTMLElement).innerText = targetText;
        }
      };
      
      const statObserver = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
          updateCount();
          statObserver.disconnect();
        }
      });
      statObserver.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1>Farm-Fresh <i>Oyster Mushrooms</i>, Grown the Traditional Way</h1>
          <p>
            Hand-picked, chemical-free, and cultivated using sustainable local practices. Taste the authentic difference of our premium oyster mushrooms, delivered straight from farm to table.
          </p>
          <div className="hero-buttons">
            <a href="#order" className="btn-primary">Order fresh now</a>
            <a href="#process" className="btn-outline">View Process</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <strong>100%</strong>
              <span>Organic</span>
            </div>
            <div className="stat">
              <strong>5+</strong>
              <span>Years Exp</span>
            </div>
            <div className="stat">
              <strong>Farm</strong>
              <span>To Table</span>
            </div>
            <div className="stat">
              <strong>Daily</strong>
              <span>Harvest</span>
            </div>
            <div className="stat">
              <strong>150+</strong>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>
        <div className="hero-graphic">
          <div className="collage-container">
            <div className="animated-star">✨</div>
            <div className="animated-leaf">🍃</div>
            
            <div className="floating-text-bubble bubble-1">
               <span style={{color: 'var(--primary-brown)'}}>100% Organic</span>
            </div>
            
            <div className="floating-text-bubble bubble-2">
               ✨ Premium Quality
            </div>

            <Image src="/traditional_hut.png" alt="Traditional Hut" width={280} height={400} className="collage-img img-1" />
            <Image src="/hero_bg.png" alt="Oyster Mushrooms" width={280} height={320} className="collage-img img-3" />
            <Image src="/mushroom_bags.png" alt="Premium Mushrooms" width={380} height={500} className="collage-img img-2" />
            
            <div className="floating-badge">
              <span style={{color: '#F59E0B'}}>✨</span>
              <span>Freshly Harvested</span>
            </div>
          </div>
        </div>
      </header>
      <section id="story" className="section-story fade-in-section">
        <div className="story-image">
          <div className="story-leaf-1">🍃</div>
          <div className="story-leaf-2">✨</div>
          <Image src="/traditional_hut.png" alt="Traditional Hut" width={600} height={500} className="animated-story-img" />
          <div className="floating-est-card">
            <h4>Est.</h4>
            <span>Family Grown</span>
          </div>
        </div>
        <div className="story-content">
          <div className="section-tag" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
             <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> OUR STORY
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

          <div className="features" style={{marginTop: '40px'}}>
            <a href="/ourstory" className="btn-outline dark">Learn More</a>
          </div>
        </div>
      </section>

      <section id="values" className="section-values fade-in-section">
        <div className="section-tag" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '15px'}}>
             <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> WHY OYSTER MUSHROOMS <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div>
        </div>
        <h2>Goodness grown by nature</h2>
        <p className="values-subtitle">Tender, versatile and genuinely good for you — here's why our oyster mushrooms earn a place on your plate.</p>
        <div className="values-grid">
          <div className="value-card fade-in-section">
            <div className="value-icon">🤍</div>
            <h3>Rich in Protein</h3>
            <p>A wholesome, meat-free source of protein that keeps everyday meals nourishing and satisfying.</p>
          </div>
          <div className="value-card fade-in-section" style={{transitionDelay: '0.1s'}}>
            <div className="value-icon">🌿</div>
            <h3>Packed with Nutrients</h3>
            <p>Naturally high in fibre, B-vitamins, antioxidants and essential minerals for a healthy body.</p>
          </div>
          <div className="value-card fade-in-section" style={{transitionDelay: '0.2s'}}>
            <div className="value-icon">☀️</div>
            <h3>Light & Low Calorie</h3>
            <p>Deliciously filling yet low in calories and fat — a smart choice for mindful, balanced eating.</p>
          </div>
          <div className="value-card fade-in-section" style={{transitionDelay: '0.3s'}}>
            <div className="value-icon">🍃</div>
            <h3>Naturally Grown</h3>
            <p>Cultivated on natural substrate using traditional methods, the way nature intended.</p>
          </div>
          <div className="value-card fade-in-section" style={{transitionDelay: '0.4s'}}>
            <div className="value-icon">🛡️</div>
            <h3>Chemical-Free</h3>
            <p>Absolutely no pesticides or artificial additives — pure, clean and safe for your family.</p>
          </div>
          <div className="value-card fade-in-section" style={{transitionDelay: '0.5s'}}>
            <div className="value-icon">🧺</div>
            <h3>Freshly Harvested</h3>
            <p>Picked at peak freshness and delivered quickly, so every bite tastes farm-fresh.</p>
          </div>
        </div>
        
        <div style={{marginTop: '50px'}}>
          <a href="/benefits" className="btn-outline dark">Discover All Benefits</a>
        </div>
      </section>

      <section id="process" className="section-process fade-in-section">
        <div className="section-tag">
          <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> OUR PROCESS <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div>
        </div>
        <h2>From spawn to your kitchen</h2>
        <p className="process-subtitle">Every step is done by hand with patience and care — a traditional journey that gives our mushrooms their pure, natural flavour.</p>
        <div className="process-grid">
          <div className="process-card fade-in-section">
            <div className="process-img-wrapper">
              <div className="process-badge">1</div>
              <Image src="/hero_bg.png" alt="Spawn & Substrate" width={300} height={200} />
            </div>
            <div className="process-content">
              <h3>Spawn & Substrate</h3>
              <p>Clean natural substrate is packed into bags and inoculated with healthy mushroom spawn.</p>
            </div>
          </div>
          <div className="process-card fade-in-section" style={{transitionDelay: '0.2s'}}>
            <div className="process-img-wrapper">
              <div className="process-badge">2</div>
              <Image src="/traditional_hut.png" alt="Traditional Steaming" width={300} height={200} />
            </div>
            <div className="process-content">
              <h3>Traditional Steaming</h3>
              <p>Bags are sterilised over a wood-fired barrel — the time-honoured Sri Lankan way.</p>
            </div>
          </div>
          <div className="process-card fade-in-section" style={{transitionDelay: '0.4s'}}>
            <div className="process-img-wrapper">
              <div className="process-badge">3</div>
              <Image src="/mushroom_bags.png" alt="Growing Room" width={300} height={200} />
            </div>
            <div className="process-content">
              <h3>Growing Room</h3>
              <p>In cool, humid rooms the mycelium spreads and tender mushrooms begin to form.</p>
            </div>
          </div>
          <div className="process-card fade-in-section" style={{transitionDelay: '0.6s'}}>
            <div className="process-img-wrapper">
              <div className="process-badge">4</div>
              <Image src="/freshmushroom.jpg" alt="Fresh Harvest" width={300} height={200} />
            </div>
            <div className="process-content">
              <h3>Fresh Harvest</h3>
              <p>Mushrooms are hand-picked at their peak and prepared fresh for your table.</p>
            </div>
          </div>
        </div>
        <div style={{marginTop: '50px'}}>
          <a href="/ourprocess" className="btn-outline">Learn More About Our Process</a>
        </div>
      </section>

      <section className="section-reviews fade-in-section" style={{padding: '100px 0', backgroundColor: 'white', textAlign: 'center'}}>
        <div className="section-tag" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '15px'}}>
           <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> TESTIMONIALS <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div>
        </div>
        <h2 style={{fontSize: '3.2rem', fontFamily: "'Playfair Display', serif", fontWeight: 400, margin: '20px 0 15px', color: 'var(--text-dark)'}}>What our customers say</h2>
        <p style={{fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto 50px auto', lineHeight: 1.6}}>
          Hear from our happy customers across Sri Lanka who enjoy our fresh, organic oyster mushrooms.
        </p>

        <div className="reviews-carousel-wrapper">
          <div className="reviews-carousel">
            {/* Reviews Set 1 */}
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Absolutely the freshest oyster mushrooms I have ever bought. They cook perfectly and the taste is incredibly natural. Highly recommend!"</p>
              <div className="review-author">
                <div className="review-avatar">NP</div>
                <div className="review-author-info">
                  <h4>Nuwan Perera</h4>
                  <span>Colombo</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"I've been buying from Pramuka Mushroom for months now. The quality is always top-notch and it's completely chemical-free. Great service!"</p>
              <div className="review-author">
                <div className="review-avatar">KJ</div>
                <div className="review-author-info">
                  <h4>Kasun Jayasinghe</h4>
                  <span>Kandy</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"You can really taste the difference. The traditional growing methods give these mushrooms a unique, authentic flavour. My family loves them."</p>
              <div className="review-author">
                <div className="review-avatar">AF</div>
                <div className="review-author-info">
                  <h4>Amila Fernando</h4>
                  <span>Negombo</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Very tender and meaty texture. They are perfect for stir-fries and curries. Plus, knowing they are organic gives peace of mind."</p>
              <div className="review-author">
                <div className="review-avatar">TS</div>
                <div className="review-author-info">
                  <h4>Thilini Silva</h4>
                  <span>Galle</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Fast delivery and the mushrooms arrive so fresh! The packaging is great, and the customer service is very friendly. Best farm in SL."</p>
              <div className="review-author">
                <div className="review-avatar">CR</div>
                <div className="review-author-info">
                  <h4>Chamara Rathnayake</h4>
                  <span>Kurunegala</span>
                </div>
              </div>
            </div>
            
            {/* Reviews Set 2 (for seamless loop) */}
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Absolutely the freshest oyster mushrooms I have ever bought. They cook perfectly and the taste is incredibly natural. Highly recommend!"</p>
              <div className="review-author">
                <div className="review-avatar">NP</div>
                <div className="review-author-info">
                  <h4>Nuwan Perera</h4>
                  <span>Colombo</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"I've been buying from Pramuka Mushroom for months now. The quality is always top-notch and it's completely chemical-free. Great service!"</p>
              <div className="review-author">
                <div className="review-avatar">KJ</div>
                <div className="review-author-info">
                  <h4>Kasun Jayasinghe</h4>
                  <span>Kandy</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"You can really taste the difference. The traditional growing methods give these mushrooms a unique, authentic flavour. My family loves them."</p>
              <div className="review-author">
                <div className="review-avatar">AF</div>
                <div className="review-author-info">
                  <h4>Amila Fernando</h4>
                  <span>Negombo</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Very tender and meaty texture. They are perfect for stir-fries and curries. Plus, knowing they are organic gives peace of mind."</p>
              <div className="review-author">
                <div className="review-avatar">TS</div>
                <div className="review-author-info">
                  <h4>Thilini Silva</h4>
                  <span>Galle</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Fast delivery and the mushrooms arrive so fresh! The packaging is great, and the customer service is very friendly. Best farm in SL."</p>
              <div className="review-author">
                <div className="review-avatar">CR</div>
                <div className="review-author-info">
                  <h4>Chamara Rathnayake</h4>
                  <span>Kurunegala</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gallery fade-in-section">
        <div className="section-tag" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '15px'}}>
           <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> GALLERY <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div>
        </div>
        <h2 style={{fontSize: '3.2rem', fontFamily: "'Playfair Display', serif", fontWeight: 400, margin: '20px 0 15px', color: 'var(--text-dark)'}}>Life on the farm</h2>
        <p style={{fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto 50px auto', lineHeight: 1.6}}>
          A glimpse into our growing rooms, traditional methods and beautiful fresh harvests.
        </p>
        <div className="gallery-grid">
          <div className="gallery-item item-tall fade-in-section">
            <Image src="/freshmushroom.jpg" alt="Fresh mushrooms" fill style={{objectFit: 'cover'}} />
            <div className="gallery-overlay"><span className="gallery-icon">🔍</span></div>
          </div>
          <div className="gallery-item fade-in-section" style={{transitionDelay: '0.1s'}}>
            <Image src="/mushroom_bags.png" alt="Mushroom bags" fill style={{objectFit: 'cover'}} />
            <div className="gallery-overlay"><span className="gallery-icon">🔍</span></div>
          </div>
          <div className="gallery-item fade-in-section" style={{transitionDelay: '0.2s'}}>
            <Image src="/hero_bg.png" alt="Oyster mushrooms" fill style={{objectFit: 'cover'}} />
            <div className="gallery-overlay"><span className="gallery-icon">🔍</span></div>
          </div>
          <div className="gallery-item fade-in-section" style={{transitionDelay: '0.3s'}}>
            <Image src="/traditional_hut.png" alt="Traditional hut" fill style={{objectFit: 'cover'}} />
            <div className="gallery-overlay"><span className="gallery-icon">🔍</span></div>
          </div>
          <div className="gallery-item item-tall fade-in-section" style={{transitionDelay: '0.4s'}}>
            <Image src="/freshmushroom.jpg" alt="Fresh harvest" fill style={{objectFit: 'cover'}} />
            <div className="gallery-overlay"><span className="gallery-icon">🔍</span></div>
          </div>
          <div className="gallery-item item-tall fade-in-section" style={{transitionDelay: '0.5s'}}>
            <Image src="/traditional_hut.png" alt="Traditional method" fill style={{objectFit: 'cover'}} />
            <div className="gallery-overlay"><span className="gallery-icon">🔍</span></div>
          </div>
          <div className="gallery-item fade-in-section" style={{transitionDelay: '0.6s'}}>
            <Image src="/mushroom_bags.png" alt="More mushroom bags" fill style={{objectFit: 'cover'}} />
            <div className="gallery-overlay"><span className="gallery-icon">🔍</span></div>
          </div>
        </div>
        <div style={{marginTop: '50px', textAlign: 'center'}}>
          <a href="/gallery" className="btn-outline dark">View Full Gallery</a>
        </div>
      </section>

      <section className="section-produce fade-in-section" style={{padding: '100px 5%', display: 'flex', alignItems: 'center', gap: '50px', backgroundColor: 'var(--off-white)'}}>
        <div style={{flex: 1, display: 'flex', gap: '20px', justifyContent: 'center'}}>
          <Image src="/mushroom_bags.png" alt="Mushroom Bags" width={280} height={400} style={{borderRadius: '15px', objectFit: 'cover', marginTop: '40px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)'}} />
          <Image src="/freshmushroom.jpg" alt="Fresh Mushroom" width={280} height={400} style={{borderRadius: '15px', objectFit: 'cover', boxShadow: '0 15px 30px rgba(0,0,0,0.1)'}} />
        </div>
        <div style={{flex: 1}}>
          <div className="section-tag">
            <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> FRESH PRODUCE
          </div>
          <h2 style={{fontSize: '3rem', fontFamily: "'Playfair Display', serif", fontWeight: 400, color: 'var(--text-dark)', marginBottom: '20px'}}>
            Farm-fresh oyster mushrooms
          </h2>
          <div style={{display: 'inline-block', backgroundColor: 'rgba(216, 159, 75, 0.2)', padding: '8px 20px', borderRadius: '30px', fontSize: '0.9rem', color: 'var(--dark-brown)', fontWeight: 600, marginBottom: '20px'}}>
            Fresh stock available — message us for today's price
          </div>
          <p style={{color: '#666', fontSize: '1.1rem', marginBottom: '30px', lineHeight: 1.6}}>
            Delicate, savoury and wonderfully versatile, our oyster mushrooms bring a taste of the farm straight to your kitchen.
          </p>
          <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px'}}>
            <li style={{display: 'flex', gap: '10px', color: '#555'}}><span style={{color: 'var(--primary-brown)'}}>✓</span> Plump, tender oyster mushrooms picked at peak freshness</li>
            <li style={{display: 'flex', gap: '10px', color: '#555'}}><span style={{color: 'var(--primary-brown)'}}>✓</span> Grown on natural substrate with zero chemicals</li>
            <li style={{display: 'flex', gap: '10px', color: '#555'}}><span style={{color: 'var(--primary-brown)'}}>✓</span> Great for stir-fries, curries, soups and grills</li>
            <li style={{display: 'flex', gap: '10px', color: '#555'}}><span style={{color: 'var(--primary-brown)'}}>✓</span> Available fresh — order what you need, when you need it</li>
          </ul>
          <div style={{display: 'flex', gap: '15px'}}>
            <a href="#order" className="btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', padding: '15px 35px', borderRadius: '40px', backgroundColor: '#BE8C56', boxShadow: '0 10px 20px rgba(190, 140, 86, 0.3)'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Request Order
            </a>
          </div>
        </div>
      </section>

      <section id="order" className="section-contact fade-in-section" style={{padding: '100px 5%', backgroundColor: 'var(--light-cream)'}}>
        <div className="section-tag" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '15px'}}>
           <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> GET IN TOUCH <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div>
        </div>
        <h2 style={{fontSize: '3.2rem', fontFamily: "'Playfair Display', serif", fontWeight: 400, margin: '20px 0 15px', color: 'var(--text-dark)', textAlign: 'center'}}>
          Order fresh, straight from the farm
        </h2>
        <p style={{fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto 50px auto', lineHeight: 1.6, textAlign: 'center'}}>
          Send us a message or drop an email — we'd love to bring farm-fresh mushrooms to your table.
        </p>
        
        <div style={{display: 'flex', gap: '50px', maxWidth: '1200px', margin: '0 auto'}}>
          <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <div style={{display: 'flex', gap: '20px', padding: '25px', backgroundColor: 'var(--off-white)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)'}}>
              <div style={{width: '50px', height: '50px', backgroundColor: '#BE8C56', color: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(190, 140, 86, 0.2)'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg>
              </div>
              <div>
                <h4 style={{margin: '0 0 5px', color: 'var(--text-dark)'}}>Phone</h4>
                <p style={{margin: 0, color: '#666'}}>+94 77 123 4567</p>
              </div>
            </div>
            <div style={{display: 'flex', gap: '20px', padding: '25px', backgroundColor: 'var(--off-white)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)'}}>
              <div style={{width: '50px', height: '50px', backgroundColor: '#BE8C56', color: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(190, 140, 86, 0.2)'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <div>
                <h4 style={{margin: '0 0 5px', color: 'var(--text-dark)'}}>Call Us</h4>
                <p style={{margin: 0, color: '#666'}}>+94 77 123 4567</p>
              </div>
            </div>
            <div style={{display: 'flex', gap: '20px', padding: '25px', backgroundColor: 'var(--off-white)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)'}}>
              <div style={{width: '50px', height: '50px', backgroundColor: '#BE8C56', color: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(190, 140, 86, 0.2)'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h4 style={{margin: '0 0 5px', color: 'var(--text-dark)'}}>Email</h4>
                <p style={{margin: 0, color: '#666'}}>pramukamushroom@gmail.com</p>
              </div>
            </div>
            <div style={{display: 'flex', gap: '20px', padding: '25px', backgroundColor: 'var(--off-white)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)'}}>
              <div style={{width: '50px', height: '50px', backgroundColor: '#BE8C56', color: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(190, 140, 86, 0.2)'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h4 style={{margin: '0 0 5px', color: 'var(--text-dark)'}}>Location</h4>
                <p style={{margin: 0, color: '#666'}}>Sri Lanka</p>
              </div>
            </div>
          </div>
          <div style={{flex: 1.2}}>
            <ContactForm />
          </div>
        </div>
      </section>


    </>
  );
}
