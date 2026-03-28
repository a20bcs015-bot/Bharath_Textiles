import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye } from 'lucide-react';

const collections = [
  {
    image: '/assets/blue_shirt.jpg',
    title: 'Azure Motif',
    series: 'Batik Signature Series',
    price: 'Premium range'
  },
  {
    image: '/assets/black_shirt.jpg',
    title: 'Flowing Waves',
    series: 'Urban Abstract Series',
    price: 'Superior Cotton'
  },
  {
    image: '/assets/shop_interior.jpg',
    title: 'Bespoke Fabrics',
    series: 'Curated Textures',
    price: 'Infinite Customization'
  }
];

const Featured = () => {
  return (
    <section id="collection" className="section-padding" style={{ background: '#0a101f' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--primary)', 
              fontWeight: 600, 
              fontSize: '0.8rem', 
              textTransform: 'uppercase', 
              letterSpacing: '2px', 
              marginBottom: '1rem' 
            }}
          >
            <Sparkles size={16} /> Exclusive Selection
          </motion.div>
          
          <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}
          >
            Premium Collections
          </motion.h2>
        </div>

        <div className="grid-collection" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {collections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="collection-card"
            >
              <div className="card-image-wrap">
                <img src={item.image} alt={item.title} className="card-img" />
                <div className="overlay">
                  <button className="btn-view">View Details <Eye size={16}/></button>
                </div>
              </div>
              
              <div className="card-content" style={{ padding: '1.5rem 0' }}>
                 <p style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>{item.series}</p>
                 <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>{item.title}</h3>
                 <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .collection-card {
           position: relative;
           cursor: pointer;
        }
        
        .card-image-wrap {
           position: relative;
           aspect-ratio: 4/5;
           overflow: hidden;
           border-radius: 20px;
           background: #1e293b;
        }

        .card-img {
           width: 100%;
           height: 100%;
           object-fit: cover;
           transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .collection-card:hover .card-img {
           transform: scale(1.1) rotate(1deg);
        }

        .overlay {
           position: absolute;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
           background: rgba(15, 23, 42, 0.6);
           display: flex;
           align-items: center;
           justify-content: center;
           opacity: 0;
           transition: 0.5s ease;
        }

        .collection-card:hover .overlay {
           opacity: 1;
        }

        .btn-view {
           padding: 0.75rem 1.5rem;
           background: #fff;
           color: #000;
           border: none;
           border-radius: 50px;
           font-weight: 600;
           display: flex;
           align-items: center;
           gap: 0.5rem;
           transform: translateY(20px);
           transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .collection-card:hover .btn-view {
           transform: translateY(0);
        }

        @media (max-width: 768px) {
           .grid-collection {
              gap: 1.5rem !important;
           }
        }
      `}</style>
    </section>
  );
};

export default Featured;
