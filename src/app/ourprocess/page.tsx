"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function OurProcess() {
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


      {/* Hero Section for Process */}
      <div style={{padding: '180px 5% 50px 5%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative'}}>
        <div className="story-leaf-1" style={{top: '120px', left: '10%'}}>👨‍🌾</div>
        <div className="story-leaf-2" style={{bottom: '0', right: '10%'}}>🪵</div>
        <div className="section-tag" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '15px'}}>
             <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> TRADITIONAL CRAFT <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div>
        </div>
        <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '4.5rem', color: 'var(--text-dark)', marginBottom: '20px', lineHeight: '1.2'}}>
          How We Grow
        </h1>
        <p style={{fontSize: '1.2rem', color: '#666', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto'}}>
          Discover the time-honored Sri Lankan farming methods that make our oyster mushrooms exceptionally pure, fresh, and flavorful.
        </p>
      </div>

      {/* Step 1: Spawn & Substrate */}
      <section className="section-story fade-in-section" style={{paddingTop: '50px', paddingBottom: '100px'}}>
        <div className="story-image" style={{padding: '20px'}}>
          <div className="story-leaf-1" style={{animationDelay: '1s'}}>✨</div>
          <Image src="/hero_bg.png" alt="Spawn & Substrate" width={600} height={500} className="animated-story-img" style={{height: '500px'}} />
          <div className="process-badge" style={{top: '40px', left: '0px', width: '60px', height: '60px', fontSize: '1.5rem', zIndex: 10}}>1</div>
        </div>
        <div className="story-content">
          <div className="section-tag" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
             <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> STEP 1
          </div>
          <h2>Spawn & Substrate</h2>
          <p>
            The journey begins with the foundation of life: the substrate. We carefully prepare a clean, natural mixture using locally sourced sawdust and agricultural byproducts. This organic base provides all the essential nutrients the mushrooms will need to thrive.
          </p>
          <p style={{marginTop: '15px'}}>
            Once the substrate is precisely mixed and hydrated, we tightly pack it into cultivation bags. These bags are then inoculated with our premium, high-vitality mushroom spawn—the "seeds" from which our beautiful oyster mushrooms will grow. Every step here requires intense hygiene and care to ensure a pure harvest.
          </p>
        </div>
      </section>

      {/* Step 2: Traditional Steaming */}
      <div style={{backgroundColor: 'var(--off-white)', width: '100%'}}>
        <section className="section-story fade-in-section" style={{paddingTop: '100px', paddingBottom: '100px', flexDirection: 'row-reverse'}}>
          <div className="story-image" style={{padding: '20px'}}>
            <Image src="/traditional_hut.png" alt="Traditional Steaming" width={600} height={500} className="animated-story-img" style={{height: '500px'}} />
            <div className="process-badge" style={{top: '40px', right: '0px', left: 'auto', width: '60px', height: '60px', fontSize: '1.5rem', zIndex: 10}}>2</div>
          </div>
          <div className="story-content">
            <div className="section-tag" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
               <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> STEP 2
            </div>
            <h2>Traditional Steaming</h2>
            <p>
              Before the mycelium can grow, the substrate bags must be completely sterilized. Instead of relying on massive industrial autoclaves, we honor the time-tested Sri Lankan method of wood-fired steaming.
            </p>
            <p style={{marginTop: '15px'}}>
              The bags are carefully loaded into a large, custom-built steel barrel. For several hours, a slow and steady wood fire heats the water at the base, creating a dense steam that purifies the bags. This sustainable, traditional approach ensures zero contamination while giving our farm its rustic, authentic soul.
            </p>
          </div>
        </section>
      </div>

      {/* Step 3: Growing Room */}
      <section className="section-story fade-in-section" style={{paddingTop: '100px', paddingBottom: '100px'}}>
        <div className="story-image" style={{padding: '20px'}}>
          <div className="story-leaf-2" style={{animationDelay: '0.5s'}}>🌱</div>
          <Image src="/mushroom_bags.png" alt="Growing Room" width={600} height={500} className="animated-story-img" style={{height: '500px'}} />
          <div className="process-badge" style={{top: '40px', left: '0px', width: '60px', height: '60px', fontSize: '1.5rem', zIndex: 10}}>3</div>
        </div>
        <div className="story-content">
          <div className="section-tag" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
             <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> STEP 3
          </div>
          <h2>The Growing Room</h2>
          <p>
            Once sterilized and cooled, the bags are moved into our dark, climate-controlled incubation rooms. Here, patience is key. Over the next few weeks, the white mycelium slowly colonizes the substrate, weaving a dense, healthy network through the bag.
          </p>
          <p style={{marginTop: '15px'}}>
            When the time is right, we transition them to our high-humidity fruiting rooms. By carefully managing fresh air flow, temperature, and moisture, we simulate the perfect natural woodland environment. Soon, tiny "pins" emerge, rapidly blossoming into stunning, wide-capped oyster mushrooms.
          </p>
        </div>
      </section>

      {/* Step 4: Fresh Harvest */}
      <div style={{backgroundColor: 'var(--off-white)', width: '100%'}}>
        <section className="section-story fade-in-section" style={{paddingTop: '100px', paddingBottom: '100px', flexDirection: 'row-reverse'}}>
          <div className="story-image" style={{padding: '20px'}}>
            <div className="story-leaf-1" style={{animationDelay: '2s'}}>✨</div>
            <Image src="/freshmushroom.jpg" alt="Fresh Harvest" width={600} height={500} className="animated-story-img" style={{height: '500px'}} />
            <div className="process-badge" style={{top: '40px', right: '0px', left: 'auto', width: '60px', height: '60px', fontSize: '1.5rem', zIndex: 10}}>4</div>
          </div>
          <div className="story-content">
            <div className="section-tag" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
               <div style={{width: '30px', height: '2px', backgroundColor: 'var(--primary-brown)'}}></div> STEP 4
            </div>
            <h2>Fresh Harvest</h2>
            <p>
              Timing is everything when it comes to harvesting. Our experienced team hand-picks every single mushroom at its absolute peak of maturity to guarantee the best possible size, texture, and nutritional value.
            </p>
            <p style={{marginTop: '15px'}}>
              Because oyster mushrooms are incredibly delicate, we handle them with the utmost care. Within hours of being plucked from the growing racks, they are sorted, eco-packaged, and dispatched directly to you—delivering a farm-to-table freshness that you can instantly taste.
            </p>
            <div style={{marginTop: '40px'}}>
              <a href="/#order" className="btn-primary">Order Fresh Today</a>
            </div>
          </div>
        </section>
      </div>


    </>
  );
}
