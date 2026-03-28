import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '4rem 0', 
      background: '#070d1a', 
      borderTop: '1px solid rgba(255,255,255,0.05)',
      color: 'rgba(255,255,255,0.4)',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <h3 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.25rem', marginBottom: '1rem', letterSpacing: '2px' }}>BHARATH TEXTILES</h3>
            <p>Premium Men's & Ethnic Wear Showroom. Your destination for bespoke style and heritage fabrics.</p>
          </div>
          <div>
            <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Sitemap</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#home">Home</a></li>
              <li><a href="#collection">Collection</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
             <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Collections</h4>
             <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Batik Prints</li>
              <li>Handloom Cotton</li>
              <li>Premium Shirting</li>
              <li>Ethnic Menswear</li>
            </ul>
          </div>
          <div>
             <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Legal</h4>
             <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Quality Guarantee</li>
            </ul>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingTop: '3rem', 
          borderTop: '1px solid rgba(255,255,255,0.05)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p>&copy; 2026 Bharath Textiles. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
