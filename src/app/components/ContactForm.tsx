"use client";
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-form-container" style={{background: 'var(--off-white)', padding: '40px', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)'}}>
      {status === 'loading' && (
        <div className="popup-overlay" style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{background: 'white', padding: '40px', borderRadius: '10px', textAlign: 'center'}}>
            <div className="spinner" style={{width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid var(--primary-brown)', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 20px'}}></div>
            <h3 style={{color: 'var(--text-dark)'}}>Sending your request...</h3>
            <p style={{color: '#666', marginTop: '10px'}}>Please wait while we process your order.</p>
          </div>
        </div>
      )}

      {status === 'success' && (
        <div className="popup-overlay" style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{background: 'white', padding: '40px', borderRadius: '10px', textAlign: 'center'}}>
            <div style={{fontSize: '50px', color: 'green', marginBottom: '20px'}}>✅</div>
            <h3 style={{color: 'var(--text-dark)'}}>Request Sent Successfully!</h3>
            <p style={{color: '#666', marginTop: '10px', marginBottom: '20px'}}>We will get back to you shortly.</p>
            <button onClick={() => setStatus('idle')} className="btn-primary">Close</button>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="popup-overlay" style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{background: 'white', padding: '40px', borderRadius: '10px', textAlign: 'center'}}>
            <div style={{fontSize: '50px', color: 'red', marginBottom: '20px'}}>❌</div>
            <h3 style={{color: 'var(--text-dark)'}}>Failed to send request.</h3>
            <p style={{color: '#666', marginTop: '10px', marginBottom: '20px'}}>Please try again or contact us directly.</p>
            <button onClick={() => setStatus('idle')} className="btn-primary">Close</button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left'}}>
        <div>
          <label style={{display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)'}}>Your Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Nimal Perera" 
            required
            style={{width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none'}}
          />
        </div>
        <div style={{display: 'flex', gap: '20px'}}>
          <div style={{flex: 1}}>
            <label style={{display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)'}}>Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="hello@example.com" 
              required
              style={{width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none'}}
            />
          </div>
          <div style={{flex: 1}}>
            <label style={{display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)'}}>Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+94 77 000 0000" 
              required
              style={{width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none'}}
            />
          </div>
        </div>
        <div>
          <label style={{display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)'}}>Subject</label>
          <input 
            type="text" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Mushroom Order" 
            required
            style={{width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none'}}
          />
        </div>
        <div>
          <label style={{display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)'}}>Your Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How many mushrooms would you like, and when?" 
            required
            rows={4}
            style={{width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none', resize: 'vertical'}}
          ></textarea>
        </div>
        <button type="submit" className="btn-primary" style={{width: '100%', padding: '15px', marginTop: '10px', fontSize: '1.1rem'}}>
          Send Request
        </button>
      </form>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
