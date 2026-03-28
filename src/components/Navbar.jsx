import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'nav-glass' : 'bg-transparent'}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <div className="logo h-12 flex items-center gap-2">
            <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
               BHARATH TEXTILES
            </span>
        </div>

        <ul className="desktop-menu" style={{ display: 'flex', gap: '3rem', fontWeight: 500 }}>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#collection" className="nav-link">Collection</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        <div className="mobile-toggle" style={{ display: 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
      
      <style>{`
        .nav-glass {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(194, 164, 120, 0.1);
        }
        
        .nav-link {
          position: relative;
          color: var(--text-light);
          transition: 0.3s ease;
        }
        
        .nav-link:after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: 0.3s ease;
        }
        
        .nav-link:hover:after {
          width: 100%;
        }
        
        .nav-link:hover {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; cursor: pointer; color: var(--text-light); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
