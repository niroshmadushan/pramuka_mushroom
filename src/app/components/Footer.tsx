import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-main" style={{backgroundColor: 'var(--dark-brown)', color: 'white', padding: '80px 5% 30px', marginTop: 'auto'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '50px', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        
        {/* Brand Column */}
        <div style={{flex: '1 1 300px'}}>
          <div className="logo-container" style={{marginBottom: '20px', color: 'white'}}>
            <div className="logo-icon">🍄</div>
            <div className="logo-text">
              <div className="logo-title" style={{color: 'white'}}>Pramuka Mushroom</div>
              <div className="logo-subtitle" style={{color: '#aaa'}}>TRADITIONAL SRI LANKAN FARM</div>
            </div>
          </div>
          <p style={{color: '#ccc', lineHeight: 1.6, marginBottom: '30px', fontSize: '1.05rem'}}>
            Pure, chemical-free oyster mushrooms grown with tradition and care.
          </p>
          <div style={{display: 'flex', gap: '15px'}}>
            <a href="#" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', transition: 'all 0.3s ease'}} className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', transition: 'all 0.3s ease'}} className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', transition: 'all 0.3s ease'}} className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div style={{flex: '1 1 200px'}}>
          <h4 style={{fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '25px', color: 'white'}}>Explore</h4>
          <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <li><a href="/ourstory" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s ease'}}>Our Story</a></li>
            <li><a href="/benefits" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s ease'}}>Benefits</a></li>
            <li><a href="/ourprocess" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s ease'}}>Process</a></li>
            <li><a href="/gallery" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s ease'}}>Gallery</a></li>
            <li><a href="/#order" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s ease'}}>Products</a></li>
            <li><a href="/#order" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s ease'}}>Contact</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div style={{flex: '1 1 250px'}}>
          <h4 style={{fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '25px', color: 'white'}}>Contact</h4>
          <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <li style={{color: '#aaa'}}>+94 77 123 4567</li>
            <li><a href="mailto:hello@pramukamushroom.lk" style={{color: '#aaa', textDecoration: 'none', transition: 'color 0.2s ease'}}>hello@pramukamushroom.lk</a></li>
            <li style={{color: '#aaa'}}>Sri Lanka</li>
            <li style={{color: '#aaa', marginTop: '10px', fontSize: '0.95rem', lineHeight: 1.5}}>
              123 Farm Road,<br/>
              Mushroom Village,<br/>
              Colombo 01000
            </li>
          </ul>
        </div>

      </div>
      
      {/* Footer Bottom */}
      <div style={{maxWidth: '1200px', margin: '60px auto 0', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '25px 0 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', fontSize: '0.9rem', color: '#888'}}>
        <div>
          &copy; {new Date().getFullYear()} Pramuka Mushroom. All rights reserved.
        </div>
        <div>
          Grown with care in Sri Lanka 🍄
        </div>
      </div>
    </footer>
  );
}
