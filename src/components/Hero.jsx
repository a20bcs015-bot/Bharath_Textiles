import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="hero-section" style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
      background: 'var(--bg-dark)'
    }}>
      
      {/* Background with overlay */}
      <div className="hero-bg" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/assets/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.35,
        filter: 'grayscale(15%)'
      }}></div>
      
      {/* Glow effects */}
      <div className="hero-glow"></div>

      <div className="container relative z-10">
        <div style={{ maxWidth: '800px' }}>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              color: 'var(--primary)', 
              fontWeight: 600, 
              letterSpacing: '4px', 
              textTransform: 'uppercase', 
              fontSize: '0.9rem',
              marginBottom: '1rem' 
            }}>
            Established Quality
          </motion.h4>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
                fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                fontWeight: 800
            }}>
            <span className="text-gradient">Elegance</span> Woven Into <br/> 
            Every <span style={{ color: 'var(--primary)' }}>Thread</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              fontSize: '1.1rem', 
              color: 'rgba(255,255,255,0.7)', 
              marginBottom: '2.5rem', 
              maxWidth: '550px',
              lineHeight: 1.6
            }}>
            Discover the ultimate destination for premium men's shirting, ethnic wear, and bespoke textiles. Celebrate style with Bharath Textiles.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="hero-btns"
             style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
          >
            <button className="btn-premium">
              Explore Collection <ShoppingBag size={20} />
            </button>
            <button className="btn-outline">
              Our Story
            </button>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 50vw;
          height: 100vh;
          background: radial-gradient(circle at 70% 30%, rgba(194,164,120,0.1), transparent 70%);
          pointer-events: none;
        }

        @media (max-width: 768px) {
           .hero-section {
              text-align: center;
              padding-top: 100px;
           }
           .hero-bg {
              opacity: 0.25;
           }
           .hero-btns {
              justify-content: center;
              gap: 1rem !important;
           }
        }
      `}</style>
    </div>
  );
};

export default Hero;
