"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Benefits() {
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


      {/* Hero Section for Benefits */}
      <div style={{padding: '180px 5% 50px 5%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative'}}>
        <div className="story-leaf-1" style={{top: '120px', left: '10%'}}>✨</div>
        <div className="story-leaf-2" style={{bottom: '0', right: '10%'}}>🍃</div>
        <div className="section-tag" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '15px'}}>
             <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> THE POWER OF OYSTER MUSHROOMS <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div>
        </div>
        <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '4.5rem', color: 'var(--text-dark)', marginBottom: '20px', lineHeight: '1.2'}}>
          Nature's Perfect Superfood
        </h1>
        <p style={{fontSize: '1.2rem', color: '#666', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto'}}>
          Packed with essential nutrients, our oyster mushrooms aren't just delicious — they are a foundational pillar for a healthier, more vibrant lifestyle.
        </p>
      </div>

      {/* The 6 Values Grid */}
      <section className="section-values" style={{paddingTop: '50px'}}>
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
      </section>

      {/* Deep Dive Section */}
      <section className="section-story fade-in-section" style={{paddingTop: '50px', paddingBottom: '100px'}}>
        <div className="story-image" style={{padding: '20px'}}>
          <div className="story-leaf-1" style={{animationDelay: '1s'}}>✨</div>
          <Image src="/hero_bg.png" alt="Oyster Mushrooms" width={600} height={500} className="animated-story-img" style={{height: '600px'}} />
          <div className="floating-est-card" style={{bottom: '-20px', right: '-20px', padding: '30px', animation: 'floatSlow 6s ease-in-out infinite reverse'}}>
            <h4 style={{fontSize: '2.5rem', marginBottom: '0'}}>85%</h4>
            <span>Fewer Calories</span>
          </div>
        </div>
        <div className="story-content">
          <div className="section-tag" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
             <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> NUTRITIONAL PROFILE
          </div>
          <h2>Heart & Immune Health</h2>
          <p>
            Oyster mushrooms are celebrated worldwide for their incredible ability to support heart health and boost the immune system naturally. They contain powerful beta-glucans which actively help to regulate cholesterol levels.
          </p>
          <div style={{marginTop: '40px'}}>
            <div className="progress-container" style={{marginBottom: '25px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <strong style={{color: 'var(--text-dark)', fontSize: '1.1rem'}}>Antioxidants (Ergothioneine)</strong>
                <span style={{color: 'var(--primary-brown)', fontWeight: 'bold'}}>High</span>
              </div>
              <div style={{width: '100%', height: '10px', backgroundColor: '#e5e7eb', borderRadius: '5px', overflow: 'hidden'}}>
                <div style={{width: '90%', height: '100%', backgroundColor: 'var(--primary-brown)', borderRadius: '5px', transition: 'width 1s ease-in-out'}}></div>
              </div>
            </div>
            
            <div className="progress-container" style={{marginBottom: '25px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <strong style={{color: 'var(--text-dark)', fontSize: '1.1rem'}}>B-Vitamins (B3, B5)</strong>
                <span style={{color: 'var(--primary-brown)', fontWeight: 'bold'}}>Excellent</span>
              </div>
              <div style={{width: '100%', height: '10px', backgroundColor: '#e5e7eb', borderRadius: '5px', overflow: 'hidden'}}>
                <div style={{width: '85%', height: '100%', backgroundColor: 'var(--primary-brown)', borderRadius: '5px', transition: 'width 1s ease-in-out', transitionDelay: '0.2s'}}></div>
              </div>
            </div>

            <div className="progress-container">
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <strong style={{color: 'var(--text-dark)', fontSize: '1.1rem'}}>Fat & Cholesterol</strong>
                <span style={{color: 'var(--primary-brown)', fontWeight: 'bold'}}>Zero</span>
              </div>
              <div style={{width: '100%', height: '10px', backgroundColor: '#e5e7eb', borderRadius: '5px', overflow: 'hidden'}}>
                <div style={{width: '5%', height: '100%', backgroundColor: 'var(--primary-brown)', borderRadius: '5px', transition: 'width 1s ease-in-out', transitionDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
          
          <div style={{marginTop: '50px'}}>
            <a href="/#order" className="btn-primary">Taste the difference</a>
          </div>
        </div>
      </section>

      {/* Brain Health & Longevity - Image Right */}
      <section className="section-story fade-in-section" style={{paddingTop: '50px', paddingBottom: '100px', flexDirection: 'row-reverse'}}>
        <div className="story-image" style={{padding: '20px'}}>
          <div className="story-leaf-1" style={{animationDelay: '1.5s'}}>🍄</div>
          <Image src="/traditional_hut.png" alt="Mushroom Farm" width={600} height={500} className="animated-story-img" style={{height: '500px'}} />
          <div className="floating-est-card" style={{bottom: '-20px', left: '-20px', right: 'auto', padding: '30px', animation: 'floatSlow 6s ease-in-out infinite'}}>
            <h4 style={{fontSize: '2.5rem', marginBottom: '0'}}>100%</h4>
            <span>Pure Nature</span>
          </div>
        </div>
        <div className="story-content">
          <div className="section-tag" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
             <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> BRAIN HEALTH & LONGEVITY
          </div>
          <h2>Protect Your Mind</h2>
          <p>
            Oyster mushrooms are uniquely rich in an amino acid called <strong>Ergothioneine</strong>. This powerful antioxidant is highly concentrated in oyster mushrooms compared to other vegetables. 
          </p>
          <p style={{marginTop: '15px'}}>
            It acts as a powerful cellular protector, helping to reduce oxidative stress which is linked to aging and cognitive decline. Incorporating our fresh mushrooms into your diet means feeding your brain the fuel it needs to stay sharp, focused, and healthy as you age.
          </p>
          <ul style={{listStyle: 'none', marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px'}}>
             <li style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <div style={{background: 'var(--off-white)', padding: '10px', borderRadius: '50%', color: 'var(--primary-brown)'}}>🧠</div>
                <strong>Enhances cognitive function and focus</strong>
             </li>
             <li style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <div style={{background: 'var(--off-white)', padding: '10px', borderRadius: '50%', color: 'var(--primary-brown)'}}>🛡️</div>
                <strong>Protects cells against oxidative stress</strong>
             </li>
             <li style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <div style={{background: 'var(--off-white)', padding: '10px', borderRadius: '50%', color: 'var(--primary-brown)'}}>🌱</div>
                <strong>Supports long-term neurological health</strong>
             </li>
          </ul>
        </div>
      </section>

      {/* Sustainability & Culinary - Image Left */}
      <div style={{backgroundColor: 'var(--off-white)', width: '100%'}}>
        <section className="section-story fade-in-section" style={{paddingTop: '100px', paddingBottom: '100px'}}>
          <div className="story-image" style={{padding: '20px'}}>
            <div className="story-leaf-2" style={{animationDelay: '0.5s'}}>✨</div>
            <Image src="/mushroom_bags.png" alt="Mushroom Bags" width={600} height={500} className="animated-story-img" style={{height: '500px'}} />
          </div>
          <div className="story-content">
            <div className="section-tag" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
               <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> CULINARY EXCELLENCE
            </div>
            <h2>Versatile & Sustainable</h2>
            <p>
              Beyond their health benefits, oyster mushrooms are a culinary masterpiece. They possess a delicate, savory flavor with a meaty texture that absorbs seasonings beautifully. From stir-fries to creamy pastas, they are the perfect meat alternative or gourmet addition to any dish.
            </p>
            <p style={{marginTop: '15px'}}>
              Equally important is how we grow them. Our mushrooms are cultivated using highly sustainable, low-impact traditional Sri Lankan farming methods. We utilize locally sourced organic substrate, ensuring every bite is not only good for your body but good for our planet.
            </p>
            <div style={{marginTop: '40px', display: 'flex', gap: '20px'}}>
               <div style={{background: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', flex: 1, textAlign: 'center'}}>
                  <h4 style={{fontSize: '2rem', color: 'var(--primary-brown)', marginBottom: '5px'}}>0%</h4>
                  <p style={{fontSize: '0.9rem', color: '#666', margin: 0}}>Chemicals Used</p>
               </div>
               <div style={{background: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', flex: 1, textAlign: 'center'}}>
                  <h4 style={{fontSize: '2rem', color: 'var(--primary-brown)', marginBottom: '5px'}}>24hr</h4>
                  <p style={{fontSize: '0.9rem', color: '#666', margin: 0}}>Harvest to Table</p>
               </div>
            </div>
          </div>
        </section>
      </div>


    </>
  );
}
